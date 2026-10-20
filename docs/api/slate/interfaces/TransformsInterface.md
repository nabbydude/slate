# Interface: TransformsInterface

Defined in: [interfaces/transforms/index.ts:40](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/index.ts#L40)

## Selecting transform results

`insertNodes`, `insertFragment`, `insertText`, `splitNodes`, `moveNodes` and `liftNodes` accept `select?: boolean`. Use `select: true` to move the caret to the result even when supplying an explicit `at`:

```js
Transforms.insertText(editor, 'hello', {
  at: { path: [1, 0], offset: 0 },
  select: true,
})
```

Insertions select the end of the inserted content. Splitting selects the start of the new content after the split. Moving or lifting selects the end of the last moved node. Insertion and splitting select by default only when `at` is omitted. `moveNodes` and `liftNodes` preserve their existing default: the selection follows moved content, keeping its offsets and direction, without explicitly selecting the end.

With `select: false`, these transforms do not explicitly select their result. The existing selection is still transformed by operations, so its paths and offsets can change when content moves or text is inserted. An explicit `at` without `select: true` leaves an unrelated selection in place.

Other transforms retain their existing selection behavior; property changes and wrapping, unwrapping, merging or removing nodes do not gain a new result-selection option.

`insertText` preserves a null selection by default; use `select: true` to create a caret after inserting into an unfocused document.

## Extends

- `GeneralTransforms`
- `NodeTransforms`
- `SelectionTransforms`
- `TextTransforms`

## Methods

### collapse()

> **collapse**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}): `void`

Defined in: [interfaces/transforms/selection.ts:26](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/selection.ts#L26)

Collapse the selection.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`SelectionEdge`](../type-aliases/SelectionEdge.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`SelectionTransforms.collapse`

***

### delete()

> **delete**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `distance?`: `number`; `hanging?`: `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/text.ts:66](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/text.ts#L66)

Delete content in the editor.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `distance?`: `number`; `hanging?`: `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); `voids?`: `boolean`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

The location to delete content from. Defaults to the current selection. If there is no selection, nothing is deleted.

</td>
</tr>
<tr>
<td>

`options.distance?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.hanging?`

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

`options.unit?`

</td>
<td>

[`TextUnit`](../type-aliases/TextUnit.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

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

#### Returns

`void`

#### Inherited from

`TextTransforms.delete`

***

### deselect()

> **deselect**(`editor`: [`BaseEditor`](BaseEditor.md)): `void`

Defined in: [interfaces/transforms/selection.ts:31](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/selection.ts#L31)

Unset the selection.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`SelectionTransforms.deselect`

***

### insertFragment()

> **insertFragment**(`editor`: [`BaseEditor`](BaseEditor.md), `fragment`: [`Node`](../type-aliases/Node.md)[], `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `filter?`: (`node`: [`Node`](../type-aliases/Node.md), `options`: \{ `blockEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\>; \}) => `boolean`; `hanging?`: `boolean`; `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/text.ts:72](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/text.ts#L72)

Insert a fragment in the editor
at the specified location or (if not defined) the current selection or (if not defined) the end of the document.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`fragment`

</td>
<td>

[`Node`](../type-aliases/Node.md)[]

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `filter?`: (`node`: [`Node`](../type-aliases/Node.md), `options`: \{ `blockEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\>; \}) => `boolean`; `hanging?`: `boolean`; `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

The location to insert the fragment.

**Default**

```ts
The current selection. If there is no selection, nothing is deleted.
```

</td>
</tr>
<tr>
<td>

`options.batchDirty?`

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

`options.filter?`

</td>
<td>

(`node`: [`Node`](../type-aliases/Node.md), `options`: \{ `blockEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\>; \}) => `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.hanging?`

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

`options.select?`

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

`options.voids?`

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

#### Returns

`void`

#### Inherited from

`TextTransforms.insertFragment`

***

### insertNodes()

> **insertNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `nodes`: [`Node`](../type-aliases/Node.md) \| [`Node`](../type-aliases/Node.md)[], `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:41](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L41)

Insert nodes in the editor at the specified location or (if not defined) the current selection or (if not defined) the end of the document.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`nodes`

</td>
<td>

[`Node`](../type-aliases/Node.md) \| [`Node`](../type-aliases/Node.md)[]

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.batchDirty?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
</tr>
<tr>
<td>

`options.select?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Example

For example, to insert at the very end, without replacing the current selection and regardless of block nesting, use
```javascript
Transforms.insertNodes(
  editor,
  { type: targetType, children: [{ text: '' }] },
  { at: [editor.children.length] }
)
```

#### Inherited from

`NodeTransforms.insertNodes`

***

### insertText()

