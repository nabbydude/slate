# Interface: DOMEditorInterface

Defined in: [slate-dom/src/plugin/dom-editor.ts:92](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L92)

## Extended by

- [`ReactEditorInterface`](../../slate-react/interfaces/ReactEditorInterface.md)

## Methods

### androidPendingDiffs()

> **androidPendingDiffs**(`editor`: [`DOMEditor`](DOMEditor.md)): [`TextDiff`](../type-aliases/TextDiff.md)[] \| `undefined`

Defined in: [slate-dom/src/plugin/dom-editor.ts:96](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L96)

Experimental and android specific: Get pending diffs

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextDiff`](../type-aliases/TextDiff.md)[] \| `undefined`

***

### androidScheduleFlush()

> **androidScheduleFlush**(`editor`: [`DOMEditor`](DOMEditor.md)): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:101](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L101)

Experimental and android specific: Flush all pending diffs and cancel composition at the next possible time.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### blur()

> **blur**(`editor`: [`DOMEditor`](DOMEditor.md)): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:106](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L106)

Blur the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### deselect()

> **deselect**(`editor`: [`DOMEditor`](DOMEditor.md)): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:111](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L111)

Deselect the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### findDocumentOrShadowRoot()

> **findDocumentOrShadowRoot**(`editor`: [`DOMEditor`](DOMEditor.md)): `Document` \| `ShadowRoot`

Defined in: [slate-dom/src/plugin/dom-editor.ts:116](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L116)

Find the DOM node that implements DocumentOrShadowRoot for the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`Document` \| `ShadowRoot`

***

### findEventRange()

> **findEventRange**\<`T` *extends* `boolean` = `false`\>(`editor`: [`DOMEditor`](DOMEditor.md), `event`: `any`, `options?`: \{ `suppressThrow?`: `T`; \}): `T` *extends* `true` ? [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null` : [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

Defined in: [slate-dom/src/plugin/dom-editor.ts:125](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L125)

Get the target range from a DOM `event`.

The range is resolved from the event's coordinates, which can point
outside of the editor even when the event's target lies inside it. With
`suppressThrow`, `null` is returned instead of throwing in that case.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t"></a> `T` *extends* `boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `suppressThrow?`: `T`; \}

</td>
</tr>
<tr>
<td>

`options.suppressThrow?`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T` *extends* `true` ? [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null` : [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

***

### findKey()

> **findKey**(`editor`: [`DOMEditor`](DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): [`Key`](../classes/Key.md)

Defined in: [slate-dom/src/plugin/dom-editor.ts:134](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L134)

Find a key for a Slate node.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../../slate/type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Key`](../classes/Key.md)

***

### findPath()

> **findPath**(`editor`: [`DOMEditor`](DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): [`Path`](../../slate/type-aliases/Path.md)

Defined in: [slate-dom/src/plugin/dom-editor.ts:139](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L139)

Find the path of Slate node.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../../slate/type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Path`](../../slate/type-aliases/Path.md)

***

### focus()

> **focus**(`editor`: [`DOMEditor`](DOMEditor.md), `options?`: \{ `retries`: `number`; \}): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:146](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L146)

Focus the editor.

In tests that run in jsdom, use `DOMEditor.focus(editor)` instead of calling `focus()` on the editable element. `Editable` doesn't treat a native focus event in jsdom as a focus of the editor, partly because jsdom doesn't implement `isContentEditable`, so `DOMEditor.isFocused` and `useFocused` stay `false`. `DOMEditor.focus` sets the focused state itself.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `retries`: `number`; \}

</td>
</tr>
<tr>
<td>

`options.retries`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### getWindow()

> **getWindow**(`editor`: [`DOMEditor`](DOMEditor.md)): `Window`

Defined in: [slate-dom/src/plugin/dom-editor.ts:151](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L151)

Return the host window of the current editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`Window`

***

### getWord()

