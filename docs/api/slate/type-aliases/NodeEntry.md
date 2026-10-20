# Type Alias: NodeEntry\<T *extends* [`Node`](Node.md) = [`Node`](Node.md)\>

> **NodeEntry**\<`T` *extends* [`Node`](Node.md) = [`Node`](Node.md)\> = \[`T`, [`Path`](Path.md)\]

Defined in: [interfaces/node.ts:778](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L778)

`NodeEntry` objects are returned when iterating over the nodes in a Slate
document tree. They consist of the node and its path relative to the root
node in the document.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t"></a> `T` *extends* [`Node`](Node.md)

</td>
<td>

[`Node`](Node.md)

</td>
</tr>
</tbody>
</table>
