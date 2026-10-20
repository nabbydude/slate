# Variable: HistoryEditor

> **HistoryEditor**: \{ `isHistoryEditor`(`value`: `any`): `value is HistoryEditor`; `isMerging`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `boolean` \| `undefined`; `isSaving`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `boolean` \| `undefined`; `isSplittingOnce`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `boolean` \| `undefined`; `redo`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `void`; `setSplittingOnce`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `value`: `boolean` \| `undefined`): `void`; `undo`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `void`; `withMerging`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`; `withNewBatch`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`; `withoutMerging`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`; `withoutSaving`(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`; \}

Defined in: [slate-history/src/history-editor.ts:16](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history-editor.ts#L16)

## Type Declaration

### isHistoryEditor()

> **isHistoryEditor**(`value`: `any`): `value is HistoryEditor`

Check if a value is a `HistoryEditor` object.

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

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is HistoryEditor`

### isMerging()

> **isMerging**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `boolean` \| `undefined`

Get the merge flag's current value.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean` \| `undefined`

### isSaving()

> **isSaving**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `boolean` \| `undefined`

Get the saving flag's current value.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean` \| `undefined`

### isSplittingOnce()

> **isSplittingOnce**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `boolean` \| `undefined`

Get the splitting once flag's current value.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean` \| `undefined`

### redo()

> **redo**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `void`

Redo to the previous saved state.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

### setSplittingOnce()

> **setSplittingOnce**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `value`: `boolean` \| `undefined`): `void`

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`boolean` \| `undefined`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

### undo()

> **undo**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md)): `void`

Undo to the previous saved state.

A saved `selectionBefore` is restored even if the current selection is null, such as after removing the last block. Redo restores that saved selection before replaying the batch. Standalone selection changes are not saved, so redo does not replay cursor moves made after its operations.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

### withMerging()

> **withMerging**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`

Apply a series of changes inside a synchronous `fn`, These operations will
be merged into the previous history.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

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

#### Returns

`void`

### withNewBatch()

> **withNewBatch**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`

Apply a series of changes inside a synchronous `fn`, ensuring that the first
operation starts a new batch in the history. Subsequent operations will be
merged as usual.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

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

#### Returns

`void`

### withoutMerging()

> **withoutMerging**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`

Apply a series of changes inside a synchronous `fn`, without merging any of
the new operations into previous save point in the history.

Each transform called inside `fn` becomes its own undo step, and the normalization it triggers stays in that step. Use `withNewBatch` to make several transforms one step.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

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

#### Returns

`void`

### withoutSaving()

> **withoutSaving**(`editor`: [`HistoryEditor`](../interfaces/HistoryEditor.md), `fn`: () => `void`): `void`

Apply a series of changes inside a synchronous `fn`, without saving any of
their operations into the history.

Undo and redo steps already in the history are moved past these changes, so a
later undo still reverts the user's own edit even when the unsaved change
inserted, removed or edited content around it. A step whose content was
removed, or that can no longer be applied, such as a split whose halves are no
longer next to each other, is dropped.

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

[`HistoryEditor`](../interfaces/HistoryEditor.md)

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

#### Returns

`void`
