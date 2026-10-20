# Interface: EditorInterface

Defined in: [interfaces/editor.ts:1006](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1006)

## Methods

### Commands

#### addMark()

> **addMark**(`editor`: [`BaseEditor`](BaseEditor.md), `key`: `string`, `value`: `any`): `void`

Defined in: [interfaces/editor.ts:1025](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1025)

Add a custom property to the leaf text nodes within non-void nodes or void
nodes that `editor.markableVoid()` allows in the current selection. If the
selection is currently collapsed, the marks will be added to the
`editor.marks` property instead, and applied when text is inserted next.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

#### deleteBackward()

> **deleteBackward**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); \}): `void`

Defined in: [interfaces/editor.ts:1054](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1054)

Delete content in the editor backward from the current selection.

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

\{ `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); \}

</td>
<td>

Type also exported as `EditorDirectedDeletionOptions`

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
</tbody>
</table>

##### Returns

`void`

***

#### deleteForward()

> **deleteForward**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); \}): `void`

Defined in: [interfaces/editor.ts:1061](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1061)

Delete content in the editor forward from the current selection.

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

\{ `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); \}

</td>
<td>

Type also exported as `EditorDirectedDeletionOptions`

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
</tbody>
</table>

##### Returns

`void`

***

#### deleteFragment()

> **deleteFragment**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `direction?`: [`TextDirection`](../type-aliases/TextDirection.md); \}): `void`

Defined in: [interfaces/editor.ts:1070](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1070)

Delete the content in the current selection.

A hanging selection from the start of a block to the start of a following sibling removes the fully selected blocks, preserving the following block. Inside an element identified by `editor.isIsolated`, deletion continues to unhang the selection and retain the block structure. Custom `deleteFragment` overrides still control deletion.

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

\{ `direction?`: [`TextDirection`](../type-aliases/TextDirection.md); \}

</td>
<td>

Type also exported as `EditorFragmentDeletionOptions`

</td>
</tr>
<tr>
<td>

`options.direction?`

</td>
<td>

[`TextDirection`](../type-aliases/TextDirection.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

#### insertBreak()

> **insertBreak**(`editor`: [`BaseEditor`](BaseEditor.md)): `void`

Defined in: [interfaces/editor.ts:1141](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1141)

Insert a block break at the current selection.

If the selection is currently expanded, it will be deleted first.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

#### insertFragment()

> **insertFragment**(`editor`: [`BaseEditor`](BaseEditor.md), `fragment`: [`Node`](../type-aliases/Node.md)[], `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `filter?`: (`node`: [`Node`](../type-aliases/Node.md), `options`: \{ `blockEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\>; \}) => `boolean`; `hanging?`: `boolean`; `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:1150](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1150)

Inserts a fragment
at the specified location or (if not defined) the current selection or (if not defined) the end of the document.

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

Type also exported as `TextInsertFragmentOptions`

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

##### Returns

`void`

***

#### insertNode()

> **insertNode**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `node`: [`Node`](../type-aliases/Node.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:1163](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1163)

Atomically inserts `nodes`
at the specified location or (if not defined) the current selection or (if not defined) the end of the document.

##### Type Parameters

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

`node`

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeInsertNodesOptions<T>`

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

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

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

##### Returns

`void`

***

#### insertSoftBreak()

> **insertSoftBreak**(`editor`: [`BaseEditor`](BaseEditor.md)): `void`

Defined in: [interfaces/editor.ts:1175](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1175)

Insert a soft break at the current selection.

If the selection is currently expanded, it will be deleted first.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

#### insertText()

