# Type Alias: Scrubber

> **Scrubber** = (`key`: `string`, `value`: `unknown`) => `unknown`

Defined in: [interfaces/scrubber.ts:9](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/scrubber.ts#L9)

Used by [ScrubberInterface](../interfaces/ScrubberInterface.md) to scrub sensitive data from objects before they are stringified and logged.
it is run for each key of each object recursively. The top level object has a key of `""`.

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
<td>

The key of the current property being scrubbed.

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`unknown`

</td>
<td>

The value of the current property being scrubbed.

</td>
</tr>
</tbody>
</table>

## Returns

`unknown`

The scrubbed value. If the value is an object, it will be recursively scrubbed.
