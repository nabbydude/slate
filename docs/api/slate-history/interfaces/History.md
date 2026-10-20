# Interface: History

Defined in: [slate-history/src/history.ts:17](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history.ts#L17)

The `History` object contains the undo and redo history for the editor.

It can be accessed from an `Editor` instance as the property `history`.

This property is only available on the `Editor` if the editor was instantiated using the [withHistory](../functions/withHistory.md) method which adds undo/redo functionality to the Slate editor.

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

<a id="redos"></a> `redos`

</td>
<td>

\{ `operations`: [`BaseOperation`](../../slate/type-aliases/BaseOperation.md)[]; `selectionBefore`: [`BaseRange`](../../slate/interfaces/BaseRange.md) \| `null`; \}[]

</td>
<td>

[slate-history/src/history.ts:18](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history.ts#L18)

</td>
</tr>
<tr>
<td>

<a id="undos"></a> `undos`

</td>
<td>

\{ `operations`: [`BaseOperation`](../../slate/type-aliases/BaseOperation.md)[]; `selectionBefore`: [`BaseRange`](../../slate/interfaces/BaseRange.md) \| `null`; \}[]

</td>
<td>

[slate-history/src/history.ts:19](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/history.ts#L19)

</td>
</tr>
</tbody>
</table>
