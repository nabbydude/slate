# Function: useSlateSelector()

> **useSlateSelector**\<`T`\>(`selector`: (`editor`: [`ReactEditor`](../interfaces/ReactEditor.md)) => `T`, `equalityFn?`: (`a`: `T` \| `null`, `b`: `T`) => `boolean`, `__namedParameters?`: \{ `deferred?`: `boolean`; \}): `T`

Defined in: [packages/slate-react/src/hooks/use-slate-selector.tsx:48](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/hooks/use-slate-selector.tsx#L48)

Use redux style selectors to prevent re-rendering on every keystroke.

Bear in mind re-rendering can only prevented if the returned value is a value
type or for reference types (e.g. objects and arrays) add a custom equality
function.

If `selector` is memoized using `useCallback`, then it will only be called
when it or the editor state changes. Otherwise, `selector` will be called
every time the component renders.

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

<a id="type-parameter-t"></a> `T`

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
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`selector`

</td>
<td>

(`editor`: [`ReactEditor`](../interfaces/ReactEditor.md)) => `T`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`equalityFn?`

</td>
<td>

(`a`: `T` \| `null`, `b`: `T`) => `boolean`

</td>
<td>

`refEquality`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`__namedParameters?`

</td>
<td>

\{ `deferred?`: `boolean`; \}

</td>
<td>

`{}`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`__namedParameters.deferred?`

</td>
<td>

`boolean`

</td>
<td>

`undefined`

</td>
<td>

If true, defer calling the selector function until after `Editable` has
finished rendering. This ensures that `ReactEditor.findPath` won't return
an outdated path if called inside the selector.

</td>
</tr>
</tbody>
</table>

## Returns

`T`

## Example

```ts
const isSelectionActive = useSlateSelector(editor => Boolean(editor.selection))
```
