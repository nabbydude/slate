# Type Alias: NullableProps\<T\>

> **NullableProps**\<`T`\> = \{ \[K in keyof T\]: undefined extends T\[K\] ? T\[K\] \| null : T\[K\] \}

Defined in: [interfaces/editor.ts:1835](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L1835)

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

<a id="type-parameter-t"></a> `T`

</td>
</tr>
</tbody>
</table>
