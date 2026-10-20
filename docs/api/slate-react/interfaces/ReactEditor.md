# Interface: ReactEditor

Defined in: [packages/slate-react/src/plugin/react-editor.ts:8](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/plugin/react-editor.ts#L8)

A React and DOM-specific version of the `Editor` interface.

## Extends

- [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

## Methods

### getChunkSize()

> **getChunkSize**(`node`: [`Ancestor`](../../slate/type-aliases/Ancestor.md)): `number` \| `null`

Defined in: [packages/slate-react/src/plugin/react-editor.ts:14](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/plugin/react-editor.ts#L14)

Determines the chunk size used by the children chunking optimization. If
null is returned (which is the default), the chunking optimization is
disabled.

#### Parameters

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

`node`

</td>
<td>

[`Ancestor`](../../slate/type-aliases/Ancestor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`number` \| `null`