> **insertText**(`editor`: [`BaseEditor`](BaseEditor.md), `text`: `string`, `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:1183](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1183)

Insert a string of text
at the specified location or (if not defined) the current selection or (if not defined) the end of the document.

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

Type also exported as `TextInsertTextOptions`

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

##### Returns

`void`

***

#### normalize()

> **normalize**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `force?`: `boolean`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}): `void`

Defined in: [interfaces/editor.ts:1338](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1338)

Normalize any dirty objects in the editor.

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

\{ `force?`: `boolean`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}

</td>
<td>

Type also exported as `EditorNormalizeOptions`

</td>
</tr>
<tr>
<td>

`options.force?`

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

`options.operation?`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

#### removeMark()

> **removeMark**(`editor`: [`BaseEditor`](BaseEditor.md), `key`: `string`): `void`

Defined in: [interfaces/editor.ts:1456](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1456)

Remove a custom property from all of the leaf text nodes in the current
selection.

If the selection is currently collapsed, the removal will be stored on
`editor.marks` and applied to the text inserted next.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

### Create Ref

#### pathRef()

> **pathRef**(`editor`: [`BaseEditor`](BaseEditor.md), `path`: [`Path`](../type-aliases/Path.md), `options?`: \{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}): [`PathRef`](PathRef.md)

Defined in: [interfaces/editor.ts:1364](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1364)

Create a mutable ref for a `Path` object, which will stay in sync as new
operations are applied to the editor.

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

\{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `EditorPathRefOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`TextDirection`](../type-aliases/TextDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`PathRef`](PathRef.md)

***

#### pointRef()

> **pointRef**(`editor`: [`BaseEditor`](BaseEditor.md), `point`: [`BasePoint`](BasePoint.md), `options?`: \{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}): [`PointRef`](PointRef.md)

Defined in: [interfaces/editor.ts:1385](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1385)

Create a mutable ref for a `Point` object, which will stay in sync as new
operations are applied to the editor.

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

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

\{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `EditorPointRefOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`TextDirection`](../type-aliases/TextDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`PointRef`](PointRef.md)

***

#### rangeRef()

> **rangeRef**(`editor`: [`BaseEditor`](BaseEditor.md), `range`: [`BaseRange`](BaseRange.md), `options?`: \{ `affinity?`: [`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`; \}): [`RangeRef`](RangeRef.md)

Defined in: [interfaces/editor.ts:1436](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1436)

Create a mutable ref for a `Range` object, which will stay in sync as new
operations are applied to the editor.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

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

\{ `affinity?`: [`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `EditorRangeRefOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`RangeRef`](RangeRef.md)

### Other

#### hasRange()

> **hasRange**(`editor`: [`BaseEditor`](BaseEditor.md), `range`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/editor.ts:1127](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1127)

Check whether both endpoint paths of a range exist in the editor. This checks paths, not whether offsets are within the text.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

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

`boolean`

***

#### isIsolated()

> **isIsolated**(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1222](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1222)

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
</tbody>
</table>

##### Returns

`boolean`

***

#### isRemoteChange()

> **isRemoteChange**(`editor`: [`BaseEditor`](BaseEditor.md)): `boolean`

Defined in: [interfaces/editor.ts:1251](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1251)

Check whether the editor is currently inside `Editor.withRemoteChanges`. It returns `false` outside that editor's scope.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### node()

> **node**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/editor.ts:1321](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1321)

Get the node at a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
</tr>
<tr>
<td>

`options.depth?`

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

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

***

#### positions()

> **positions**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}): `Generator`\<[`BasePoint`](BasePoint.md), `void`, `undefined`\>

Defined in: [interfaces/editor.ts:1409](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1409)

Return all the positions in `at` range where a `Point` can be placed.

By default, moves forward by individual offsets at a time, but
the `unit` option can be used to to move by character, word, line, or block.

The `reverse` option can be used to change iteration direction.

Note: By default void nodes are treated as a single point and iteration
will not happen inside their content unless you pass in true for the
`voids` option, then iteration will occur. Text immediately after an inline void starts a new traversal boundary, including when the surrounding text is empty. Word traversal restarts segmentation at that boundary.

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}

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

The `Location` in which to iterate the positions of.

</td>
</tr>
<tr>
<td>

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

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

When `true` returns the positions in reverse order. In the case of the `unit` being `word`, the actual returned positions are different (i.e. we will get the start of a word in reverse instead of the end).

</td>
</tr>
<tr>
<td>

`options.unit?`

</td>
<td>

[`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md)

