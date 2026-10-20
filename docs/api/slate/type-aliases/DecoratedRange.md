# Type Alias: DecoratedRange

> **DecoratedRange** = [`Range`](Range.md) & \{ `merge?`: (`leaf`: [`Text`](Text.md), `decoration`: `object`) => `void`; \}

Defined in: [interfaces/text.ts:37](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/text.ts#L37)

## Type Declaration

### merge?

> `optional` **merge?**: (`leaf`: [`Text`](Text.md), `decoration`: `object`) => `void`

Customize how another decoration is merged into a text node. If not specified, `Object.assign` would be used.
It is useful for overlapping decorations with the same key but different values.

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

`leaf`

</td>
<td>

[`Text`](Text.md)

</td>
</tr>
<tr>
<td>

`decoration`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`
