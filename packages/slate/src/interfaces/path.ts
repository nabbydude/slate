import {
  InsertNodeOperation,
  MergeNodeOperation,
  MoveNodeOperation,
  Operation,
  PathTransformingOperation,
  RemoveNodeOperation,
  SplitNodeOperation,
} from '..'
import { TextDirection } from '../types/types'

/**
 * `Path` arrays are a list of indexes that describe a node's exact position in
 * a Slate node tree. Although they are usually relative to the root `Editor`
 * object, they can be relative to any `Node` object.
 */

export type Path = number[]

export interface PathAncestorsOptions {
  reverse?: boolean
}

export interface PathLevelsOptions {
  reverse?: boolean
}

export interface PathTransformOptions {
  affinity?: TextDirection | null
}

export interface PathInterface {
  /**
   * Get a list of ancestor paths for a given path.
   *
   * The paths are sorted from shallowest to deepest ancestor. However, if the
   * `reverse: true` option is passed, they are reversed.
   */
  ancestors: (path: Path, options?: PathAncestorsOptions) => Path[]

  /**
   * Get the common ancestor path of two paths.
   */
  common: (path: Path, another: Path) => Path

  /**
   * Get the number of ancestors two paths share.
   */
  commonDepth: (path: Path, another: Path) => number

  /**
   * Compare a path to another, returning an integer indicating whether the path
   * was before, at, or after the other.
   *
   * Note: Two paths of unequal length can still receive a `0` result if one is
   * directly above or below the other. If you want exact matching, use
   * [[Path.equals]] instead.
   */
  compare: (path: Path, another: Path) => -1 | 0 | 1

  /**
   * Check if a path ends after one of the indexes in another.
   */
  endsAfter: (path: Path, another: Path) => boolean

  /**
   * Check if a path ends at one of the indexes in another.
   */
  endsAt: (path: Path, another: Path) => boolean

  /**
   * Check if a path ends before one of the indexes in another.
   */
  endsBefore: (path: Path, another: Path) => boolean

  /**
   * Check if a path is exactly equal to another.
   */
  equals: (path: Path, another: Path) => boolean

  /**
   * Check if the path of previous sibling node exists
   */
  hasPrevious: (path: Path) => boolean

  /**
   * Check if a path is after another.
   */
  isAfter: (path: Path, another: Path) => boolean

  /**
   * Check if a path is an ancestor of another.
   */
  isAncestor: (path: Path, another: Path) => boolean

  /**
   * Check if a path is before another.
   */
  isBefore: (path: Path, another: Path) => boolean

  /**
   * Check if a path is a child of another.
   */
  isChild: (path: Path, another: Path) => boolean

  /**
   * Check if a path is equal to or an ancestor of another.
   */
  isCommon: (path: Path, another: Path) => boolean

  /**
   * Check if a path is a descendant of another.
   */
  isDescendant: (path: Path, another: Path) => boolean

  /**
   * Check if a path is the parent of another.
   */
  isParent: (path: Path, another: Path) => boolean

  /**
   * Check is a value implements the `Path` interface.
   */
  isPath: (value: any) => value is Path

  /**
   * Check if a path is a sibling of another.
   */
  isSibling: (path: Path, another: Path) => boolean

  /**
   * Get a list of paths at every level down to a path. Note: this is the same
   * as `Path.ancestors`, but including the path itself.
   *
   * The paths are sorted from shallowest to deepest. However, if the `reverse:
   * true` option is passed, they are reversed.
   */
  levels: (path: Path, options?: PathLevelsOptions) => Path[]

  /**
   * Given a path, get the path to the next sibling node.
   */
  next: (path: Path) => Path

  /**
   * Returns whether this operation can affect paths or not. Used as an
   * optimization when updating dirty paths during normalization
   *
   * NOTE: This *must* be kept in sync with the implementation of 'transform'
   * below
   */
  operationCanTransformPath: (
    operation: Operation
  ) => operation is PathTransformingOperation

  /**
   * Given a path, return a new path referring to the parent node above it.
   */
  parent: (path: Path) => Path

  /**
   * Given a path, get the path to the previous sibling node.
   */
  previous: (path: Path) => Path

  /**
   * Get a path relative to an ancestor.
   */
  relative: (path: Path, ancestor: Path) => Path