</td>
<td>

- `offset`: Moves to the next offset `Point`. It will include the `Point` at the end of a `Text` object and then move onto the first `Point` (at the 0th offset) of the next `Text` object. This may be counter-intuitive because the end of a `Text` and the beginning of the next `Text` might be thought of as the same position.
- `character`: Moves to the next `character` but is not always the next `index` in the string. This is because Unicode encodings may require multiple bytes to create one character. Unlike `offset`, `character` will not count the end of a `Text` and the beginning of the next `Text` as separate positions to return. Warning: The character offsets for Unicode characters does not appear to be reliable in some cases like a Smiley Emoji will be identified as 2 characters.
- `word`: Moves to the position immediately after the next `word`. In `reverse` mode, moves to the position immediately before the previous `word`. Whitespace and punctuation end a word, and apostrophes inside a word don't. Where `Intl.Segmenter` is available, a run of word characters is split further at its word boundaries, so Chinese, Japanese and Thai text without spaces moves and deletes one word at a time.
- `line` | `block`: Starts at the beginning position and then the position at the end of the block. Then starts at the beginning of the next block and then the end of the next block.

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

When `true` include void Nodes.

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`BasePoint`](BasePoint.md), `void`, `undefined`\>

***

#### setNormalizing()

> **setNormalizing**(`editor`: [`BaseEditor`](BaseEditor.md), `isNormalizing`: `boolean`): `void`

Defined in: [interfaces/editor.ts:1464](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1464)

Manually set if the editor should currently be normalizing.

Note: Using this incorrectly can leave the editor in an invalid state.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`isNormalizing`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

#### withoutNormalizing()

> **withoutNormalizing**(`editor`: [`BaseEditor`](BaseEditor.md), `fn`: () => `void`): `void`

Defined in: [interfaces/editor.ts:1515](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1515)

Call a function, deferring normalization until after it completes.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`fn`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

#### withRemoteChanges()

> **withRemoteChanges**(`editor`: [`BaseEditor`](BaseEditor.md), `fn`: () => `void`): `void`

Defined in: [interfaces/editor.ts:1531](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1531)

Apply remote operations inside a synchronous callback. An expanded selection uses inward affinity, so text inserted at either edge stays outside the selected content. Collapsed carets keep their usual forward behavior. Local operations outside the scope retain their existing selection behavior.

Scopes can nest and restore the previous flag even if the callback throws. The scope covers only the synchronous callback; apply asynchronous updates inside a new scope when they arrive. This helper does not synchronize operations or change history saving. Removing a selected node keeps the existing nearest-point fallback.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`fn`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Example

```typescript
Editor.withRemoteChanges(editor, () => {
  Editor.withoutNormalizing(editor, () => {
    for (const operation of remoteOperations) editor.apply(operation)
  })
})
```

***

#### word()

> **word**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`BasePoint`](BasePoint.md) \| [`BaseRange`](BaseRange.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; \}): [`BaseRange`](BaseRange.md) \| `undefined`

Defined in: [interfaces/editor.ts:1510](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1510)

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

\{ `at?`: [`BasePoint`](BasePoint.md) \| [`BaseRange`](BaseRange.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`BasePoint`](BasePoint.md) \| [`BaseRange`](BaseRange.md)

</td>
</tr>
<tr>
<td>

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

[`BaseRange`](BaseRange.md) \| `undefined`

### Queries

#### fragment()

> **fragment**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md)): [`Descendant`](../type-aliases/Descendant.md)[]

Defined in: [interfaces/editor.ts:1104](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1104)

