# Function: withDOM()

> **withDOM**\<`T` *extends* [`BaseEditor`](../../slate/interfaces/BaseEditor.md)\>(`editor`: `T`, `clipboardFormatKey?`: `string`): `T` & [`DOMEditor`](../interfaces/DOMEditor.md)

Defined in: [slate-dom/src/plugin/with-dom.ts:85](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/with-dom.ts#L85)

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

<a id="type-parameter-t"></a> `T` *extends* [`BaseEditor`](../../slate/interfaces/BaseEditor.md)

</td>
</tr>
</tbody>
</table>

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`editor`

</td>
<td>

`T`

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`clipboardFormatKey?`

</td>
<td>

`string`

</td>
<td>

`'x-slate-fragment'`

</td>
</tr>
</tbody>
</table>

## Returns

`T` & [`DOMEditor`](../interfaces/DOMEditor.md)
