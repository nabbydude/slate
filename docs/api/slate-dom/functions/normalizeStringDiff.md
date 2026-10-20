# Function: normalizeStringDiff()

> **normalizeStringDiff**(`targetText`: `string`, `diff`: [`StringDiff`](../type-aliases/StringDiff.md)): [`StringDiff`](../type-aliases/StringDiff.md) \| `null`

Defined in: [slate-dom/src/utils/diff-text.ts:87](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/diff-text.ts#L87)

Remove redundant changes from the diff so that it spans the minimal possible range

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

`targetText`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`diff`

</td>
<td>

[`StringDiff`](../type-aliases/StringDiff.md)

</td>
</tr>
</tbody>
</table>

## Returns

[`StringDiff`](../type-aliases/StringDiff.md) \| `null`