> **getWord**(`editor`: [`DOMEditor`](DOMEditor.md), `options?`: \{ `at?`: [`BasePoint`](../../slate/interfaces/BasePoint.md) \| [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}; `isWordCharacter?`: (`character`: `string`) => `boolean`; \}): \{ `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}; `text`: `string`; \} \| `undefined`

Defined in: [slate-dom/src/plugin/dom-editor.ts:208](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L208)

Like [EditorInterface#word](../../slate/interfaces/EditorInterface.md#word), but while an input method is composing it reads the composing text from the DOM and uses the DOM caret when `at` isn't given. `text` is the word as currently shown. During a composition, `range` counts the composing characters, so it only matches the editor's value once the composition ends.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`BasePoint`](../../slate/interfaces/BasePoint.md) \| [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}; `isWordCharacter?`: (`character`: `string`) => `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`BasePoint`](../../slate/interfaces/BasePoint.md) \| [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

</td>
</tr>
<tr>
<td>

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

\{ `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}; `text`: `string`; \} \| `undefined`

***

### hasDOMNode()

> **hasDOMNode**(`editor`: [`DOMEditor`](DOMEditor.md), `target`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node), `options?`: \{ `editable?`: `boolean`; \}): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:156](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L156)

Check if a DOM node is within the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`target`

</td>
<td>

[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `editable?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.editable?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### hasEditableTarget()

> **hasEditableTarget**(`editor`: [`DOMEditor`](DOMEditor.md), `target`: `EventTarget` \| `null`): `target is Node`

Defined in: [slate-dom/src/plugin/dom-editor.ts:165](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L165)

Check if the target is editable and in the editor.

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

[`DOMEditor`](DOMEditor.md)

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

### hasRange()

> **hasRange**(`editor`: [`DOMEditor`](DOMEditor.md), `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:173](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L173)

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`range`

</td>
<td>

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### hasSelectableTarget()

> **hasSelectableTarget**(`editor`: [`DOMEditor`](DOMEditor.md), `target`: `EventTarget` \| `null`): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:178](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L178)

Check if the target can be selectable

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

[`DOMEditor`](DOMEditor.md)

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

> **hasTarget**(`editor`: [`DOMEditor`](DOMEditor.md), `target`: `EventTarget` \| `null`): `target is Node`

Defined in: [slate-dom/src/plugin/dom-editor.ts:183](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L183)

Check if the target is in the editor.

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

[`DOMEditor`](DOMEditor.md)

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

> **insertData**(`editor`: [`DOMEditor`](DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:188](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L188)

Insert data from a `DataTransfer` into the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
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

> **insertFragmentData**(`editor`: [`DOMEditor`](DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:193](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L193)

Insert fragment data from a `DataTransfer` into the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
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

> **insertTextData**(`editor`: [`DOMEditor`](DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:198](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L198)

Insert text data from a `DataTransfer` into the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
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

### isComposing()

> **isComposing**(`editor`: [`DOMEditor`](DOMEditor.md)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:203](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L203)

Check if the user is currently composing inside the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### isFocused()

> **isFocused**(`editor`: [`DOMEditor`](DOMEditor.md)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:216](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L216)

Check if the editor is focused.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### isMounted()

> **isMounted**(`editor`: [`DOMEditor`](DOMEditor.md)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:221](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L221)

Check if the editor is mounted, meaning it is rendered and has a DOM element. Methods that resolve DOM nodes, such as `toDOMNode`, throw for an editor that is not mounted.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### isReadOnly()

> **isReadOnly**(`editor`: [`DOMEditor`](DOMEditor.md)): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:226](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L226)

Check if the editor is in read-only mode.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### isTargetInsideNonReadonlyVoid()

> **isTargetInsideNonReadonlyVoid**(`editor`: [`DOMEditor`](DOMEditor.md), `target`: `EventTarget` \| `null`): `boolean`

Defined in: [slate-dom/src/plugin/dom-editor.ts:231](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L231)

Check if the target is inside void and in an non-readonly editor.

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

[`DOMEditor`](DOMEditor.md)

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

### resolveDOMNode()

> **resolveDOMNode**(`editor`: [`DOMEditor`](DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): `HTMLElement` \| `null`

Defined in: [slate-dom/src/plugin/dom-editor.ts:263](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L263)

Like `toDOMNode`, but returns `null` when the node isn't rendered.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../../slate/type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`HTMLElement` \| `null`

***

### resolveDOMPoint()

> **resolveDOMPoint**(`editor`: [`DOMEditor`](DOMEditor.md), `point`: [`BasePoint`](../../slate/interfaces/BasePoint.md)): [`DOMPoint`](../type-aliases/DOMPoint.md) \| `null`

Defined in: [slate-dom/src/plugin/dom-editor.ts:248](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L248)

Like `toDOMPoint`, but returns `null` instead of throwing. A point can be missing for ordinary reasons, for example during a React commit, before `Editable` mounts, or after `editor.children` was replaced, so a miss isn't reported.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`point`

</td>
<td>

[`BasePoint`](../../slate/interfaces/BasePoint.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`DOMPoint`](../type-aliases/DOMPoint.md) \| `null`

***

### resolveDOMRange()

> **resolveDOMRange**(`editor`: [`DOMEditor`](DOMEditor.md), `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}): [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| `null`

Defined in: [slate-dom/src/plugin/dom-editor.ts:253](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L253)

Like `toDOMRange`, but returns `null` instead of throwing, including when either point is missing or the editor's window isn't known yet.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`range`

</td>
<td>

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

</td>
</tr>
</tbody>
</table>

#### Returns

[`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| `null`

***

### resolveEventRange()

> **resolveEventRange**(`editor`: [`DOMEditor`](DOMEditor.md), `event`: `any`): [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`

Defined in: [slate-dom/src/plugin/dom-editor.ts:258](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L258)

Like `findEventRange`, but returns `null` when the event doesn't map to a range in the editor.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`

***

### resolveSlateNode()

> **resolveSlateNode**(`editor`: [`DOMEditor`](DOMEditor.md), `domNode`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)): [`Node`](../../slate/type-aliases/Node.md) \| `null`

Defined in: [slate-dom/src/plugin/dom-editor.ts:268](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L268)

Like `toSlateNode`, but returns `null` when the DOM node isn't inside a Slate node.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domNode`

</td>
<td>

[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Node`](../../slate/type-aliases/Node.md) \| `null`

***

### resolveSlatePoint()

> **resolveSlatePoint**(`editor`: [`DOMEditor`](DOMEditor.md), `domPoint`: [`DOMPoint`](../type-aliases/DOMPoint.md), `options?`: \{ `exactMatch?`: `boolean`; `searchDirection?`: `"forward"` \| `"backward"`; \}): [`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null`

Defined in: [slate-dom/src/plugin/dom-editor.ts:273](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L273)

Like `toSlatePoint`, but returns `null` instead of throwing, including in the cases where `suppressThrow: true` still throws, such as before `Editable` mounts. `exactMatch` defaults to `false`.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domPoint`

</td>
<td>

[`DOMPoint`](../type-aliases/DOMPoint.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `exactMatch?`: `boolean`; `searchDirection?`: `"forward"` \| `"backward"`; \}

</td>
</tr>
<tr>
<td>

`options.exactMatch?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.searchDirection?`

</td>
<td>

`"forward"` \| `"backward"`

</td>
</tr>
</tbody>
</table>

#### Returns

[`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null`

***

### resolveSlateRange()

> **resolveSlateRange**(`editor`: [`DOMEditor`](DOMEditor.md), `domRange`: [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange), `options?`: \{ `exactMatch?`: `boolean`; \}): [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`

Defined in: [slate-dom/src/plugin/dom-editor.ts:285](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L285)

Like `toSlateRange`, but returns `null` instead of throwing, including for a selection with no range. `exactMatch` defaults to `false`.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domRange`

</td>
<td>

[`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `exactMatch?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.exactMatch?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`

***

### setFragmentData()

> **setFragmentData**(`editor`: [`DOMEditor`](DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer), `originEvent?`: `"drag"` \| `"copy"` \| `"cut"`): `void`

Defined in: [slate-dom/src/plugin/dom-editor.ts:239](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L239)

Sets data from the currently selected fragment on a `DataTransfer`.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
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

***

### toDOMNode()

> **toDOMNode**(`editor`: [`DOMEditor`](DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): `HTMLElement`

Defined in: [slate-dom/src/plugin/dom-editor.ts:294](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L294)

Find the native DOM element from a Slate node.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`node`

</td>
<td>

[`Node`](../../slate/type-aliases/Node.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`HTMLElement`

***

### toDOMPoint()

> **toDOMPoint**(`editor`: [`DOMEditor`](DOMEditor.md), `point`: [`BasePoint`](../../slate/interfaces/BasePoint.md)): [`DOMPoint`](../type-aliases/DOMPoint.md)

Defined in: [slate-dom/src/plugin/dom-editor.ts:299](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L299)

Find a native DOM selection point from a Slate point.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`point`

</td>
<td>

[`BasePoint`](../../slate/interfaces/BasePoint.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`DOMPoint`](../type-aliases/DOMPoint.md)

***

### toDOMRange()

> **toDOMRange**(`editor`: [`DOMEditor`](DOMEditor.md), `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}): [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range)

Defined in: [slate-dom/src/plugin/dom-editor.ts:309](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L309)

Find a native DOM range from a Slate `range`.

Notice: the returned range will always be ordinal regardless of the direction of Slate `range` due to DOM API limit.

there is no way to create a reverse DOM Range using Range.setStart/setEnd
according to https://dom.spec.whatwg.org/#concept-range-bp-set.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`range`

</td>
<td>

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

</td>
</tr>
</tbody>
</table>

#### Returns

[`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range)

***

### toSlateNode()

> **toSlateNode**(`editor`: [`DOMEditor`](DOMEditor.md), `domNode`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)): [`Node`](../../slate/type-aliases/Node.md)

Defined in: [slate-dom/src/plugin/dom-editor.ts:314](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L314)

Find a Slate node from a native DOM `element`.

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domNode`

</td>
<td>

[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Node`](../../slate/type-aliases/Node.md)

***

### toSlatePoint()

> **toSlatePoint**\<`T` *extends* `boolean`\>(`editor`: [`DOMEditor`](DOMEditor.md), `domPoint`: [`DOMPoint`](../type-aliases/DOMPoint.md), `options`: \{ `exactMatch`: `boolean`; `searchDirection?`: `"forward"` \| `"backward"`; `suppressThrow`: `T`; \}): `T` *extends* `true` ? [`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null` : [`BasePoint`](../../slate/interfaces/BasePoint.md)

Defined in: [slate-dom/src/plugin/dom-editor.ts:319](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L319)

Find a Slate point from a DOM selection's `domNode` and `domOffset`.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-1"></a> `T` *extends* `boolean`

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`editor`

</td>
<td>

[`DOMEditor`](DOMEditor.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`domPoint`

</td>
<td>

[`DOMPoint`](../type-aliases/DOMPoint.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

\{ `exactMatch`: `boolean`; `searchDirection?`: `"forward"` \| `"backward"`; `suppressThrow`: `T`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.exactMatch`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.searchDirection?`

</td>
<td>

`"forward"` \| `"backward"`

</td>
<td>

The direction to search for Slate leaf nodes if `domPoint` is
non-editable and non-void.

</td>
</tr>
<tr>
<td>

`options.suppressThrow`

</td>
<td>

`T`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`T` *extends* `true` ? [`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null` : [`BasePoint`](../../slate/interfaces/BasePoint.md)

***

### toSlateRange()

> **toSlateRange**\<`T` *extends* `boolean`\>(`editor`: [`DOMEditor`](DOMEditor.md), `domRange`: [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange), `options`: \{ `exactMatch`: `boolean`; `suppressThrow`: `T`; \}): `T` *extends* `true` ? [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null` : [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

Defined in: [slate-dom/src/plugin/dom-editor.ts:336](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/plugin/dom-editor.ts#L336)

Find a Slate range from a DOM range or selection.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="type-parameter-t-2"></a> `T` *extends* `boolean`

</td>
</tr>
</tbody>
</table>

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

[`DOMEditor`](DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domRange`

</td>
<td>

[`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange)

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

\{ `exactMatch`: `boolean`; `suppressThrow`: `T`; \}

</td>
</tr>
<tr>
<td>

`options.exactMatch`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.suppressThrow`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T` *extends* `true` ? [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null` : [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}
