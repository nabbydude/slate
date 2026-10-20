# Function: containsShadowAware()

> **containsShadowAware**(`parent`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) \| `null` \| `undefined`, `child`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) \| `null` \| `undefined`): `boolean`

Defined in: [slate-dom/src/utils/dom.ts:393](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/dom.ts#L393)

Shadow DOM-aware version of Node.contains()
Checks if a node contains another node, crossing shadow DOM boundaries

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

`parent`

</td>
<td>

[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) \| `null` \| `undefined`

</td>
</tr>
<tr>
<td>

`child`

</td>
<td>

[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) \| `null` \| `undefined`

</td>
</tr>
</tbody>
</table>

## Returns

`boolean`
