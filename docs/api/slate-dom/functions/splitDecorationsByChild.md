# Function: splitDecorationsByChild()

> **splitDecorationsByChild**(`editor`: [`DOMEditor`](../interfaces/DOMEditor.md), `node`: [`Ancestor`](../../slate/type-aliases/Ancestor.md), `decorations`: [`DecoratedRange`](../../slate/type-aliases/DecoratedRange.md)[]): [`DecoratedRange`](../../slate/type-aliases/DecoratedRange.md)[][]

Defined in: [slate-dom/src/utils/range-list.ts:109](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/range-list.ts#L109)

Split and group decorations by each child of a node.

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

`node`

</td>
<td>

[`Ancestor`](../../slate/type-aliases/Ancestor.md)

</td>
</tr>
<tr>
<td>

`decorations`

</td>
<td>

[`DecoratedRange`](../../slate/type-aliases/DecoratedRange.md)[]

</td>
</tr>
</tbody>
</table>

## Returns

[`DecoratedRange`](../../slate/type-aliases/DecoratedRange.md)[][]

An array with length equal to that of `node.children`. Each index
corresponds to a child of `node`, and the value is an array of decorations
for that child.