Get the fragment at a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Descendant`](../type-aliases/Descendant.md)[]

***

#### hasBlocks()

> **hasBlocks**(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1110](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1110)

Check if a node has block children.

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
</tbody>
</table>

##### Returns

`boolean`

***

#### hasInlines()

> **hasInlines**(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1116](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1116)

Check if a node has inline and text children.

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
</tbody>
</table>

##### Returns

`boolean`

***

#### hasPath()

> **hasPath**(`editor`: [`BaseEditor`](BaseEditor.md), `path`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/editor.ts:1122](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1122)

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

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

#### hasTexts()

> **hasTexts**(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1133](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1133)

Check if a node has text children.

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
</tbody>
</table>

##### Returns

`boolean`

***

#### insertionPoint()

> **insertionPoint**(`editor`: [`BaseEditor`](BaseEditor.md), `point`: [`BasePoint`](BasePoint.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:1220](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1220)

Resolve a caret to the point that implicit insertion will use. Applies `inlineEdgeAffinity` first, then `leafEdgeAffinity`, with at most one move for each rule. Both default to `null`, which preserves the supplied point. The helper does not change the selection.

The rules apply to `editor.insertText`, `insertFragment` and insertion of inline elements with `insertNodes` only when `at` is omitted and the selection is collapsed. Explicit locations, expanded selections, and insertion of text or block nodes through `insertNodes` retain their existing behavior. IME composition remains native; these rules govern committed insertion.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BasePoint`](BasePoint.md)

***

#### isBlock()

> **isBlock**(`editor`: [`BaseEditor`](BaseEditor.md), `value`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1193](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1193)

Check if an element is a block element. It only accepts an `Element`, so check other values with `Element.isElement` first.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isEdge()

> **isEdge**(`editor`: [`BaseEditor`](BaseEditor.md), `point`: [`BasePoint`](BasePoint.md), `at`: [`Location`](../type-aliases/Location.md)): `boolean`

Defined in: [interfaces/editor.ts:1199](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1199)

Check if a point is an edge of a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isEditor()

> **isEditor**(`value`: `any`, `options?`: \{ `deep?`: `boolean`; \}): `value is BaseEditor`

Defined in: [interfaces/editor.ts:1206](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1206)

Check if a value is an `Editor` object.

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

Type also exported as `EditorIsEditorOptions`

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

`value is BaseEditor`

***

#### isElementReadOnly()

> **isElementReadOnly**(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1212](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1212)

Check if a value is a read-only `Element` object.

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
</tbody>
</table>

##### Returns

`boolean`

***

#### isEmpty()

> **isEmpty**(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1228](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1228)

Check if an element is empty, accounting for void nodes.

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
</tbody>
</table>

##### Returns

`boolean`

***

#### isEnd()

> **isEnd**(`editor`: [`BaseEditor`](BaseEditor.md), `point`: [`BasePoint`](BasePoint.md), `at`: [`Location`](../type-aliases/Location.md)): `boolean`

Defined in: [interfaces/editor.ts:1234](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1234)

Check if a point is the end point of a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isInline()

> **isInline**(`editor`: [`BaseEditor`](BaseEditor.md), `value`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1240](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1240)

Check if an element is an inline element. It only accepts an `Element`, so check other values with `Element.isElement` first.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isNormalizing()

> **isNormalizing**(`editor`: [`BaseEditor`](BaseEditor.md)): `boolean`

Defined in: [interfaces/editor.ts:1246](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1246)

Check if the editor is currently normalizing after each operation.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isSelectable()

