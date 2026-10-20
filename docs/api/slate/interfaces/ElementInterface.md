# Interface: ElementInterface

Defined in: [interfaces/element.ts:95](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L95)

## Methods

### Queries

#### matches()

> **matches**(`element`: [`BaseElement`](BaseElement.md), `props`: `Partial`\<[`Element`](../type-aliases/Element.md)\>): `boolean`

Defined in: [interfaces/element.ts:144](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L144)

Check if an element matches set of properties.

Note: this checks custom properties, and it does not ensure that any
children are equivalent.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
<tr>
<td>

`props`

</td>
<td>

`Partial`\<[`Element`](../type-aliases/Element.md)\>

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

### Type Guards

#### isAncestor()

> **isAncestor**(`value`: `any`, `options?`: \{ `deep?`: `boolean`; \}): `value is Ancestor`

Defined in: [interfaces/element.ts:101](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L101)

Check if a value implements the 'Ancestor' interface.

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

`value`

</td>
<td>

`any`

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

\{ `deep?`: `boolean`; \}

</td>
<td>

Type also exported as `ElementIsElementOptions`

</td>
</tr>
<tr>
<td>

`options.deep?`

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

`value is Ancestor`

***

#### isElement()

> **isElement**(`value`: `any`, `options?`: \{ `deep?`: `boolean`; \}): `value is BaseElement`

Defined in: [interfaces/element.ts:108](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L108)

Check if a value implements the `Element` interface.

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

`value`

</td>
<td>

`any`

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

\{ `deep?`: `boolean`; \}

</td>
<td>

Type also exported as `ElementIsElementOptions`

</td>
</tr>
<tr>
<td>

`options.deep?`

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

`value is BaseElement`

***

#### isElementList()

> **isElementList**(`value`: `any`, `options?`: \{ `deep?`: `boolean`; \}): `value is BaseElement[]`

Defined in: [interfaces/element.ts:115](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L115)

Check if a value is an array of `Element` objects.

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

`value`

</td>
<td>

`any`

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

\{ `deep?`: `boolean`; \}

</td>
<td>

Type also exported as `ElementIsElementOptions`

</td>
</tr>
<tr>
<td>

`options.deep?`

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

`value is BaseElement[]`

***

#### isElementProps()

> **isElementProps**(`props`: `any`): `props is Partial<BaseElement>`

Defined in: [interfaces/element.ts:124](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L124)

Check if a set of props is a partial of Element.

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

`props is Partial<BaseElement>`

***

#### isElementType()

> **isElementType**\<`T` *extends* [`BaseElement`](BaseElement.md)\>(`value`: `any`, `elementVal`: `string`, `elementKey?`: `string`): `value is T`

Defined in: [interfaces/element.ts:131](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L131)

Check if a value implements the `Element` interface and has elementKey with selected value.
Default it check to `type` key value

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t"></a> `T` *extends* [`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

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
<tr>
<td>

`elementVal`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`elementKey?`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`value is T`
