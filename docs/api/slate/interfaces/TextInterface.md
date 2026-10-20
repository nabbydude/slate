# Interface: TextInterface

Defined in: [interfaces/text.ts:45](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L45)

## Methods

### Queries

#### decorations()

> **decorations**(`node`: [`BaseText`](BaseText.md), `decorations`: [`DecoratedRange`](../type-aliases/DecoratedRange.md)[]): \{ `leaf`: [`BaseText`](BaseText.md); `position?`: [`LeafPosition`](LeafPosition.md); \}[]

Defined in: [interfaces/text.ts:86](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L86)

Get the leaves for a text node given decorations.

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

`node`

</td>
<td>

[`BaseText`](BaseText.md)

</td>
</tr>
<tr>
<td>

`decorations`

</td>
<td>

[`DecoratedRange`](../type-aliases/DecoratedRange.md)[]

</td>
</tr>
</tbody>
</table>

##### Returns

\{ `leaf`: [`BaseText`](BaseText.md); `position?`: [`LeafPosition`](LeafPosition.md); \}[]

***

#### equals()

> **equals**(`text`: [`BaseText`](BaseText.md), `another`: [`BaseText`](BaseText.md), `options?`: \{ `ignore?`: readonly `string`[]; `loose?`: `boolean`; \}): `boolean`

Defined in: [interfaces/text.ts:52](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L52)

Check if two text nodes are equal.

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

`text`

</td>
<td>

[`BaseText`](BaseText.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

[`BaseText`](BaseText.md)

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

\{ `ignore?`: readonly `string`[]; `loose?`: `boolean`; \}

</td>
<td>

Type also exported as `TextEqualsOptions`

</td>
</tr>
<tr>
<td>

`options.ignore?`

</td>
<td>

readonly `string`[]

</td>
<td>

Top-level property names to exclude from both nodes before comparing, such as `ignore: ['id']` for application-generated IDs. Nested properties are still compared deeply, and neither input node is changed. Combine with `loose: true` to ignore both text content and the named properties. The default is an empty list.

</td>
</tr>
<tr>
<td>

`options.loose?`

</td>
<td>

`boolean`

</td>
<td>

When `true`, it checks if the properties of the `Text` object are equal except for the `text` property (i.e. the `String` value of the `Text`). When `false` (default), checks all properties including `text`.

This is used to check whether sibling text nodes can be merged.

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### matches()

> **matches**(`text`: [`BaseText`](BaseText.md), `props`: `Partial`\<[`Text`](../type-aliases/Text.md)\>): `boolean`

Defined in: [interfaces/text.ts:80](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L80)

Check if `text` matches a set of `props`.

The way the check works is that it makes sure that (a) all the `props` exist in the `text`, and (b) if it exists, that it exactly matches the properties in the `text`.
If a `props.text` property is passed in, it will be ignored.
If there are properties in `text` that are not in `props`, those will be ignored when it comes to testing for a match.

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

`text`

</td>
<td>

[`BaseText`](BaseText.md)

</td>
</tr>
<tr>
<td>

`props`

</td>
<td>

`Partial`\<[`Text`](../type-aliases/Text.md)\>

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

### Type Guards

#### isText()

> **isText**(`value`: `any`): `value is BaseText`

Defined in: [interfaces/text.ts:58](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L58)

Check if a value implements the `Text` interface.

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

`value is BaseText`

***

#### isTextList()

> **isTextList**(`value`: `any`): `value is BaseText[]`

Defined in: [interfaces/text.ts:64](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L64)

Check if a value is a list of `Text` objects.

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

`value is BaseText[]`

***

#### isTextProps()

> **isTextProps**(`props`: `any`): `props is Partial<BaseText>`

Defined in: [interfaces/text.ts:70](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L70)

Check if some props are a partial of Text.

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

`props`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

##### Returns

`props is Partial<BaseText>`
