# Variable: jsx

> `const` **jsx**: \<`S`\>(`tagName`: `Function` \| `S`, `attributes?`: `Object`, ...`children`: `any`[]) => `ReturnType`\<\{ `anchor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `cursor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: `unknown`; \}[]; `editor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseEditor`](../../slate/interfaces/BaseEditor.md); `element`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md); `focus`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `fragment`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`Descendant`](../../slate/type-aliases/Descendant.md)[]; `point`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptPointRef`](../classes/HyperscriptPointRef.md); \}; `selection`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseRange`](../../slate/interfaces/BaseRange.md); `text`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseText`](../../slate/interfaces/BaseText.md); \} & `Record`\<`never`, (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md)\>\[`S`\]\>

Defined in: [index.ts:18](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-hyperscript/src/index.ts#L18)

The default hyperscript factory that ships with Slate, without custom tags.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-__types"></a> `S` *extends* `"anchor"` \| `"focus"` \| `"text"` \| `"cursor"` \| `"editor"` \| `"element"` \| `"fragment"` \| `"point"` \| `"selection"`

</td>
</tr>
</tbody>
</table>

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

`tagName`

</td>
<td>

`Function` \| `S`

</td>
</tr>
<tr>
<td>

`attributes?`

</td>
<td>

`Object`

</td>
</tr>
<tr>
<td>

...`children?`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

## Returns

`ReturnType`\<\{ `anchor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `cursor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: `unknown`; \}[]; `editor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseEditor`](../../slate/interfaces/BaseEditor.md); `element`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md); `focus`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `fragment`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`Descendant`](../../slate/type-aliases/Descendant.md)[]; `point`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptPointRef`](../classes/HyperscriptPointRef.md); \}; `selection`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseRange`](../../slate/interfaces/BaseRange.md); `text`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseText`](../../slate/interfaces/BaseText.md); \} & `Record`\<`never`, (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md)\>\[`S`\]\>