> **isSelectable**(`editor`: [`BaseEditor`](BaseEditor.md), `element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1257](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1257)

Check if a value is a selectable `Element` object.

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
</tbody>
</table>

##### Returns

`boolean`

***

#### isStart()

> **isStart**(`editor`: [`BaseEditor`](BaseEditor.md), `point`: [`BasePoint`](BasePoint.md), `at`: [`Location`](../type-aliases/Location.md)): `boolean`

Defined in: [interfaces/editor.ts:1263](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1263)

Check if a point is the start point of a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isVoid()

> **isVoid**(`editor`: [`BaseEditor`](BaseEditor.md), `value`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:1269](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1269)

Check if an element is a void element. It only accepts an `Element`, so check other values with `Element.isElement` first.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### marks()

> **marks**(`editor`: [`BaseEditor`](BaseEditor.md)): `Omit`\<[`BaseText`](BaseText.md), `"text"`\> \| `null`

Defined in: [interfaces/editor.ts:1306](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1306)

Get the marks that would be added to text at the current selection.

At a collapsed caret with a non-null edge rule, returns the receiving leaf’s marks, unless explicit `editor.marks` are set. When both edge rules return `null`, the existing previous-leaf behavior at offset zero is preserved.

If `editor.marks` is set (marks toggled with a collapsed selection), those are returned. With an expanded selection, it returns the marks of the first text node in the selection, skipping a node the selection only touches at its end, so it describes what typing over the selection would produce rather than marks shared by the whole selection. To check whether a mark applies to all of the selected text, iterate `Editor.nodes(editor, { match: Text.isText })` and compare each node.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`Omit`\<[`BaseText`](BaseText.md), `"text"`\> \| `null`

***

#### path()

> **path**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`Path`](../type-aliases/Path.md)

Defined in: [interfaces/editor.ts:1356](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1356)

Get the path of a location.

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

`at`

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

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorPathOptions`

</td>
</tr>
<tr>
<td>

`options.depth?`

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

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`Path`](../type-aliases/Path.md)

***

#### pathRefs()

> **pathRefs**(`editor`: [`BaseEditor`](BaseEditor.md)): `Set`\<[`PathRef`](PathRef.md)\>

Defined in: [interfaces/editor.ts:1370](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1370)

Get the set of currently tracked path refs of the editor.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`Set`\<[`PathRef`](PathRef.md)\>

***

#### point()

> **point**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:1377](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1377)

Get the start or end point of a location.

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

`at`

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

`options?`

</td>
<td>

\{ `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorPointOptions`

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`BasePoint`](BasePoint.md)

***

#### pointRefs()

> **pointRefs**(`editor`: [`BaseEditor`](BaseEditor.md)): `Set`\<[`PointRef`](PointRef.md)\>

Defined in: [interfaces/editor.ts:1395](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1395)

Get the set of currently tracked point refs of the editor.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`Set`\<[`PointRef`](PointRef.md)\>

***

#### range()

> **range**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `to?`: [`Location`](../type-aliases/Location.md)): [`BaseRange`](BaseRange.md)

Defined in: [interfaces/editor.ts:1428](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1428)

Get a range of a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`to?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BaseRange`](BaseRange.md)

***

#### rangeRefs()

> **rangeRefs**(`editor`: [`BaseEditor`](BaseEditor.md)): `Set`\<[`RangeRef`](RangeRef.md)\>

Defined in: [interfaces/editor.ts:1446](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1446)

Get the set of currently tracked range refs of the editor.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`Set`\<[`RangeRef`](RangeRef.md)\>

***

#### shouldMergeNodesRemovePrevNode()

> **shouldMergeNodesRemovePrevNode**(`editor`: [`BaseEditor`](BaseEditor.md), `prevNodeEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md), `curNodeEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)): `boolean`

Defined in: [interfaces/editor.ts:1537](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1537)

Call a function, Determine whether or not remove the previous node when merge.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`prevNodeEntry`

</td>
<td>

[`NodeEntry`](../type-aliases/NodeEntry.md)

</td>
</tr>
<tr>
<td>

`curNodeEntry`

</td>
<td>

[`NodeEntry`](../type-aliases/NodeEntry.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### string()

> **string**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `voids?`: `boolean`; \}): `string`

Defined in: [interfaces/editor.ts:1480](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1480)

Get the text string content of a location.

Note: by default the text of void nodes is considered to be an empty
string, regardless of content, unless you pass in true for the voids option

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