> **insertText**(`editor`: [`BaseEditor`](BaseEditor.md), `text`: `string`, `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/text.ts:82](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/text.ts#L82)

Insert a string of text in the editor
at the specified location or (if not defined) the current selection or (if not defined) the end of the document.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`text`

</td>
<td>

`string`

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.select?`

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

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

With `voids: true`, replacing an expanded range also deletes within void content instead of removing the void nodes as atomic units. At an inline boundary, insertion uses the surrounding text in that block, adding the empty text required by normalization if replacement temporarily removes it.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`TextTransforms.insertText`

***

### liftNodes()

> **liftNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `height?`: `number`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:51](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L51)

Lift nodes at a specific location upwards in the document tree, splitting
their parent in two if necessary.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-1"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `height?`: `number`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.height?`

</td>
<td>

`number`

</td>
<td>

Defaults to `1` and must be a non-negative integer. A height of `0` does nothing; larger heights lift each matched node through that many ancestors, stopping at the top level. A node that is already at the top level cannot be lifted. For `options.mode`, `'all'` is also supported.

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.select?`

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

`options.voids?`

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

#### Returns

`void`

#### Inherited from

`NodeTransforms.liftNodes`

***

### mergeNodes()

> **mergeNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:72](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L72)

Merge a node at a location with the previous node of the same depth,
removing any empty containing nodes after the merge if necessary.

Merging elements throws if both have children and one contains blocks while the other contains text or inline nodes, unless `shouldMergeNodesRemovePrevNode` removes the previous node instead. The error names both paths and is raised before moving or removing the merge targets. An expanded `at` range can be deleted before this check.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-2"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.mergeNodes`

***

### move()

> **move**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `distance?`: `number`; `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); `reverse?`: `boolean`; `unit?`: [`MoveUnit`](../type-aliases/MoveUnit.md); \}): `void`

Defined in: [interfaces/transforms/selection.ts:36](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/selection.ts#L36)

Move the selection's point forward or backward.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `distance?`: `number`; `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); `reverse?`: `boolean`; `unit?`: [`MoveUnit`](../type-aliases/MoveUnit.md); \}

</td>
</tr>
<tr>
<td>

`options.distance?`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`SelectionEdge`](../type-aliases/SelectionEdge.md)

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.unit?`

</td>
<td>

[`MoveUnit`](../type-aliases/MoveUnit.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`SelectionTransforms.move`

***

### moveNodes()

> **moveNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `select?`: `boolean`; `to`: [`Path`](../type-aliases/Path.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:88](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L88)

Move the nodes from an origin to a destination. A destination must be specified in the `options`. If no origin is specified, move the selection.

`to` is the path the node ends up at once the move is done, not the path it is inserted before. For example, with four blocks `1 2 3 4`, moving `[0]` to `[2]` gives `2 3 1 4`. When `match` selects several nodes, they are moved one at a time, each to `to`.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-3"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `select?`: `boolean`; `to`: [`Path`](../type-aliases/Path.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.select?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.to`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.moveNodes`

***

### removeNodes()

> **removeNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:103](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L103)

Remove the nodes at a specific location in the document.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-4"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.removeNodes`

***

### select()

> **select**(`editor`: [`BaseEditor`](BaseEditor.md), `target`: [`Location`](../type-aliases/Location.md)): `void`

