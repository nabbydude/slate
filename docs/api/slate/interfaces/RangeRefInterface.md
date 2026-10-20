# Interface: RangeRefInterface

Defined in: [interfaces/range-ref.ts:40](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range-ref.ts#L40)

## Methods

### transform()

> **transform**(`ref`: [`RangeRef`](RangeRef.md), `op`: [`BaseOperation`](../type-aliases/BaseOperation.md)): `void`

Defined in: [interfaces/range-ref.ts:44](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range-ref.ts#L44)

Transform the range ref's current value by an operation. This is called automatically by the editor as operations are applied.

#### Parameters

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

`ref`

</td>
<td>

[`RangeRef`](RangeRef.md)

</td>
</tr>
<tr>
<td>

`op`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`
