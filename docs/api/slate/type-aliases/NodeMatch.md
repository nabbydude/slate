# Type Alias: NodeMatch\<T *extends* [`Node`](Node.md)\>

> **NodeMatch**\<`T` *extends* [`Node`](Node.md)\> = ((`node`: [`Node`](Node.md), `path`: [`Path`](Path.md)) => `node is T`) \| ((`node`: [`Node`](Node.md), `path`: [`Path`](Path.md)) => `boolean`)

Defined in: [interfaces/editor.ts:1828](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1828)

A helper type for narrowing matched nodes with a predicate.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t"></a> `T` *extends* [`Node`](Node.md)

</td>
</tr>
</tbody>
</table>
