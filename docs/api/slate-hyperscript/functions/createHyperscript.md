# Function: createHyperscript()

> **createHyperscript**\<`E` *extends* [`HyperscriptShorthands`](../type-aliases/HyperscriptShorthands.md) = \{ \}, `C` *extends* [`HyperscriptCreators`](../type-aliases/HyperscriptCreators.md)\<`any`\> = \{ \}\>(`options?`: \{ `creators?`: `C`; `elements?`: `E`; \}): \<`S`\>(`tagName`: `Function` \| `S`, `attributes?`: `Object`, ...`children`: `any`[]) => `ReturnType`\<\{ `anchor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `cursor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: `unknown`; \}[]; `editor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseEditor`](../../slate/interfaces/BaseEditor.md); `element`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md); `focus`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `fragment`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`Descendant`](../../slate/type-aliases/Descendant.md)[]; `point`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptPointRef`](../classes/HyperscriptPointRef.md); \}; `selection`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseRange`](../../slate/interfaces/BaseRange.md); `text`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseText`](../../slate/interfaces/BaseText.md); \} & `Record`\<keyof `E`, (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md)\> & `C`\[`S`\]\>

Defined in: [hyperscript.ts:52](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-hyperscript/src/hyperscript.ts#L52)

Create a Slate hyperscript function with `options`.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-e"></a> `E` *extends* [`HyperscriptShorthands`](../type-aliases/HyperscriptShorthands.md)

</td>
<td>

\{ \}

</td>
</tr>
<tr>
<td>

<a id="type-parameter-c"></a> `C` *extends* [`HyperscriptCreators`](../type-aliases/HyperscriptCreators.md)\<`any`\>

</td>
<td>

\{ \}

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

`options?`

</td>
<td>

\{ `creators?`: `C`; `elements?`: `E`; \}

</td>
</tr>
<tr>
<td>

`options.creators?`

</td>
<td>

`C`

</td>
</tr>
<tr>
<td>

`options.elements?`

</td>
<td>

`E`

</td>
</tr>
</tbody>
</table>

## Returns

\<`S`\>(`tagName`: `Function` \| `S`, `attributes?`: `Object`, ...`children`: `any`[]) => `ReturnType`\<\{ `anchor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `cursor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: `unknown`; \}[]; `editor`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseEditor`](../../slate/interfaces/BaseEditor.md); `element`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md); `focus`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptRangeRef`](../classes/HyperscriptRangeRef.md); \}; `fragment`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`Descendant`](../../slate/type-aliases/Descendant.md)[]; `point`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => \{ `offset?`: `number`; `path?`: [`Path`](../../slate/type-aliases/Path.md); `ref?`: [`HyperscriptPointRef`](../classes/HyperscriptPointRef.md); \}; `selection`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseRange`](../../slate/interfaces/BaseRange.md); `text`: (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseText`](../../slate/interfaces/BaseText.md); \} & `Record`\<keyof `E`, (`tagName`: `string`, `attributes`: \{\[`key`: `string`\]: `any`; \}, `children`: `any`[]) => [`BaseElement`](../../slate/interfaces/BaseElement.md)\> & `C`\[`S`\]\>