  /**
   * Transform a path by an operation.
   */
  transform: (
    path: Path,
    operation: PathTransformingOperation,
    options?: PathTransformOptions
  ) => Path | null
}

// eslint-disable-next-line no-redeclare
export const Path: PathInterface = {
  ancestors(path: Path, options: PathAncestorsOptions = {}): Path[] {
    if (path.length === 0) return [] // root has no ancestors, empty array
    return Path.levels(Path.parent(path), options)
  },

  common(path: Path, another: Path): Path {
    const common: Path = []

    for (let i = 0; i < path.length && i < another.length; i++) {
      const av = path[i]
      const bv = another[i]

      if (av !== bv) {
        break
      }

      common.push(av)
    }

    return common
  },

  commonDepth(path: Path, another: Path): number {
    const min = Math.min(path.length, another.length)
    let i = 0
    while (i < min && path[i] === another[i]) i++

    return i
  },

  compare(path: Path, another: Path): -1 | 0 | 1 {
    const min = Math.min(path.length, another.length)

    for (let i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1
      if (path[i] > another[i]) return 1
    }

    return 0
  },

  endsAfter(path: Path, another: Path): boolean {
    const i = path.length - 1
    return Path.commonDepth(path, another) === i && path[i] > another[i]
  },

  endsAt(path: Path, another: Path): boolean {
    return Path.commonDepth(path, another) === path.length
  },

  endsBefore(path: Path, another: Path): boolean {
    const i = path.length - 1
    return Path.commonDepth(path, another) === i && path[i] < another[i]
  },

  equals(path: Path, another: Path): boolean {
    return (
      path.length === another.length && path.every((n, i) => n === another[i])
    )
  },

  hasPrevious(path: Path): boolean {
    return path[path.length - 1] > 0
  },

  isAfter(path: Path, another: Path): boolean {
    return Path.compare(path, another) === 1
  },

  isAncestor(path: Path, another: Path): boolean {
    return path.length < another.length && Path.compare(path, another) === 0
  },

  isBefore(path: Path, another: Path): boolean {
    return Path.compare(path, another) === -1
  },

  isChild(path: Path, another: Path): boolean {
    return (
      path.length === another.length + 1 && Path.compare(path, another) === 0
    )
  },

  isCommon(path: Path, another: Path): boolean {
    return path.length <= another.length && Path.compare(path, another) === 0
  },

  isDescendant(path: Path, another: Path): boolean {
    return path.length > another.length && Path.compare(path, another) === 0
  },

  isParent(path: Path, another: Path): boolean {
    return (
      path.length + 1 === another.length && Path.compare(path, another) === 0
    )
  },

  isPath(value: any): value is Path {
    return (
      Array.isArray(value) &&
      (value.length === 0 || typeof value[0] === 'number')
    )
  },

  isSibling(path: Path, another: Path): boolean {
    return (
      path.length === another.length &&
      Path.commonDepth(path, another) === path.length - 1
    )
  },

  levels(path: Path, options: PathLevelsOptions = {}): Path[] {
    const { reverse = false } = options
    const list: Path[] = []

    for (let i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i))
    }

    if (reverse) {
      list.reverse()
    }

    return list
  },

  next(path: Path): Path {
    if (path.length === 0) {
      throw new Error(
        `Cannot get the next path of a root path [${path}], because it has no next index.`
      )
    }

    const out = path.slice()
    out[path.length - 1] += 1
    return out
  },

  operationCanTransformPath(
    operation: Operation
  ): operation is PathTransformingOperation {
    switch (operation.type) {
      case 'insert_node':
      case 'remove_node':
      case 'merge_node':
      case 'split_node':
      case 'move_node':
        return true
      default:
        return false
    }
  },

  parent(path: Path): Path {
    if (path.length === 0) {
      throw new Error(`Cannot get the parent path of the root path [${path}].`)
    }

    return path.slice(0, -1)
  },

  previous(path: Path): Path {
    if (path.length === 0) {
      throw new Error(
        `Cannot get the previous path of a root path [${path}], because it has no previous index.`
      )
    }

    const last = path[path.length - 1]

    if (last <= 0) {
      throw new Error(
        `Cannot get the previous path of a first child path [${path}] because it would result in a negative index.`
      )
    }

    const out = path.slice()
    out[path.length - 1] = last
    return out
  },

  relative(path: Path, ancestor: Path): Path {
    if (!Path.isCommon(ancestor, path)) {
      throw new Error(
        `Cannot get the relative path of [${path}] inside ancestor [${ancestor}], because it is not above or equal to the path.`
      )
    }

    return path.slice(ancestor.length)
  },

  transform(
    path: Path | null,
    operation: PathTransformingOperation,
    options: PathTransformOptions = {}
  ): Path | null {
    const { type, path: op } = operation
    const { affinity = 'forward' } = options
    if (
      !path ||
      (op.length > path.length &&
        (type !== 'move_node' || operation.newPath.length > path.length))
    ) {
      return path // PERF: Exit early if unchangeable or change is only deeper in the tree
    }

    // basically if an operation causes a change earlier in the children array of an ancestor to our path it will change the index where the next deepest ancestor is found
    // in that case then we need to shift the index at part of the path approprately.

    // PERF: we calculate commonDepth once instead of each function calling it seperately.
    const cd = Path.commonDepth(path, op)

    const opDepth = op.length - 1 // depth of the children array where the operation is performed
    const opEqOrAbovePath = cd === op.length
    const opEqualPath = cd === path.length // only accurate because we can guarantee cd <= op.length <= p.length (except during move_node, but that doesnt use this value)

    // any earlier sibling of an ancestor. could be thought of as "is-uncle/great-uncle/etc"
    const opEndsBeforePath = cd === opDepth && op[cd] < path[cd]

    const outPath = path.slice()
    switch (type) {
      case 'insert_node': {
        if (opEqOrAbovePath || opEndsBeforePath) {
          outPath[opDepth] += 1
        }

        break
      }

      case 'remove_node': {
        if (opEqOrAbovePath) {
          return null
        } else if (opEndsBeforePath) {
          outPath[opDepth] -= 1
        }

        break
      }

      case 'merge_node': {
        const { position } = operation

        if (opEqOrAbovePath || opEndsBeforePath) {
          outPath[opDepth] -= 1
          outPath[op.length] += position
        } else if (opEqOrAbovePath) {
          outPath[opDepth] -= 1
        } else {
          return path
        }

        break
      }

      case 'split_node': {
        const { position } = operation

        if (opEqualPath) {
          if (affinity === 'forward') {
            outPath[opDepth] += 1
          } else if (affinity === 'backward') {
            return path
          } else {
            return null
          }
        } else if (opEqOrAbovePath) {
          if (path[cd] >= position) {
            outPath[opDepth] += 1
            outPath[op.length] -= position
          } else {
            return path
          }
        } else if (opEndsBeforePath) {
          outPath[opDepth] += 1
        } else {
          return path
        }

        break
      }

      case 'move_node': {
        const { newPath: newOp } = operation

        if (opEqOrAbovePath) {
          const cdBetween = Path.commonDepth(op, newOp)

          // If the old and new path are the same, it's a no-op.
          // (this is also the path if new is a descendant of old, which is an invalid operation.)
          if (cdBetween === newOp.length) {
            return path
          }

          // we are moving this node or an ancestor, so we transplant that part of the path for the new path
          outPath.splice(0, cd, ...newOp)

          const opEndsBeforeNewOp =
            cdBetween === opDepth && op[cdBetween] < newOp[cdBetween]
          if (opEndsBeforeNewOp && op.length < newOp.length) {
            // the new path is inside a later sibling of the node that will be removed and where newPath points to will change, adjust to compensate.
            outPath[opDepth] -= 1
          }
          return outPath
        }

        const newCd = Path.commonDepth(path, newOp)
        const newOpDepth = newOp.length - 1 // depth of the children array where the new node is inserted
        const newOpEqOrAbovePath = newCd === newOp.length

        // if destination path is any earlier sibling of an ancestor. could be thought of as "is-uncle/great-uncle/etc"
        const newOpEndsBeforePath =
          newCd === newOpDepth && newOp[newCd] < path[newCd]

        if (newOpEqOrAbovePath || newOpEndsBeforePath) {
          if (opEndsBeforePath) {
            if (opDepth === newOpDepth) return path // both ops affect path on the same depth and cancel each other out, path is unchanged
            outPath[opDepth] -= 1
          }
          outPath[newOpDepth] += 1
        } else if (opEndsBeforePath) {
          outPath[opDepth] -= 1
        } else {
          return path
        }

        break
      }
    }

    return outPath
  },
}
