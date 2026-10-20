# Interface: DOMEditor

Defined in: [slate-dom/src/plugin/dom-editor.ts:56](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L56)

A DOM-specific version of the `Editor` interface.

## Extends

- [`BaseEditor`](../../slate/interfaces/BaseEditor.md)

## Extended by

- [`ReactEditor`](../../slate-react/interfaces/ReactEditor.md)

## Methods

### hasEditableTarget()

> **hasEditableTarget**(`editor`: `DOMEditor`, `target`: `EventTarget` \| `null`): `target is Node`

Defined in: [slate-dom/src/plugin/dom-editor.ts:57](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L57)

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

`editor`

</td>
<td>

`DOMEditor`

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

`EventTarget` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`target is Node`

***

### hasSelectableTarget()

> **hasSelectableTarget**(`editor`: `DOMEditor`, `target`: `EventTarget` \| `null`): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:61](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L61)

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

`editor`

</td>
<td>

`DOMEditor`

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

`EventTarget` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### hasTarget()

> **hasTarget**(`editor`: `DOMEditor`, `target`: `EventTarget` \| `null`): `target is Node`

Defined in: [slate-dom/src/plugin/dom-editor.ts:62](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L62)

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

`editor`

</td>
<td>

`DOMEditor`

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

`EventTarget` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`target is Node`

***

### insertData()

> **insertData**(`data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:63](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L63)

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

`data`

</td>
<td>

[`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### insertFragmentData()

> **insertFragmentData**(`data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:64](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L64)

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

`data`

</td>
<td>

[`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### insertTextData()

> **insertTextData**(`data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:65](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L65)

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

`data`

</td>
<td>

[`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### isTargetInsideNonReadonlyVoid()

> **isTargetInsideNonReadonlyVoid**(`editor`: `DOMEditor`, `target`: `EventTarget` \| `null`): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:66](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L66)

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

`editor`

</td>
<td>

`DOMEditor`

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

`EventTarget` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### onDOMError()

> **onDOMError**(`error`: `unknown`): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:84](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L84)

Where DOM mapping errors can be reported without throwing. Slate itself doesn't report anything here at the moment: the `resolve` lookups return `null` quietly, since a miss is often ordinary. By default it hands the error to the browser's `reportError`, so it shows in the console and reaches `window.onerror`. Override it to send errors to your own logging:

```javascript
const { onDOMError } = editor
editor.onDOMError = error => {
  logger.warn(error)
  onDOMError(error)
}
```

The `toDOM*` and `toSlate*` lookups still throw; use the `resolve` versions to get `null` instead.

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

`error`

</td>
<td>

`unknown`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### setFragmentData()

> **setFragmentData**(`data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer), `originEvent?`: `"drag"` \| `"copy"` \| `"cut"`): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:86](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L86)

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

`data`

</td>
<td>

[`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)

</td>
</tr>
<tr>
<td>

`originEvent?`

</td>
<td>

`"drag"` \| `"copy"` \| `"cut"`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`
