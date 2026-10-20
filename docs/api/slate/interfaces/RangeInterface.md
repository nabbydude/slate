# Interface: RangeInterface

Defined in: [interfaces/range.ts:34](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L34)

## Methods

### Comparison

#### equals()

> **equals**(`range`: [`BaseRange`](BaseRange.md), `another`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/range.ts:59](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L59)

Check if a range is exactly equal to another.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### includes()

> **includes**(`range`: [`BaseRange`](BaseRange.md), `target`: [`Location`](../type-aliases/Location.md)): `boolean`

Defined in: [interfaces/range.ts:68](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L68)

Check if a `range` includes a path, a point, or part of another range.

For clarity the definition of `includes` can mean partially includes.
Another way to describe this is if one Range intersects the other Range.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### surrounds()

> **surrounds**(`range`: [`BaseRange`](BaseRange.md), `target`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/range.ts:74](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L74)

Check if a range includes another range.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

### Other

#### direction()

> **direction**(`range`: [`BaseRange`](BaseRange.md)): `"forward"` \| `"backward"` \| `"collapsed"`

Defined in: [interfaces/range.ts:38](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L38)

Get the direction of a `range`: `'forward'` when the focus point comes after the anchor point, `'backward'` when it comes before, and `'collapsed'` when they're at the same position.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`"forward"` \| `"backward"` \| `"collapsed"`

### Queries

#### edges()

> **edges**(`range`: [`BaseRange`](BaseRange.md), `options?`: \{ `reverse?`: `boolean`; \}): \[[`BasePoint`](BasePoint.md), [`BasePoint`](BasePoint.md)\]

Defined in: [interfaces/range.ts:46](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L46)

Get the start and end points of a range, in the order in which they appear
in the document.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

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

\{ `reverse?`: `boolean`; \}

</td>
<td>

Type also exported as `RangeEdgesOptions`

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

\[[`BasePoint`](BasePoint.md), [`BasePoint`](BasePoint.md)\]

***

#### end()

> **end**(`range`: [`BaseRange`](BaseRange.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/range.ts:53](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L53)

Get the end point of a range according to the order in which it appears in
the document.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BasePoint`](BasePoint.md)

***

#### isBackward()

> **isBackward**(`range`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/range.ts:88](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L88)

Check if a range is backward, meaning that its anchor point appears in the
document _after_ its focus point. A collapsed range is not backward.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isCollapsed()

> **isCollapsed**(`range`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/range.ts:95](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L95)

Check if a range is collapsed, meaning that both its anchor and focus
points refer to the exact same position in the document.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isExpanded()

> **isExpanded**(`range`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/range.ts:104](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L104)

Check if a range is expanded.

This is the opposite of [isCollapsed](#iscollapsed) and is provided for
legibility.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isForward()

> **isForward**(`range`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/range.ts:111](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L111)

Check if a range is forward, meaning that its anchor point appears in the
document _before_ its focus point, so a collapsed range counts as forward. Use [RangeInterface#direction](#direction) to tell collapsed ranges apart.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### points()

> **points**(`range`: [`BaseRange`](BaseRange.md)): `Generator`\<[`PointEntry`](../type-aliases/PointEntry.md), `void`, `undefined`\>

Defined in: [interfaces/range.ts:124](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L124)

Iterate through the two point entries in a `Range`. First it will yield a
[PointEntry](../type-aliases/PointEntry.md) representing the `anchor`, then the `focus`.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`Generator`\<[`PointEntry`](../type-aliases/PointEntry.md), `void`, `undefined`\>

***

#### start()

> **start**(`range`: [`BaseRange`](BaseRange.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/range.ts:131](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L131)

Get the start point of a range according to the order in which it appears
in the document.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BasePoint`](BasePoint.md)

### Relational

#### intersection()

> **intersection**(`range`: [`BaseRange`](BaseRange.md), `another`: [`BaseRange`](BaseRange.md)): [`BaseRange`](BaseRange.md) \| `null`

Defined in: [interfaces/range.ts:81](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L81)

Get the intersection of one `range` with `another`. If the two ranges do
not overlap, return `null`.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BaseRange`](BaseRange.md) \| `null`

***

#### transform()

> **transform**(`range`: [`BaseRange`](BaseRange.md), `op`: [`BaseOperation`](../type-aliases/BaseOperation.md), `options?`: \{ `affinity?`: [`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`; \}): [`BaseRange`](BaseRange.md) \| `null`

Defined in: [interfaces/range.ts:138](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L138)

Transform a range by an operation.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

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

\{ `affinity?`: [`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `RangeTransformOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

[`BaseRange`](BaseRange.md) \| `null`

### Type Guards

#### isRange()

> **isRange**(`value`: `any`): `value is BaseRange`

Defined in: [interfaces/range.ts:117](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range.ts#L117)

Check if a value implements the [Range](../variables/Range.md) interface.

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

`value is BaseRange`