`at`

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

`options?`

</td>
<td>

\{ `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorStringOptions`

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

##### Returns

`string`

### Relational

#### above()

> **above**\<`T` *extends* [`Ancestor`](../type-aliases/Ancestor.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

Defined in: [interfaces/editor.ts:1013](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1013)

Get the ancestor above a location in the document.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t"></a> `T` *extends* [`Ancestor`](../type-aliases/Ancestor.md)

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorAboveOptions<T extends Ancestor>`

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

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

***

#### after()

> **after**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}): [`BasePoint`](BasePoint.md) \| `undefined`

Defined in: [interfaces/editor.ts:1032](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1032)

Get the point after a location.

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

`at`

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

`options?`

</td>
<td>

\{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorAfterOptions`

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

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

</td>
<td>

Customizes word boundaries when `unit` is `word`. The callback receives a whole grapheme, including a combined character or emoji. A custom callback replaces the default punctuation rules and language segmentation; it is ignored for other units.

**Example**

```ts
`isWordCharacter: character => /[\w-]/.test(character)` treats `foo-bar_baz` as one word.
```

</td>
</tr>
<tr>
<td>

`options.unit?`

</td>
<td>

[`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md)

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

##### Returns

[`BasePoint`](BasePoint.md) \| `undefined`

***

#### before()

> **before**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}): [`BasePoint`](BasePoint.md) \| `undefined`

Defined in: [interfaces/editor.ts:1043](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1043)

Get the point before a location.

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

`at`

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

`options?`

</td>
<td>

\{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorBeforeOptions`

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

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

</td>
<td>

Customizes word boundaries when `unit` is `word`. The callback receives a whole grapheme, including a combined character or emoji. A custom callback replaces the default punctuation rules and language segmentation; it is ignored for other units.

**Example**

```ts
`isWordCharacter: character => /[\w-]/.test(character)` treats `foo-bar_baz` as one word.
```

</td>
</tr>
<tr>
<td>

`options.unit?`

</td>
<td>

[`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md)

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

##### Returns

[`BasePoint`](BasePoint.md) \| `undefined`

***

#### edges()

> **edges**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md)): \[[`BasePoint`](BasePoint.md), [`BasePoint`](BasePoint.md)\]

Defined in: [interfaces/editor.ts:1076](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1076)

Get the start and end points of a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

\[[`BasePoint`](BasePoint.md), [`BasePoint`](BasePoint.md)\]

***

#### elementReadOnly()

> **elementReadOnly**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

Defined in: [interfaces/editor.ts:1083](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1083)

Match a read-only element in the current branch of the editor.

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorElementReadOnlyOptions`

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

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

***

#### end()

> **end**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:1092](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1092)

Get the end point of a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BasePoint`](BasePoint.md)

***

#### first()

> **first**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md)): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/editor.ts:1098](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1098)

Get the first node at a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

***

#### last()

> **last**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md)): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/editor.ts:1275](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1275)

Get the last node at a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

***

#### levels()

> **levels**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `reverse?`: `boolean`; `voids?`: `boolean`; \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

Defined in: [interfaces/editor.ts:1293](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1293)

Iterate through all of the levels at a location.

##### Type Parameters

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `reverse?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorLevelsOptions<T>`

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

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

***

#### next()

> **next**\<`T` *extends* [`Descendant`](../type-aliases/Descendant.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

Defined in: [interfaces/editor.ts:1313](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1313)

Get the matching node in the branch of the document after a location.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-3"></a> `T` *extends* [`Descendant`](../type-aliases/Descendant.md)

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorNextOptions<T>`

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

[`SelectionMode`](../type-aliases/SelectionMode.md)

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

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

***

#### nodes()

> **nodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `pass?`: (`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `universal?`: `boolean`; `voids?`: `boolean`; \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

Defined in: [interfaces/editor.ts:1328](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1328)

Iterate through all of the nodes in the Editor.

##### Type Parameters

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

\{ `at?`: [`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `pass?`: (`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `universal?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorNodesOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md)

</td>
<td>

The location to iterate over.

**Default**

```ts
The current selection. If there is no selection, nothing is yielded.
```

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

Provide a predicate to the `match?` option to limit the `NodeEntry` objects that are returned.

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`SelectionMode`](../type-aliases/SelectionMode.md)

</td>
<td>

- `'all'` (default): Return all matching nodes
- `'highest'`: in a hierarchy of nodes, only return the highest level matching nodes
- `'lowest'`: in a hierarchy of nodes, only return the lowest level matching nodes

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

Skip the descendants of certain nodes (but not the nodes themselves).

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

Walk siblings from last to first. Ancestors still come before their descendants, so this isn't the forward order reversed: for `[block[text a, text b], block[text c]]` the forward order is `editor, 0, 0.0, 0.1, 1, 1.0` and the reverse order is `editor, 1, 1.0, 0, 0.1, 0.0`. To get the exact reverse, collect the forward entries and reverse the array.

</td>
</tr>
<tr>
<td>

`options.universal?`

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

##### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

***

#### parent()

> **parent**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Ancestor`](../type-aliases/Ancestor.md)\>

Defined in: [interfaces/editor.ts:1345](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1345)

Get the parent node of a location.

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

`at`

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

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorParentOptions`

</td>
</tr>
<tr>
<td>

`options.depth?`

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

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Ancestor`](../type-aliases/Ancestor.md)\>

***

#### previous()

> **previous**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

Defined in: [interfaces/editor.ts:1419](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1419)

Get the matching node in the branch of the document before a location.

##### Type Parameters

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorPreviousOptions<T>`

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

[`SelectionMode`](../type-aliases/SelectionMode.md)

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

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

***

#### start()

> **start**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:1470](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1470)

Get the start point of a location.

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

`editor`

</td>
<td>

[`BaseEditor`](BaseEditor.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BasePoint`](BasePoint.md)

***

#### void()

> **void**(`editor`: [`BaseEditor`](BaseEditor.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

Defined in: [interfaces/editor.ts:1505](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1505)

Match a void node in the current branch of the editor.

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

\{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorVoidOptions`

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

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

### Retrieval

#### leaf()

> **leaf**(`editor`: [`BaseEditor`](BaseEditor.md), `at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseText`](BaseText.md)\>

Defined in: [interfaces/editor.ts:1282](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1282)

Get the leaf text node at a location.

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

`at`

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

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorLeafOptions`

</td>
</tr>
<tr>
<td>

`options.depth?`

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

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseText`](BaseText.md)\>

### Selection Commands

#### unhangRange()

> **unhangRange**(`editor`: [`BaseEditor`](BaseEditor.md), `range`: [`BaseRange`](BaseRange.md), `options?`: \{ `voids?`: `boolean`; \}): [`BaseRange`](BaseRange.md)

Defined in: [interfaces/editor.ts:1494](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1494)

Convert a range into a non-hanging one.

A "hanging" range is one created by the browser's "triple-click" selection behavior. When triple-clicking a block, the browser selects from the start of that block to the start of the _next_ block. The range thus "hangs over" into the next block. If `unhangRange` is given such a range, it moves the end backwards until it's in a non-empty text node that precedes the hanging block.

Note that `unhangRange` is designed for the specific purpose of fixing triple-clicked blocks, and therefore currently has a number of caveats:

- It does not modify the start of the range; only the end. For example, it does not "unhang" a selection that starts at the end of a previous block.
- It only does anything if the start block is fully selected. For example, it does not handle ranges created by double-clicking the end of a paragraph (which browsers treat by selecting from the end of that paragraph to the start of the next).

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

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

\{ `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorUnhangRangeOptions`

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

Allow placing the end of the selection in a void node.

</td>
</tr>
</tbody>
</table>

##### Returns

[`BaseRange`](BaseRange.md)
