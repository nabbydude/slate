import assert from 'assert/strict'
import {
  Editor,
  Element,
  MoveNodeOperation,
  Node,
  Operation,
  Path,
  PathTransformOptions,
  PathTransformingOperation,
  Transforms,
} from 'slate'
import { createTree } from '../../test-utils/transforms'

const affinities: PathTransformOptions['affinity'][] = [
  undefined,
  'forward',
  'backward',
  null,
]

describe.only('.transform', () => {
  const root = createTree()

  const [[operandNode, operandPath]] = Editor.nodes<Element>(root, {
    at: [],
    match: n => n.id === 'operand',
  })

  const testItNeverMutatesInputs = (op: PathTransformingOperation) => {
    return it('never mutates inputs', () => {
      const opCopy = structuredClone(op)
      for (const [node, path] of Node.nodes(root)) {
        const pathCopy = path.slice()
        Path.transform(path, op)
        assert.deepEqual(path, pathCopy, `mutates path for ${node.id}`)
        assert.deepEqual(op, opCopy, `mutates op for ${node.id}`)
      }
    })
  }

  const testItNeverReturnsNull = (op: PathTransformingOperation) => {
    return it('never returns null', () => {
      for (const [node, path] of Node.nodes(root)) {
        assert.notEqual(
          Path.transform(path, op),
          null,
          `returns null for ${node.id}`
        )
      }
    })
  }

  const testItIsNotAffectedByAffinity = (op: PathTransformingOperation) => {
    return it('is not affected by affinity', () => {
      for (const [node, path] of Node.nodes(root)) {
        const baseline = Path.transform(path, op)

        for (const affinity of affinities) {
          assert.deepEqual(
            Path.transform(path, op, { affinity }),
            baseline,
            `is for ${node.id} called with affinity ${affinity}`
          )
        }
      }
    })
  }

  const testItIsReversibleWhenNotNull = (op: PathTransformingOperation) => {
    return it('is reversible when not null', () => {
      const invserseOp = Operation.inverse(op) as PathTransformingOperation
      for (const [node, path] of Node.nodes(root)) {
        const transformedPath = Path.transform(path, op)
        if (!transformedPath) continue
        const untransformedPath = Path.transform(transformedPath, invserseOp)

        assert.deepEqual(untransformedPath, path, `isn't for ${node.id}`)
      }
    })
  }

  const testItReturnsTheInputIfUnchanged = (op: PathTransformingOperation) => {
    return it('returns the input if unchanged', () => {
      for (const [node, path] of Node.nodes(root)) {
        if (node.id === 'operand') {
          for (const affinity of affinities) {
            const result = Path.transform(path, op, { affinity })
            if (result !== path) {
              assert.notDeepEqual(
                result,
                path,
                `returned different ref with same value for ${node.id} with ${affinity} affinity`
              )
            }
          }
        } else {
          const result = Path.transform(path, op)
          if (result && Path.equals(result, path)) {
            assert.equal(
              result,
              path,
              `returned different ref with same value for ${node.id}`
            )
          }
        }
      }
    })
  }

  describe('called with insert_node', () => {
    const op: Operation = {
      type: 'insert_node',
      path: operandPath,
      node: { id: 'inserted', children: [] },
    }

    testItNeverMutatesInputs(op)
    testItNeverReturnsNull(op)
    testItIsNotAffectedByAffinity(op)
    testItReturnsTheInputIfUnchanged(op)

    it('matches Transforms.transform', () => {
      for (const [node, path] of Node.nodes(root)) {
        const newPath = Path.transform(path, op)

        const anotherTree = createTree()
        Transforms.transform(anotherTree, op)
        const nodeAtNewPath = Node.get(anotherTree, newPath)
        assert.equal(nodeAtNewPath.id, node.id, `does not match for ${node.id}`)
      }
    })
  })

  describe('called with remove_node', () => {
    const op: Operation = {
      type: 'insert_node',
      path: operandPath,
      node: { id: 'inserted', children: [] },
    }

    testItNeverMutatesInputs(op)
    testItIsNotAffectedByAffinity(op)
    testItIsReversibleWhenNotNull(op)

    it('matches Transforms.transform', () => {
      for (const [node, path] of Node.nodes(root)) {
        const newPath = Path.transform(path, op)

        const anotherTree = createTree()
        Transforms.transform(anotherTree, op)
        const nodeAtNewPath = Node.get(anotherTree, newPath)
        assert.equal(nodeAtNewPath.id, node.id, `does not match for ${node.id}`)
      }
    })
  })

  describe('called with merge_node', () => {
    const { children, ...properties } = operandNode
    // this means operand will be merged into earlier sibling
    const op: Operation = {
      type: 'merge_node',
      path: operandPath,
      position: 1,
      properties,
    }

    testItNeverMutatesInputs(op)
    testItNeverReturnsNull(op)
    testItIsNotAffectedByAffinity(op)
    testItReturnsTheInputIfUnchanged(op)

    it('is reversible', () => {
      const invserseOp = Operation.inverse(op) as PathTransformingOperation
      for (const [node, path] of Node.nodes(root)) {
        const transformedPath = Path.transform(path, op)
        if (node.id === 'earlier sibling') {
          const untransformedPath = Path.transform(
            transformedPath,
            invserseOp,
            { affinity: 'backward' }
          )
          assert.deepEqual(
            untransformedPath,
            path,
            `isn't for ${node.id} (with backward affinity for inverse operation)`
          )
        } else {
          const untransformedPath = Path.transform(transformedPath, invserseOp)
          assert.deepEqual(untransformedPath, path, `isn't for ${node.id}`)
        }
      }
    })

    it('matches Transforms.transform', () => {
      for (const [node, path] of Node.nodes(root)) {
        const newPath = Path.transform(path, op)

        const anotherTree = createTree()
        Transforms.transform(anotherTree, op)
        const nodeAtNewPath = Node.get(anotherTree, newPath)
        if (node.id === 'operand') {
          assert.equal(
            nodeAtNewPath.id,
            'earlier sibling',
            `does not match for operand merging into earlier sibling`
          )
        } else {
          assert.equal(
            nodeAtNewPath.id,
            node.id,
            `does not match for ${node.id}`
          )
        }
      }
    })
  })

  describe('called with split_node', () => {
    // this means operand will be split into nodes containing its first child and its second and third children
    const op: Operation = {
      type: 'split_node',
      path: operandPath,
      position: 1,
      properties: { id: 'split sibling' },
    }

    testItNeverMutatesInputs(op)
    testItIsReversibleWhenNotNull(op)
    testItReturnsTheInputIfUnchanged(op)

    it('returns null for operand node with null affinity', () => {
      assert.equal(
        Path.transform(operandPath, op, { affinity: null }),
        null,
        `does not return null for operand with null affinity`
      )
    })

    it('does not return null for any other node or affinity', () => {
      for (const [node, path] of Node.nodes(root)) {
        for (const affinity of affinities) {
          if (node.id === 'operand' && affinity === null) continue
          assert.notEqual(
            Path.transform(path, op),
            null,
            `returns null for ${node.id} with ${affinity} affinity`
          )
        }
      }
    })

    it('is affected by affinity for operand node', () => {
      const backwardAffinity = Path.transform(operandPath, op, {
        affinity: 'backward',
      })
      const forwardAffinity = Path.transform(operandPath, op, {
        affinity: 'forward',
      })
      assert.notDeepEqual(backwardAffinity, forwardAffinity)
    })

    it('is not affected by affinity for any other node', () => {
      for (const [node, path] of Node.nodes(root)) {
        const baseline = Path.transform(path, op)

        for (const affinity of affinities) {
          if (node.id === 'operand') continue
          assert.deepEqual(
            Path.transform(path, op, { affinity }),
            baseline,
            `is for ${node.id} called with affinity ${affinity}`
          )
        }
      }
    })

    it('defaults to forward affinity', () => {
      const noOptions = Path.transform(operandPath, op)
      const undefinedAffinity = Path.transform(operandPath, op, {
        affinity: undefined,
      })
      const forwardAffinity = Path.transform(operandPath, op, {
        affinity: 'forward',
      })
      assert.deepEqual(
        noOptions,
        forwardAffinity,
        `with no options has different result`
      )
      assert.deepEqual(
        undefinedAffinity,
        forwardAffinity,
        `with undefined affinity has different result`
      )
    })

    it('matches Transforms.transform', () => {
      for (const [node, path] of Node.nodes(root)) {
        const newPath = Path.transform(path, op, { affinity: 'backward' })

        const anotherTree = createTree()
        Transforms.transform(anotherTree, op)
        const nodeAtNewPath = Node.get(anotherTree, newPath)
        assert.equal(nodeAtNewPath.id, node.id, `does not match for ${node.id}`)
      }

      // now for split sibling
      const newPath = Path.transform(operandPath, op, { affinity: 'forward' })

      const anotherTree = createTree()
      Transforms.transform(anotherTree, op)
      const nodeAtNewPath = Node.get(anotherTree, newPath)
      assert.equal(
        nodeAtNewPath.id,
        op.properties.id,
        `does not match for ${op.properties.id}`
      )
    })
  })

  describe('called with move_node', () => {
    const ops = Array.from(Node.nodes(root))
      .map(
        ([node, newPath]) =>
          [
            node,
            {
              type: 'move_node',
              path: operandPath,
              newPath,
            },
          ] as [Node, MoveNodeOperation]
      )
      // filter out illegal moves:
      .filter(([node]) => node.id !== 'root') // can't move the root
      .filter(([, op]) => !Path.isDescendant(op.newPath, op.path)) // can't become a descendant of yourself

    it('never mutates inputs', () => {
      for (const [opNode, op] of ops) {
        const opCopy = structuredClone(op)
        for (const [node, path] of Node.nodes(root)) {
          const pathCopy = path.slice()
          Path.transform(path, op)
          assert.deepEqual(
            path,
            pathCopy,
            `mutates path for ${node.id} when moving from ${opNode.id}`
          )
          assert.deepEqual(
            op,
            opCopy,
            `mutates op for ${node.id} when moving from ${opNode.id}`
          )
        }
      }
    })

    it('is reversible and never returns null', () => {
      for (const [opNode, op] of ops) {
        const invserseOp = Operation.inverse(op) as PathTransformingOperation
        for (const [node, path] of Node.nodes(root)) {
          const transformedPath = Path.transform(path, op)
          assert.ok(
            transformedPath,
            `returns null for ${node.id} when moving from ${opNode.id}`
          )
          const untransformedPath = Path.transform(transformedPath, invserseOp)
          assert.deepEqual(
            untransformedPath,
            path,
            `isn't for ${node.id} when moving from ${opNode.id}`
          )
        }
      }
    })

    it('is not affected by affinity', () => {
      for (const [opNode, op] of ops) {
        for (const [node, path] of Node.nodes(root)) {
          const baseline = Path.transform(path, op)

          for (const affinity of affinities) {
            assert.deepEqual(
              Path.transform(path, op, { affinity }),
              baseline,
              `is for ${node.id} called with affinity ${affinity} when moving from ${opNode.id}`
            )
          }
        }
      }
    })

    it('is reversible', () => {
      for (const [opNode, op] of ops) {
        const invserseOp = Operation.inverse(op) as PathTransformingOperation
        for (const [node, path] of Node.nodes(root)) {
          const transformedPath = Path.transform(path, op)
          if (!transformedPath) continue
          const untransformedPath = Path.transform(transformedPath, invserseOp)

          assert.deepEqual(
            untransformedPath,
            path,
            `isn't for ${node.id} when moving from ${opNode.id}`
          )
        }
      }
    })

    it('returns the input if unchanged', () => {
      for (const [opNode, op] of ops) {
        for (const [node, path] of Node.nodes(root)) {
          const result = Path.transform(path, op)
          if (result !== path) {
            assert.notDeepEqual(
              result,
              path,
              `returned different ref with same value for ${node.id} when moving from ${opNode.id}`
            )
          }
        }
      }
    })

    it('matches Transforms.transform', () => {
      for (const [opNode, op] of ops) {
        for (const [node, path] of Node.nodes(root)) {
          const newPath = Path.transform(path, op)

          const anotherTree = createTree()
          Transforms.transform(anotherTree, op)
          const nodeAtNewPath = Node.get(anotherTree, newPath)
          assert.equal(
            nodeAtNewPath.id,
            node.id,
            `does not match for ${node.id} when moving from ${opNode.id}`
          )
        }
      }
    })
  })
})
