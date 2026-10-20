# Function: isTextDecorationsEqual()

> **isTextDecorationsEqual**(`list`: ([`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \})[] \| `null`, `another`: ([`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \})[] \| `null`): `boolean`

Defined in: [slate-dom/src/utils/range-list.ts:68](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/range-list.ts#L68)

Check if a list of decorator ranges are equal to another.

PERF: this requires the two lists to also have the ranges inside them in the
same order, but this is an okay constraint for us since decorations are
kept in order, and the odd case where they aren't is okay to re-render for.

## Parameters

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

`list`

</td>
<td>

([`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \})[] \| `null`

</td>
</tr>
<tr>
<td>

`another`

</td>
<td>

([`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \})[] \| `null`

</td>
</tr>
</tbody>
</table>

## Returns

`boolean`
