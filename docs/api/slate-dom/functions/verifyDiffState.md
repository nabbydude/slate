# Function: verifyDiffState()

> **verifyDiffState**(`editor`: [`DOMEditor`](../interfaces/DOMEditor.md), `textDiff`: [`TextDiff`](../type-aliases/TextDiff.md)): `boolean`

Defined in: [slate-dom/src/utils/diff-text.ts:20](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/diff-text.ts#L20)

Check whether a text diff was applied in a way we can perform the pending action on /
recover the pending selection.

## Parameters

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

[`DOMEditor`](../interfaces/DOMEditor.md)

</td>
</tr>
<tr>
<td>

`textDiff`

</td>
<td>

[`TextDiff`](../type-aliases/TextDiff.md)

</td>
</tr>
</tbody>
</table>

## Returns

`boolean`
