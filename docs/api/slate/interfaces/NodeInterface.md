# Interface: NodeInterface

Defined in: [interfaces/node.ts:65](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L65)

## Methods

### Other

#### findPath()

> **findPath**(`root`: [`Node`](../type-aliases/Node.md), `node`: [`Node`](../type-aliases/Node.md)): [`Path`](../type-aliases/Path.md) \| `undefined`

Defined in: [interfaces/node.ts:179](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L179)

Find the path of `node` inside `root` by walking the tree, comparing nodes by identity. Returns `[]` for the root itself and `undefined` if `node` isn't in the tree. It doesn't need a rendered editor, so it works on the server too; `ReactEditor.findPath` is faster for rendered nodes and falls back to this.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Path`](../type-aliases/Path.md) \| `undefined`

### Queries

#### ancestor()

> **ancestor**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`Ancestor`](../type-aliases/Ancestor.md)

Defined in: [interfaces/node.ts:70](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L70)

Get the node at a specific path, asserting that it's an ancestor node. If the specified node is not an ancestor node, throw an error.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Ancestor`](../type-aliases/Ancestor.md)

***

#### extractProps()

> **extractProps**(`node`: [`Node`](../type-aliases/Node.md)): [`NodeProps`](../type-aliases/NodeProps.md)

Defined in: [interfaces/node.ts:162](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L162)

Extract all properties from a Node except for its content-related fields (`children` for Element nodes and `text` for Text nodes).

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeProps`](../type-aliases/NodeProps.md)

An object containing the extracted properties of the node.

##### Example

```typescript
// For an Element node
const element = {
  type: 'paragraph',
  align: 'center',
  children: [{ text: 'Try it out for yourself!' }],
}
const props = Node.extractProps(element)
// Returns: { type: 'paragraph', align: "center" }

// For a Text node
const text = { text: 'Hello', bold: true }
const props = Node.extractProps(text)
// Returns: { bold: true }
```

***

#### fragment()

> **fragment**\<`T` *extends* [`Ancestor`](../type-aliases/Ancestor.md) = [`BaseEditor`](BaseEditor.md)\>(`root`: `T`, `range`: [`BaseRange`](BaseRange.md)): `T`\[`"children"`\]

Defined in: [interfaces/node.ts:174](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L174)

Get the sliced fragment represented by a range inside a root node.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t"></a> `T` *extends* [`Ancestor`](../type-aliases/Ancestor.md)

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`T`\[`"children"`\]

***

#### has()

> **has**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/node.ts:208](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L208)

Check if a descendant node exists at a specific path.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### matches()

> **matches**(`node`: [`Node`](../type-aliases/Node.md), `props`: `Partial`\<[`Node`](../type-aliases/Node.md)\>): `boolean`

Defined in: [interfaces/node.ts:278](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L278)

Check if a node matches a set of props.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`props`

</td>
<td>

`Partial`\<[`Node`](../type-aliases/Node.md)\>

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### string()

> **string**(`node`: [`Node`](../type-aliases/Node.md)): `string`

Defined in: [interfaces/node.ts:306](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L306)

Get the concatenated text string of a node's content.

Note that this will not include spaces or line breaks between block nodes.
It is not a user-facing string, but a string for performing offset-related
computations for a node.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`string`

### Relational

#### ancestors()

> **ancestors**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md), `options?`: \{ `reverse?`: `boolean`; \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Ancestor`](../type-aliases/Ancestor.md)\>, `void`, `undefined`\>

Defined in: [interfaces/node.ts:80](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L80)

Return a generator of all the ancestor nodes above a specific path.

By default the order is top-down, from highest to lowest ancestor in
the tree, but you can pass the `reverse: true` option to go bottom-up.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `reverse?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeAncestorsOptions`

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Ancestor`](../type-aliases/Ancestor.md)\>, `void`, `undefined`\>

***

#### child()

> **child**(`root`: [`Node`](../type-aliases/Node.md), `index`: `number`): [`Descendant`](../type-aliases/Descendant.md)

Defined in: [interfaces/node.ts:90](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L90)

Get the child of a node at a specific index.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`index`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

[`Descendant`](../type-aliases/Descendant.md)

***

#### children()

> **children**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md), `options?`: \{ `reverse?`: `boolean`; \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Descendant`](../type-aliases/Descendant.md)\>, `void`, `undefined`\>

