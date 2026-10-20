# Interface: HistoryEditor

Defined in: [slate-history/src/history-editor.ts:16](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history-editor.ts#L16)

The `HistoryEditor` interface is added to the `Editor` when it is instantiated using the [withHistory](../functions/withHistory.md) method.

## Extends

- [`BaseEditor`](../../slate/interfaces/BaseEditor.md)

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="history"></a> `history`

</td>
<td>

[`History`](History.md)

</td>
<td>

[slate-history/src/history-editor.ts:17](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history-editor.ts#L17)

</td>
</tr>
</tbody>
</table>

## Methods

### redo()

> **redo**(): `void`

Defined in: [slate-history/src/history-editor.ts:27](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history-editor.ts#L27)

Redo to the next saved state.

#### Returns

`void`

***

### undo()

> **undo**(): `void`

Defined in: [slate-history/src/history-editor.ts:24](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history-editor.ts#L24)

Undo to the previous saved state.

A saved `selectionBefore` is restored even if the current selection is null, such as after removing the last block. Redo restores that saved selection before replaying the batch. Standalone selection changes are not saved, so redo does not replay cursor moves made after its operations.

#### Returns

`void`

***

### writeHistory()

> **writeHistory**(`stack`: `"redos"` \| `"undos"`, `batch`: `any`): `void`

Defined in: [slate-history/src/history-editor.ts:30](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history-editor.ts#L30)

Push a batch of operations as either `undos` or `redos` onto `editor.history.undos` or `editor.history.redos`

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

`stack`

</td>
<td>

`"redos"` \| `"undos"`

</td>
</tr>
<tr>
<td>

`batch`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`
