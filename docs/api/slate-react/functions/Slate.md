# Function: Slate()

> **Slate**(`props`: \{ `children`: `ReactNode`; `editor`: [`ReactEditor`](../interfaces/ReactEditor.md); `initialValue?`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]; `onChange?`: (`value`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]) => `void`; `onSelectionChange?`: (`selection`: [`BaseSelection`](../../slate/type-aliases/BaseSelection.md)) => `void`; `onValueChange?`: (`value`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]) => `void`; `value?`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]; \}): `Element`

Defined in: [packages/slate-react/src/components/slate.tsx:96](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/slate.tsx#L96)

A wrapper around the provider to handle `onChange` events, because the editor
is a mutable singleton so it won't ever register as "changed" otherwise.

The `Slate` component must include somewhere in its `children` the [Editable](../variables/Editable.md) component.

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

`props`

</td>
<td>

\{ `children`: `ReactNode`; `editor`: [`ReactEditor`](../interfaces/ReactEditor.md); `initialValue?`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]; `onChange?`: (`value`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]) => `void`; `onSelectionChange?`: (`selection`: [`BaseSelection`](../../slate/type-aliases/BaseSelection.md)) => `void`; `onValueChange?`: (`value`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]) => `void`; `value?`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`props.children`

</td>
<td>

`ReactNode`

</td>
<td>

The `children` which must contain an `Editable` component.

</td>
</tr>
<tr>
<td>

`props.editor`

</td>
<td>

[`ReactEditor`](../interfaces/ReactEditor.md)

</td>
<td>

An instance of `ReactEditor`.

</td>
</tr>
<tr>
<td>

`props.initialValue?`

</td>
<td>

[`Descendant`](../../slate/type-aliases/Descendant.md)[]

</td>
<td>

The initial value of the editor. It is loaded into the editor when `Slate` mounts, and again if a different `editor` is passed.

If you leave it out, the editor's existing `editor.children` are used, which suits editors you create and fill ahead of rendering. Leaving it out when `editor.children` is empty throws, since that is usually a forgotten setup step; pass `initialValue={[]}` if an empty editor is intended.

An editor needs at least one block to hold the cursor, so an empty array is loaded as one empty block, `{ children: [{ text: '' }] }`. The block has no `type`, so if your schema requires one, pass your own empty block instead, for example `[{ type: 'paragraph', children: [{ text: '' }] }]`.

Changing `initialValue` afterwards has no effect. Use `value` for controlled content, apply transforms, or remount `Slate` with a new `key`.

Slate is not a controlled component: changing `initialValue` afterwards has no effect, because directly replacing the value would corrupt state such as the edit history. To change the content, apply transforms to the editor, or remount `Slate` with a new `key`.

Each editor must have its own node objects. To render several editors from the same value, give each one a deep copy, for example with `structuredClone(value)`. Sharing the same objects between editors breaks the lookups Slate uses to map nodes to the DOM.

</td>
</tr>
<tr>
<td>

`props.onChange?`

</td>
<td>

(`value`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]) => `void`

</td>
<td>

An optional callback function which you can use to be notified of changes in the editor's selection and/or value.

</td>
</tr>
<tr>
<td>

`props.onSelectionChange?`

</td>
<td>

(`selection`: [`BaseSelection`](../../slate/type-aliases/BaseSelection.md)) => `void`

</td>
<td>

An optional callback function which you can use to be notified of changes in the editor's selection.

</td>
</tr>
<tr>
<td>

`props.onValueChange?`

</td>
<td>

(`value`: [`Descendant`](../../slate/type-aliases/Descendant.md)[]) => `void`

</td>
<td>

An optional callback function which you can use to be notified of changes in the editor's value.

</td>
</tr>
<tr>
<td>

`props.value?`

</td>
<td>

[`Descendant`](../../slate/type-aliases/Descendant.md)[]

</td>
<td>

Control the document with a value from your app, and store the user's edits with `onValueChange`. Passing both `value` and `initialValue` throws. The first value loads the editor as `initialValue` does. Later values are applied in a layout effect through `editor.setChildren` (`Transforms.setChildren`), so the selection and history stay valid.

It follows the contract of a React controlled input:

- Pass back the value from `onValueChange`. That exact object is recognized and not applied again.
- Any other value is treated as a change from outside the editor and applied, including an older value the editor emitted earlier, so an app can restore a previous version.
- Values you pass in, and their normalization, are not reported through `onValueChange`. `onChange` still fires.

Don't feed responses from a server into `value` while the user can still type. A response to an earlier save describes an older document, and applying it reverts the typing made since. Apply outside changes with `Transforms.setChildren` at the point your app decides they are new content.

Keep unchanged node objects when building a new value. Identity makes unchanged subtrees cheap to recognize and lets moved nodes keep the selection inside them. Deep-equal copies produce no operations but need a content comparison.

To change how values are applied, override `editor.setChildren`. For example, to keep a stream out of undo:

```typescript
const { setChildren } = editor
editor.setChildren = children =>
  HistoryEditor.withoutSaving(editor, () => setChildren(children))
```

Updates wait while the editor is composing or Android has pending input, and only the latest pending value is applied afterwards. Pending updates are dropped when `Slate` unmounts or its editor changes.

To switch to a different document, remount `Slate` with a new `key` instead of passing the new document as `value`. Applying a whole new document records it as an undo step and diffs it against the old one.

</td>
</tr>
</tbody>
</table>

## Returns

`Element`