Defined in: [interfaces/node.ts:97](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L97)

Iterate over the children of a node at a specific path.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `reverse?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeChildrenOptions`

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Descendant`](../type-aliases/Descendant.md)\>, `void`, `undefined`\>

### Retrieval

#### common()

> **common**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/node.ts:110](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L110)

Get an entry for the common ancesetor of two paths.
In most cases this will be an Element node, but could the root Editor node if the paths have no other common ancestors, or a Text node if the paths are the same (or if they point to nodes that don't exist).

If the paths are equal, or one is an ancestor of the other, the entry is for the node at the shorter path. For example, `Node.common(editor, [0, 0], [0, 0])` returns the text node at `[0, 0]`, and `Node.common(editor, [0], [0, 0])` returns the element at `[0]`.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

***

#### descendant()

> **descendant**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`Descendant`](../type-aliases/Descendant.md)

Defined in: [interfaces/node.ts:116](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L116)

Get the node at a specific path, asserting that it's a descendant node.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Descendant`](../type-aliases/Descendant.md)

***

#### descendants()

> **descendants**(`root`: [`Node`](../type-aliases/Node.md), `options?`: \{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Descendant`](../type-aliases/Descendant.md)\>, `void`, `undefined`\>

Defined in: [interfaces/node.ts:123](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L123)

Return a generator of all the descendant node entries inside a root node.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}

</td>
<td>

Type also exported as `NodeDescendantsOptions`

</td>
</tr>
<tr>
<td>

`options.from?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.pass?`

</td>
<td>

(`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.to?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Descendant`](../type-aliases/Descendant.md)\>, `void`, `undefined`\>

***

#### elements()

> **elements**(`root`: [`Node`](../type-aliases/Node.md), `options?`: \{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}): `Generator`\<[`ElementEntry`](../type-aliases/ElementEntry.md), `void`, `undefined`\>

Defined in: [interfaces/node.ts:135](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L135)

Return a generator of all the element nodes inside a root node. Each iteration
will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
root node is an element it will be included in the iteration as well.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}

</td>
<td>

Type also exported as `NodeElementsOptions`

</td>
</tr>
<tr>
<td>

`options.from?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.pass?`

</td>
<td>

(`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.to?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`ElementEntry`](../type-aliases/ElementEntry.md), `void`, `undefined`\>

***

#### first()

> **first**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/node.ts:168](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L168)

Get the first leaf node entry in a root node from a path.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

***

#### get()

> **get**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`Node`](../type-aliases/Node.md)

Defined in: [interfaces/node.ts:186](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L186)

Get the descendant node referred to by a specific path. If the path is an
empty array, it refers to the root node itself.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Node`](../type-aliases/Node.md)

***

#### getIf()

> **getIf**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`Node`](../type-aliases/Node.md) \| `undefined`

Defined in: [interfaces/node.ts:202](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L202)

Get a descendant node at a specific path, returning `undefined` if the node does not exist. This is a safer alternative to `Node.get()` as it won't throw an error if the path is invalid.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Node`](../type-aliases/Node.md) \| `undefined`

##### Example

```typescript
const node = Node.getIf(root, [0, 1])
if (node) {
  // node exists at path [0, 1]
} else {
  // no node exists at path [0, 1]
}
```

***

#### last()

> **last**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/node.ts:252](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L252)

Get the last leaf node entry in a root node from a path.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

***

#### leaf()

> **leaf**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`BaseText`](BaseText.md)

Defined in: [interfaces/node.ts:258](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L258)

Get the node at a specific path, ensuring it's a leaf text node. If the node is not a leaf text node, throw an error.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BaseText`](BaseText.md)

***

