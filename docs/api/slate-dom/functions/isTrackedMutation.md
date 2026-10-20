# Function: isTrackedMutation()

> **isTrackedMutation**(`editor`: [`DOMEditor`](../interfaces/DOMEditor.md), `mutation`: `MutationRecord`, `batch`: `MutationRecord`[]): `boolean`

Defined in: [slate-dom/src/utils/dom.ts:292](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/dom.ts#L292)

Check whether a mutation originates from a editable element inside the editor.

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

`mutation`

</td>
<td>

`MutationRecord`

</td>
</tr>
<tr>
<td>

`batch`

</td>
<td>

`MutationRecord`[]

</td>
</tr>
</tbody>
</table>

## Returns

`boolean`
