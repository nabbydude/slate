# Interface: LocationInterface

Defined in: [interfaces/location.ts:16](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/location.ts#L16)

A colleection of static helper methods for [Location](../variables/Location.md) objects.

## Methods

### Type Guards

#### isLocation()

> **isLocation**(`value`: `any`): `value is Location`

Defined in: [interfaces/location.ts:21](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/location.ts#L21)

Check if a value implements the `Location` interface.

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

`value is Location`

***

#### isPath()

> **isPath**(`at`: [`Location`](../type-aliases/Location.md)): `at is Path`

Defined in: [interfaces/location.ts:27](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/location.ts#L27)

Check if a location is a `Path`.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`at is Path`

***

#### isPoint()

> **isPoint**(`at`: [`Location`](../type-aliases/Location.md)): `at is BasePoint`

Defined in: [interfaces/location.ts:33](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/location.ts#L33)

Check if a location is a `Point`.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`at is BasePoint`

***

#### isRange()

> **isRange**(`at`: [`Location`](../type-aliases/Location.md)): `at is BaseRange`

Defined in: [interfaces/location.ts:39](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/location.ts#L39)

Check if a location is a `Range`.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`at is BaseRange`

***

#### isSpan()

> **isSpan**(`at`: [`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md)): `at is Span`

Defined in: [interfaces/location.ts:45](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/location.ts#L45)

Differentiate between a normal `Location` and a `Span`.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`at is Span`
