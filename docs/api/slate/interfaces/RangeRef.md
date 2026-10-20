# Interface: RangeRef

Defined in: [interfaces/range-ref.ts:10](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range-ref.ts#L10)

`RangeRef` objects keep a specific range in a document synced over time as new
operations are applied to the editor. It is created using the
[BaseEditor#rangeRef](BaseEditor.md#rangeref) method. You can access their property `current` at any time
for the up-to-date `Range` value. When you no longer need to track this
location, call `unref()` to free the resources.

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

<a id="affinity"></a> `affinity`

</td>
<td>

[`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`

</td>
<td>

the direction the `RangeRef` will go when a user inserts content at the
edges of the `Range`. `inward` means that the `Range` tends to stay the
same size when content is inserted at its edges, and `outward` means that
the `Range` tends to grow when content is inserted at its edges.

</td>
<td>

[interfaces/range-ref.ts:23](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range-ref.ts#L23)

</td>
</tr>
<tr>
<td>

<a id="current"></a> `current`

</td>
<td>

[`BaseRange`](BaseRange.md) \| `null`

</td>
<td>

The up-to-date `Point` value, or null if the point has been deleted or
[unref](#unref) has been called.

</td>
<td>

[interfaces/range-ref.ts:15](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range-ref.ts#L15)

</td>
</tr>
</tbody>
</table>

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: [interfaces/range-ref.ts:37](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range-ref.ts#L37)

Release the ref by calling `unref()`. This supports `using` declarations in runtimes or build tools with explicit resource management support. Repeated disposal is safe, including after an operation removes the tracked location.

TypeScript consumers need TypeScript 5.2 or later with `esnext.disposable` in their `lib` configuration. If the runtime lacks `Symbol.dispose`, install a polyfill before creating refs to use `using`; the fallback key is `Symbol.for('Symbol.dispose')`. Calling `unref()` continues to work without a polyfill.

#### Returns

`void`

***

### unref()

> **unref**(): [`BaseRange`](BaseRange.md) \| `null`

Defined in: [interfaces/range-ref.ts:31](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/range-ref.ts#L31)

Free the resources used by the RangeRef. This should be called when you no
longer need to track the range. Returns the final range value before being
unrefed, or `null` if the range was already invalid.

This removes the ref from `Editor.pointRefs(editor)` and sets `current` to `null`. If an operation removes the node containing the point, the editor releases the ref automatically. Calling `unref()` again returns `null`.

#### Returns

[`BaseRange`](BaseRange.md) \| `null`
