# Function: normalizeRange()

> **normalizeRange**(`editor`: [`DOMEditor`](../interfaces/DOMEditor.md), `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}): [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`

Defined in: [slate-dom/src/utils/diff-text.ts:194](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/diff-text.ts#L194)

Normalize a 'pending selection' to ensure it's valid in the current document state.

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

`editor`

</td>
<td>

[`DOMEditor`](../interfaces/DOMEditor.md)

</td>
</tr>
<tr>
<td>

`range`

</td>
<td>

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

</td>
</tr>
</tbody>
</table>

## Returns

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`
