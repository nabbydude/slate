# Interface: PointInterface

Defined in: [interfaces/point.ts:26](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L26)

## Methods

### Comparison

#### compare()

> **compare**(`point`: [`BasePoint`](BasePoint.md), `another`: [`BasePoint`](BasePoint.md)): `-1` \| `0` \| `1`

Defined in: [interfaces/point.ts:32](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L32)

Compare a point to another, returning an integer indicating whether the
point was before, at, or after the other.

##### Parameters

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`-1` \| `0` \| `1`

***

#### equals()

> **equals**(`point`: [`BasePoint`](BasePoint.md), `another`: [`BasePoint`](BasePoint.md)): `boolean`

Defined in: [interfaces/point.ts:50](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L50)

Check if a point is exactly equal to another.

##### Parameters

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isAfter()

> **isAfter**(`point`: [`BasePoint`](BasePoint.md), `another`: [`BasePoint`](BasePoint.md)): `boolean`

Defined in: [interfaces/point.ts:38](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L38)

Check if a point is after another.

##### Parameters

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isBefore()

> **isBefore**(`point`: [`BasePoint`](BasePoint.md), `another`: [`BasePoint`](BasePoint.md)): `boolean`

Defined in: [interfaces/point.ts:44](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L44)

Check if a point is before another.

##### Parameters

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

### Relational

#### transform()

> **transform**(`point`: [`BasePoint`](BasePoint.md), `op`: [`BaseOperation`](../type-aliases/BaseOperation.md), `options?`: \{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}): [`BasePoint`](BasePoint.md) \| `null`

Defined in: [interfaces/point.ts:63](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L63)

Transform a point by an operation.

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`op`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `PointTransformOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`TextDirection`](../type-aliases/TextDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`BasePoint`](BasePoint.md) \| `null`

### Type Guards

#### isPoint()

> **isPoint**(`value`: `any`): `value is BasePoint`

Defined in: [interfaces/point.ts:56](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point.ts#L56)

Check if a value implements the `Point` interface.

##### Parameters

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

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

##### Returns

`value is BasePoint`
