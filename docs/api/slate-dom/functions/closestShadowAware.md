# Function: closestShadowAware()

> **closestShadowAware**(`element`: [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) \| `null` \| `undefined`, `selector`: `string`): [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) \| `null`

Defined in: [slate-dom/src/utils/dom.ts:362](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/dom.ts#L362)

Shadow DOM-aware version of Element.closest()
Traverses up the DOM tree, crossing shadow DOM boundaries

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

`element`

</td>
<td>

[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) \| `null` \| `undefined`

</td>
</tr>
<tr>
<td>

`selector`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

## Returns

[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) \| `null`
