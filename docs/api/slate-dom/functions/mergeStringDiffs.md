# Function: mergeStringDiffs()

> **mergeStringDiffs**(`targetText`: `string`, `a`: [`StringDiff`](../type-aliases/StringDiff.md), `b`: [`StringDiff`](../type-aliases/StringDiff.md)): [`StringDiff`](../type-aliases/StringDiff.md) \| `null`

Defined in: [slate-dom/src/utils/diff-text.ts:115](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/diff-text.ts#L115)

Return a string diff that is equivalent to applying b after a spanning the range of
both changes

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

`a`

</td>
<td>

[`StringDiff`](../type-aliases/StringDiff.md)

</td>
</tr>
<tr>
<td>

`b`

</td>
<td>

[`StringDiff`](../type-aliases/StringDiff.md)

</td>
</tr>
</tbody>
</table>

## Returns

[`StringDiff`](../type-aliases/StringDiff.md) \| `null`
