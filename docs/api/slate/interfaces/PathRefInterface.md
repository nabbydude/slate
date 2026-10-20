# Interface: PathRefInterface

Defined in: [interfaces/path-ref.ts:35](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path-ref.ts#L35)

## Methods

### transform()

> **transform**(`ref`: [`PathRef`](PathRef.md), `op`: [`BaseOperation`](../type-aliases/BaseOperation.md)): `void`

Defined in: [interfaces/path-ref.ts:39](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path-ref.ts#L39)

Transform a PathRef's current value by an operation. This is called automatically by the editor as operations are applied.

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

[`PathRef`](PathRef.md)

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
