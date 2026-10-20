# Function: normalizePoint()

> **normalizePoint**(`editor`: [`DOMEditor`](../interfaces/DOMEditor.md), `point`: [`BasePoint`](../../slate/interfaces/BasePoint.md)): [`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null`

Defined in: [slate-dom/src/utils/diff-text.ts:157](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/diff-text.ts#L157)

Normalize a 'pending point' a.k.a a point based on the dom state before applying
the pending diffs. Since the pending diffs might have been inserted with different
marks we have to 'walk' the offset from the starting position to ensure we still
have a valid point inside the document

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

`point`

</td>
<td>

[`BasePoint`](../../slate/interfaces/BasePoint.md)

</td>
</tr>
</tbody>
</table>

## Returns

[`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null`
