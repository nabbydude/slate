# Function: withReact()

> **withReact**\<`T` *extends* [`BaseEditor`](../../slate/interfaces/BaseEditor.md)\>(`editor`: `T`, `clipboardFormatKey?`: `string`): `T` & [`ReactEditor`](../interfaces/ReactEditor.md)

Defined in: [packages/slate-react/src/plugin/with-react.ts:35](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/plugin/with-react.ts#L35)

`withReact` adds React and DOM specific behaviors to the editor.

If you are using TypeScript, you must extend Slate's CustomTypes to use
this plugin.

See https://docs.slatejs.org/concepts/11-typescript to learn how.

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

<a id="type-parameter-t"></a> `T` *extends* [`BaseEditor`](../../slate/interfaces/BaseEditor.md)

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

`editor`

</td>
<td>

`T`

</td>
<td>

`undefined`

</td>
<td>

Editor to modify.

</td>
</tr>
<tr>
<td>

`clipboardFormatKey?`

</td>
<td>

`string`

</td>
<td>

`'x-slate-fragment'`

</td>
<td>

The `clipboardFormatKey` option allows you to customize the `DataTransfer` type when Slate data is copied to the clipboard.

This can be useful when a user copies from one Slate editor to a differently configured Slate editor. This could cause nodes to be inserted which are not correctly typed for the receiving editor, corrupting the document. By customizing the `clipboardFormatKey` one can ensure that the raw JSON data isn't copied between editors with different schemas.

</td>
</tr>
</tbody>
</table>

## Returns

`T` & [`ReactEditor`](../interfaces/ReactEditor.md)

## Example

When used with withHistory, withReact should be applied outside. For example:
```typescript
const [editor] = useState(() => withReact(withHistory(createEditor())))
```
