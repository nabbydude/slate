# Function: withHistory()

> **withHistory**\<`T` *extends* [`BaseEditor`](../../slate/interfaces/BaseEditor.md)\>(`editor`: `T`): `T` & [`HistoryEditor`](../interfaces/HistoryEditor.md)

Defined in: [slate-history/src/with-history.ts:20](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-history/src/with-history.ts#L20)

Adds the `HistoryEditor` interface to an `Editor` instance and keeps track of each operation applied to it, so they can be undone and redone.

If you are using TypeScript, you must extend Slate's CustomTypes to use this plugin. See https://docs.slatejs.org/concepts/11-typescript to learn how.

The plugin also overrides `editor.setChildren`. Each `Transforms.setChildren` call starts its own undo batch, including normalization, and does not merge with typing before or after the external update. A deep-equal update creates no history entry.

When used with `withReact`, `withHistory` should be applied inside, see example below.

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
</tr>
</tbody>
</table>

## Returns

`T` & [`HistoryEditor`](../interfaces/HistoryEditor.md)

## Example

```javascript
const [editor] = useState(() => withReact(withHistory(createEditor())))
```
