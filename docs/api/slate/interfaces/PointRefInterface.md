# Interface: PointRefInterface

Defined in: [interfaces/point-ref.ts:37](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point-ref.ts#L37)

## Methods

### transform()

> **transform**(`ref`: [`PointRef`](PointRef.md), `op`: [`BaseOperation`](../type-aliases/BaseOperation.md)): `void`

Defined in: [interfaces/point-ref.ts:41](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point-ref.ts#L41)

Transform the point ref's current value by an operation. This is called automatically by the editor as operations are applied.

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

[`PointRef`](PointRef.md)

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