Defined in: [interfaces/transforms/selection.ts:50](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/selection.ts#L50)

Set the selection to a new value.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Example

For example, to set the selection to the entire contents of the editor:
```javascript
Transforms.select(editor, {
  anchor: Editor.start(editor, []),
  focus: Editor.end(editor, []),
})
```

#### Inherited from

`SelectionTransforms.select`

***

### setChildren()

> **setChildren**(`editor`: [`BaseEditor`](BaseEditor.md), `children`: [`Descendant`](../type-aliases/Descendant.md)[]): `void`

Defined in: [interfaces/transforms/node.ts:26](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L26)

Apply an external document through Slate operations. Delegates to `editor.setChildren`, so plugins can override the transform. Unchanged child prefixes and suffixes are retained, matched by identity or by deep equality, so a refetched copy of the document with one new block emits a single `insert_node`. Compatible nodes are updated recursively; text edits replace only the changed string middle. Deep-equal cloned values emit no operations.

Nodes shared by object identity can move within or across parents with a `move_node`, preserving selections inside them. Cloned moves are treated as content edits or replacements. Normalization is held until the diff is complete, and selection and refs follow the emitted operations through their normal rules.

With `withHistory`, each external change forms one undo step and is separate from typing before and after it.

To clear an editable document, pass a schema-valid empty block, for example `[{ type: 'paragraph', children: [{ text: '' }] }]`. `setChildren` itself accepts an empty root; it does not invent a block or reset history.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`children`

</td>
<td>

[`Descendant`](../type-aliases/Descendant.md)[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.setChildren`

***

### setNodes()

> **setNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `props`: `Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\> \| ((`node`: `T`, `path`: [`Path`](../type-aliases/Path.md)) => `Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\>), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `compare?`: [`PropsCompare`](../type-aliases/PropsCompare.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `merge?`: [`PropsMerge`](../type-aliases/PropsMerge.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `replace?`: `boolean`; `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:121](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L121)

Set properties of nodes at the specified location. If no location is specified, use the selection. Optional node properties can be set to `null` to unset them.

If `props` contains `undefined` values, the node's corresponding property will also be set to `undefined` as opposed to ignored.

`children` and `text` in `props` are ignored, since they hold a node's content rather than its properties. To change content, use `insertNodes`, `removeNodes` or the text transforms.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-5"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`props`

</td>
<td>

`Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\> \| ((`node`: `T`, `path`: [`Path`](../type-aliases/Path.md)) => `Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\>)

</td>
<td>

`props` can also be a function that receives each matched node and its path and returns the properties for that node, so new values can depend on old ones. Each node still gets one `set_node` operation, so undo works per node:

**Example**

```javascript
Transforms.setNodes(editor, node => ({ indent: (node.indent ?? 0) + 1 }), {
  match: n => Element.isElement(n) && n.type === 'paragraph',
})
```

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `compare?`: [`PropsCompare`](../type-aliases/PropsCompare.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `merge?`: [`PropsMerge`](../type-aliases/PropsMerge.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `replace?`: `boolean`; `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.compare?`

</td>
<td>

[`PropsCompare`](../type-aliases/PropsCompare.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.hanging?`

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

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.merge?`

</td>
<td>

[`PropsMerge`](../type-aliases/PropsMerge.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.replace?`

</td>
<td>

`boolean`

</td>
<td>

With `replace: true`, every other property of each matched node is removed in the same operation, so the node ends up with exactly `props` (plus its `children` or `text`). Use it to change a node into a different type without carrying over properties that only made sense for the old type, such as turning `{ type: 'callout', color: 'blue' }` into `{ type: 'paragraph' }`. Undo restores the removed properties.

</td>
</tr>
<tr>
<td>

`options.split?`

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

`options.voids?`

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

#### Returns

`void`

#### Inherited from

`NodeTransforms.setNodes`

***

### setPoint()

> **setPoint**(`editor`: [`BaseEditor`](BaseEditor.md), `props`: `Partial`\<[`Point`](../type-aliases/Point.md)\>, `options?`: \{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}): `void`

Defined in: [interfaces/transforms/selection.ts:55](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/selection.ts#L55)

Set new properties on one of the selection's points.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`props`

</td>
<td>

`Partial`\<[`Point`](../type-aliases/Point.md)\>

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`SelectionEdge`](../type-aliases/SelectionEdge.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`SelectionTransforms.setPoint`

***

### setSelection()

> **setSelection**(`editor`: [`BaseEditor`](BaseEditor.md), `props`: `Partial`\<[`BaseSelection`](../type-aliases/BaseSelection.md)\>): `void`

Defined in: [interfaces/transforms/selection.ts:64](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/selection.ts#L64)

Set new properties on the selection.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`props`

</td>
<td>

`Partial`\<[`BaseSelection`](../type-aliases/BaseSelection.md)\>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`SelectionTransforms.setSelection`

***

### splitNodes()

> **splitNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `always?`: `boolean`; `at?`: [`Location`](../type-aliases/Location.md); `height?`: `number`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:156](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L156)

Split the nodes at a specific location.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-6"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `always?`: `boolean`; `at?`: [`Location`](../type-aliases/Location.md); `height?`: `number`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.always?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.height?`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
</tr>
<tr>
<td>

`options.select?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.splitNodes`

***

### transform()

> **transform**(`editor`: [`BaseEditor`](BaseEditor.md), `op`: [`BaseOperation`](../type-aliases/BaseOperation.md)): `void`

Defined in: [interfaces/transforms/general.ts:45](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/general.ts#L45)

Transform the editor by an operation.

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`op`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`GeneralTransforms.transform`

***

### unsetNodes()

> **unsetNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `props`: `string` \| `string`[], `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:172](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L172)

Unset properties on the nodes at a location.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-7"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`props`

</td>
<td>

`string` \| `string`[]

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.split?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.unsetNodes`

***

### unwrapNodes()

> **unwrapNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:189](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L189)

Unwrap the nodes at a location from a parent node, splitting the parent if
necessary to ensure that only the content in the range is unwrapped.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-8"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.split?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.unwrapNodes`

***

### wrapNodes()

> **wrapNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/transforms/node.ts:205](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/transforms/node.ts#L205)

Wrap the nodes at a location in a new container node, splitting the edges
of the range first to ensure that only the content in the range is wrapped.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-9"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.split?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`NodeTransforms.wrapNodes`
