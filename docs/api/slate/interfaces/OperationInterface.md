# Interface: OperationInterface

Defined in: [interfaces/operation.ts:140](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L140)

## Methods

### Relational

#### inverse()

> **inverse**(`op`: [`BaseOperation`](../type-aliases/BaseOperation.md)): [`BaseOperation`](../type-aliases/BaseOperation.md)

Defined in: [interfaces/operation.ts:176](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L176)

Invert an operation, returning a new operation that will exactly undo the
original when applied.

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

`op`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`BaseOperation`](../type-aliases/BaseOperation.md)

### Type Guards

#### isNodeOperation()

> **isNodeOperation**(`value`: `any`): `value is NodeOperation`

Defined in: [interfaces/operation.ts:145](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L145)

Check if a value is a `NodeOperation` object.

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

`value is NodeOperation`

***

#### isOperation()

> **isOperation**(`value`: `any`): `value is BaseOperation`

Defined in: [interfaces/operation.ts:151](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L151)

Check if a value is an `Operation` object.

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

`value is BaseOperation`

***

#### isOperationList()

> **isOperationList**(`value`: `any`): `value is BaseOperation[]`

Defined in: [interfaces/operation.ts:157](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L157)

Check if a value is a list of `Operation` objects.

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

`value is BaseOperation[]`

***

#### isSelectionOperation()

> **isSelectionOperation**(`value`: `any`): `value is BaseSetSelectionOperation`

Defined in: [interfaces/operation.ts:163](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L163)

Check if a value is a `SelectionOperation` object.

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

`value is BaseSetSelectionOperation`

***

#### isTextOperation()

> **isTextOperation**(`value`: `any`): `value is TextOperation`

Defined in: [interfaces/operation.ts:169](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L169)

Check if a value is a `TextOperation` object.

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

`value is TextOperation`