#### levels()

> **levels**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md), `options?`: \{ `reverse?`: `boolean`; \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Node`](../type-aliases/Node.md)\>, `void`, `undefined`\>

Defined in: [interfaces/node.ts:268](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L268)

Return a generator of the in a branch of the tree, from a specific path.

By default the order is top-down, from highest to lowest node in the tree,
but you can pass the `reverse: true` option to go bottom-up.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `reverse?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeLevelsOptions`

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Node`](../type-aliases/Node.md)\>, `void`, `undefined`\>

***

#### nodes()

> **nodes**(`root`: [`Node`](../type-aliases/Node.md), `options?`: \{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Node`](../type-aliases/Node.md)\>, `void`, `undefined`\>

Defined in: [interfaces/node.ts:287](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L287)

Return a generator of all the node entries of a root node. Each entry is
returned as a `[Node, Path]` tuple, with the path referring to the node's
position inside the root node.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}

</td>
<td>

Type also exported as `NodeNodesOptions`

</td>
</tr>
<tr>
<td>

`options.from?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.pass?`

</td>
<td>

(`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.to?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Node`](../type-aliases/Node.md)\>, `void`, `undefined`\>

***

#### parent()

> **parent**(`root`: [`Node`](../type-aliases/Node.md), `path`: [`Path`](../type-aliases/Path.md)): [`Ancestor`](../type-aliases/Ancestor.md)

Defined in: [interfaces/node.ts:296](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L296)

Get the parent of a node at a specific path.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Ancestor`](../type-aliases/Ancestor.md)

***

#### texts()

> **texts**(`root`: [`Node`](../type-aliases/Node.md), `options?`: \{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseText`](BaseText.md)\>, `void`, `undefined`\>

Defined in: [interfaces/node.ts:313](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L313)

Return a generator of all leaf text nodes in a root node.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`root`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `from?`: [`Path`](../type-aliases/Path.md); `pass?`: (`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `to?`: [`Path`](../type-aliases/Path.md); \}

</td>
<td>

Type also exported as `NodeTextsOptions`

</td>
</tr>
<tr>
<td>

`options.from?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.pass?`

</td>
<td>

(`node`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.to?`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseText`](BaseText.md)\>, `void`, `undefined`\>

### Type Guards

#### isAncestor()

> **isAncestor**(`node`: [`Node`](../type-aliases/Node.md)): `node is Ancestor`

Defined in: [interfaces/node.ts:214](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L214)

Check if a node is an `Editor` or `Element` object.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`node is Ancestor`

***

#### isEditor()

> **isEditor**(`node`: [`Node`](../type-aliases/Node.md)): `node is BaseEditor`

Defined in: [interfaces/node.ts:220](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L220)

Check if a node is an `Editor` object.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`node is BaseEditor`

***

#### isElement()

> **isElement**(`node`: [`Node`](../type-aliases/Node.md)): `node is BaseElement`

Defined in: [interfaces/node.ts:226](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L226)

Check if a node is an `Element` object.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`node is BaseElement`

***

#### isNode()

> **isNode**(`value`: `any`, `options?`: \{ `deep?`: `boolean`; \}): `value is Node`

Defined in: [interfaces/node.ts:233](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L233)

Check if a value implements the `Node` interface.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`any`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `deep?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeIsNodeOptions`

</td>
</tr>
<tr>
<td>

`options.deep?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`value is Node`

***

#### isNodeList()

> **isNodeList**(`value`: `any`, `options?`: \{ `deep?`: `boolean`; \}): `value is Node[]`

Defined in: [interfaces/node.ts:240](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L240)

Check if a value is a list of `Node` objects.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`any`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `deep?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeIsNodeOptions`

</td>
</tr>
<tr>
<td>

`options.deep?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`value is Node[]`

***

#### isText()

> **isText**(`node`: [`Node`](../type-aliases/Node.md)): `node is BaseText`

Defined in: [interfaces/node.ts:246](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L246)

Check if a node is an `Text` object.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`node is BaseText`
