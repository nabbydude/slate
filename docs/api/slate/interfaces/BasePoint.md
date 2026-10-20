# Interface: BasePoint

Defined in: [interfaces/point.ts:8](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L8)

`Point` objects refer to a specific location in a text node in a Slate
document. Points can only refer to `Text` nodes.

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="offset"></a> `offset`

</td>
<td>

`number`

</td>
<td>

The distance into the node's string of text.

</td>
<td>

[interfaces/point.ts:16](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L16)

</td>
</tr>
<tr>
<td>

<a id="path"></a> `path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

The location of the node in the tree.

</td>
<td>

[interfaces/point.ts:12](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L12)

</td>
</tr>
</tbody>
</table>
