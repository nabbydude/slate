# Interface: PointRef

Defined in: [interfaces/point-ref.ts:10](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point-ref.ts#L10)

`PointRef` objects keep a specific point in a document synced over time as new
operations are applied to the editor. It is created using the
[BaseEditor#pointRef](BaseEditor.md#pointref) method. You can access their property `current` at any time
for the up-to-date `Point` value. When you no longer need to track this
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

[`TextDirection`](../type-aliases/TextDirection.md) \| `null`

</td>
<td>

The direction the `PointRef` will go when a user inserts content at the
current position of the `Point`.

</td>
<td>

[interfaces/point-ref.ts:20](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point-ref.ts#L20)

</td>
</tr>
<tr>
<td>

<a id="current"></a> `current`

</td>
<td>

[`BasePoint`](BasePoint.md) \| `null`

</td>
<td>

The up-to-date `Point` value, or null if the point has been deleted or
[unref](#unref) has been called.

</td>
<td>

[interfaces/point-ref.ts:15](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point-ref.ts#L15)

</td>
</tr>
</tbody>
</table>

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: [interfaces/point-ref.ts:34](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point-ref.ts#L34)

Release the ref by calling `unref()`. This supports `using` declarations in runtimes or build tools with explicit resource management support. Repeated disposal is safe, including after an operation removes the tracked location.

TypeScript consumers need TypeScript 5.2 or later with `esnext.disposable` in their `lib` configuration. If the runtime lacks `Symbol.dispose`, install a polyfill before creating refs to use `using`; the fallback key is `Symbol.for('Symbol.dispose')`. Calling `unref()` continues to work without a polyfill.

#### Returns

`void`

***

### unref()

> **unref**(): [`BasePoint`](BasePoint.md) \| `null`

Defined in: [interfaces/point-ref.ts:28](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/point-ref.ts#L28)

Free the resources used by the PointRef. This should be called when you no
longer need to track the point. Returns the final point value before being
unrefed, or `null` if the point was already invalid.

This removes the ref from `Editor.pointRefs(editor)` and sets `current` to `null`. If an operation removes the node containing the point, the editor releases the ref automatically. Calling `unref()` again returns `null`.

#### Returns

[`BasePoint`](BasePoint.md) \| `null`
