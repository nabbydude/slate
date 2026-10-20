# Interface: RenderLeafProps

Defined in: [packages/slate-react/src/components/editable.tsx:146](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L146)

`RenderLeafProps` are passed to the `renderLeaf` handler.

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="attributes"></a> `attributes`

</td>
<td>

\{ `data-slate-leaf`: `true`; \}

</td>
<td>

&hyphen;

</td>
<td>

[packages/slate-react/src/components/editable.tsx:154](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L154)

</td>
</tr>
<tr>
<td>

`attributes.data-slate-leaf`

</td>
<td>

`true`

</td>
<td>

&hyphen;

</td>
<td>

[packages/slate-react/src/components/editable.tsx:155](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L155)

</td>
</tr>
<tr>
<td>

<a id="children"></a> `children`

</td>
<td>

`any`

</td>
<td>

&hyphen;

</td>
<td>

[packages/slate-react/src/components/editable.tsx:147](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L147)

</td>
</tr>
<tr>
<td>

<a id="leaf"></a> `leaf`

</td>
<td>

[`BaseText`](../../slate/interfaces/BaseText.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

</td>
<td>

The leaf node with any applied decorations.
If no decorations are applied, it will be identical to the `text` property.

</td>
<td>

[packages/slate-react/src/components/editable.tsx:152](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L152)

</td>
</tr>
<tr>
<td>

<a id="leafposition"></a> `leafPosition?`

</td>
<td>

[`LeafPosition`](../../slate/interfaces/LeafPosition.md)

</td>
<td>

The position of the leaf within the Text node, only present when the text node is split by decorations.

</td>
<td>

[packages/slate-react/src/components/editable.tsx:160](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L160)

</td>
</tr>
<tr>
<td>

<a id="text"></a> `text`

</td>
<td>

[`BaseText`](../../slate/interfaces/BaseText.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

</td>
<td>

&hyphen;

</td>
<td>

[packages/slate-react/src/components/editable.tsx:153](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L153)

</td>
</tr>
</tbody>
</table>
