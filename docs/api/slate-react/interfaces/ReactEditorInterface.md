# Interface: ReactEditorInterface

Defined in: [packages/slate-react/src/plugin/react-editor.ts:17](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/plugin/react-editor.ts#L17)

## Extends

- [`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md)

## Methods

### androidPendingDiffs()

> **androidPendingDiffs**(`editor`: [`ReactEditor`](ReactEditor.md)): [`TextDiff`](../../slate-dom/type-aliases/TextDiff.md)[] \| `undefined`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:37

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

[`ReactEditor`](ReactEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextDiff`](../../slate-dom/type-aliases/TextDiff.md)[] \| `undefined`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`androidPendingDiffs`](../../slate-dom/interfaces/DOMEditorInterface.md#androidpendingdiffs)

***

### androidScheduleFlush()

> **androidScheduleFlush**(`editor`: [`ReactEditor`](ReactEditor.md)): `void`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:41

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

[`ReactEditor`](ReactEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`androidScheduleFlush`](../../slate-dom/interfaces/DOMEditorInterface.md#androidscheduleflush)

***

### blur()

> **blur**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `void`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:45

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`blur`](../../slate-dom/interfaces/DOMEditorInterface.md#blur)

***

### deselect()

> **deselect**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `void`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:49

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`deselect`](../../slate-dom/interfaces/DOMEditorInterface.md#deselect)

***

### findDocumentOrShadowRoot()

> **findDocumentOrShadowRoot**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `ShadowRoot` \| `Document`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:53

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`ShadowRoot` \| `Document`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`findDocumentOrShadowRoot`](../../slate-dom/interfaces/DOMEditorInterface.md#finddocumentorshadowroot)

***

### findEventRange()

> **findEventRange**\<`T` *extends* `boolean` = `false`\>(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `event`: `any`, `options?`: \{ `suppressThrow?`: `T`; \}): `T` *extends* `true` ? [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null` : [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:61

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`findEventRange`](../../slate-dom/interfaces/DOMEditorInterface.md#findeventrange)

***

### findKey()

> **findKey**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): [`Key`](../../slate-dom/classes/Key.md)

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:67

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

[`Key`](../../slate-dom/classes/Key.md)

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`findKey`](../../slate-dom/interfaces/DOMEditorInterface.md#findkey)

***

### findPath()

> **findPath**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): [`Path`](../../slate/type-aliases/Path.md)

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:71

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`findPath`](../../slate-dom/interfaces/DOMEditorInterface.md#findpath)

***

### focus()

> **focus**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `options?`: \{ `retries`: `number`; \}): `void`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:77

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`focus`](../../slate-dom/interfaces/DOMEditorInterface.md#focus)

***

### getWindow()

> **getWindow**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `Window`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:83

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`Window`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`getWindow`](../../slate-dom/interfaces/DOMEditorInterface.md#getwindow)

***

### getWord()

> **getWord**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `options?`: \{ `at?`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| [`BasePoint`](../../slate/interfaces/BasePoint.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; \}): \{ `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}; `text`: `string`; \} \| `undefined`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:125

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| [`BasePoint`](../../slate/interfaces/BasePoint.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| [`BasePoint`](../../slate/interfaces/BasePoint.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`getWord`](../../slate-dom/interfaces/DOMEditorInterface.md#getword)

***

### hasDOMNode()

> **hasDOMNode**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `target`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node), `options?`: \{ `editable?`: `boolean`; \}): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:87

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`hasDOMNode`](../../slate-dom/interfaces/DOMEditorInterface.md#hasdomnode)

***

### hasEditableTarget()

> **hasEditableTarget**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `target`: `EventTarget` \| `null`): `target is Node`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:93

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`hasEditableTarget`](../../slate-dom/interfaces/DOMEditorInterface.md#haseditabletarget)

***

### hasRange()

> **hasRange**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:97

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`hasRange`](../../slate-dom/interfaces/DOMEditorInterface.md#hasrange)

***

### hasSelectableTarget()

> **hasSelectableTarget**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `target`: `EventTarget` \| `null`): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:101

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`hasSelectableTarget`](../../slate-dom/interfaces/DOMEditorInterface.md#hasselectabletarget)

***

### hasTarget()

> **hasTarget**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `target`: `EventTarget` \| `null`): `target is Node`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:105

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`hasTarget`](../../slate-dom/interfaces/DOMEditorInterface.md#hastarget)

***

### insertData()

> **insertData**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `void`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:109

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`insertData`](../../slate-dom/interfaces/DOMEditorInterface.md#insertdata)

***

### insertFragmentData()

> **insertFragmentData**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:113

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`insertFragmentData`](../../slate-dom/interfaces/DOMEditorInterface.md#insertfragmentdata)

***

### insertTextData()

> **insertTextData**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:117

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`insertTextData`](../../slate-dom/interfaces/DOMEditorInterface.md#inserttextdata)

***

### isComposing()

> **isComposing**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:121

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`isComposing`](../../slate-dom/interfaces/DOMEditorInterface.md#iscomposing)

***

### isFocused()

> **isFocused**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:132

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`isFocused`](../../slate-dom/interfaces/DOMEditorInterface.md#isfocused)

***

### isMounted()

> **isMounted**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:136

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`isMounted`](../../slate-dom/interfaces/DOMEditorInterface.md#ismounted)

***

### isReadOnly()

> **isReadOnly**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:140

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`isReadOnly`](../../slate-dom/interfaces/DOMEditorInterface.md#isreadonly)

***

### isTargetInsideNonReadonlyVoid()

> **isTargetInsideNonReadonlyVoid**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `target`: `EventTarget` \| `null`): `boolean`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:144

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`isTargetInsideNonReadonlyVoid`](../../slate-dom/interfaces/DOMEditorInterface.md#istargetinsidenonreadonlyvoid)

***

### resolveDOMNode()

> **resolveDOMNode**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): `HTMLElement` \| `null`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:164

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`resolveDOMNode`](../../slate-dom/interfaces/DOMEditorInterface.md#resolvedomnode)

***

### resolveDOMPoint()

> **resolveDOMPoint**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `point`: [`BasePoint`](../../slate/interfaces/BasePoint.md)): [`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md) \| `null`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:152

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

[`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md) \| `null`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`resolveDOMPoint`](../../slate-dom/interfaces/DOMEditorInterface.md#resolvedompoint)

***

### resolveDOMRange()

> **resolveDOMRange**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}): [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| `null`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:156

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`resolveDOMRange`](../../slate-dom/interfaces/DOMEditorInterface.md#resolvedomrange)

***

### resolveEventRange()

> **resolveEventRange**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `event`: `any`): [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:160

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`resolveEventRange`](../../slate-dom/interfaces/DOMEditorInterface.md#resolveeventrange)

***

### resolveSlateNode()

> **resolveSlateNode**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `domNode`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)): [`Node`](../../slate/type-aliases/Node.md) \| `null`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:168

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`resolveSlateNode`](../../slate-dom/interfaces/DOMEditorInterface.md#resolveslatenode)

***

### resolveSlatePoint()

> **resolveSlatePoint**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `domPoint`: [`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md), `options?`: \{ `exactMatch?`: `boolean`; `searchDirection?`: `"forward"` \| `"backward"`; \}): [`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:172

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domPoint`

</td>
<td>

[`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`resolveSlatePoint`](../../slate-dom/interfaces/DOMEditorInterface.md#resolveslatepoint)

***

### resolveSlateRange()

> **resolveSlateRange**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `domRange`: [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange), `options?`: \{ `exactMatch?`: `boolean`; \}): [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:179

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domRange`

</td>
<td>

[`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`resolveSlateRange`](../../slate-dom/interfaces/DOMEditorInterface.md#resolveslaterange)

***

### setFragmentData()

> **setFragmentData**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `data`: [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer), `originEvent?`: `"copy"` \| `"cut"` \| `"drag"`): `void`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:148

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

`"copy"` \| `"cut"` \| `"drag"`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`setFragmentData`](../../slate-dom/interfaces/DOMEditorInterface.md#setfragmentdata)

***

### toDOMNode()

> **toDOMNode**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `node`: [`Node`](../../slate/type-aliases/Node.md)): `HTMLElement`

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:185

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`toDOMNode`](../../slate-dom/interfaces/DOMEditorInterface.md#todomnode)

***

### toDOMPoint()

> **toDOMPoint**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `point`: [`BasePoint`](../../slate/interfaces/BasePoint.md)): [`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md)

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:189

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

[`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md)

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`toDOMPoint`](../../slate-dom/interfaces/DOMEditorInterface.md#todompoint)

***

### toDOMRange()

> **toDOMRange**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `range`: [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}): [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range)

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:198

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`toDOMRange`](../../slate-dom/interfaces/DOMEditorInterface.md#todomrange)

***

### toSlateNode()

> **toSlateNode**(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `domNode`: [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)): [`Node`](../../slate/type-aliases/Node.md)

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:202

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`toSlateNode`](../../slate-dom/interfaces/DOMEditorInterface.md#toslatenode)

***

### toSlatePoint()

> **toSlatePoint**\<`T` *extends* `boolean`\>(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `domPoint`: [`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md), `options`: \{ `exactMatch`: `boolean`; `searchDirection?`: `"forward"` \| `"backward"`; `suppressThrow`: `T`; \}): `T` *extends* `true` ? [`BasePoint`](../../slate/interfaces/BasePoint.md) \| `null` : [`BasePoint`](../../slate/interfaces/BasePoint.md)

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:206

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

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

[`DOMPoint`](../../slate-dom/type-aliases/DOMPoint.md)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`toSlatePoint`](../../slate-dom/interfaces/DOMEditorInterface.md#toslatepoint)

***

### toSlateRange()

> **toSlateRange**\<`T` *extends* `boolean`\>(`editor`: [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md), `domRange`: [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange), `options`: \{ `exactMatch`: `boolean`; `suppressThrow`: `T`; \}): `T` *extends* `true` ? [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \} \| `null` : [`BaseRange`](../../slate/interfaces/BaseRange.md) & \{\[`key`: `string`\]: `unknown`; `onPlaceholderResize?`: (`node`: `HTMLElement` \| `null`) => `void`; `placeholder?`: `string`; \}

Defined in: .yarn/\_\_virtual\_\_/slate-dom-virtual-a0dba740a7/1/packages/slate-dom/dist/plugin/dom-editor.d.ts:218

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

[`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)

</td>
</tr>
<tr>
<td>

`domRange`

</td>
<td>

[`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) \| [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range) \| [`StaticRange`](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange)

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

#### Inherited from

[`DOMEditorInterface`](../../slate-dom/interfaces/DOMEditorInterface.md).[`toSlateRange`](../../slate-dom/interfaces/DOMEditorInterface.md#toslaterange)
