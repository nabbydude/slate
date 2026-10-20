# Interface: BaseEditor

Defined in: [interfaces/editor.ts:48](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L48)

The `Editor` interface stores all the state of a Slate editor. It is extended
by plugins that wish to add their own helpers and implement new behaviors.

## Extended by

- [`DOMEditor`](../../slate-dom/interfaces/DOMEditor.md)
- [`HistoryEditor`](../../slate-history/interfaces/HistoryEditor.md)

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="children"></a> `children`

</td>
<td>

[`Descendant`](../type-aliases/Descendant.md)[]

</td>
<td>

[interfaces/editor.ts:50](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L50)

</td>
</tr>
<tr>
<td>

<a id="marks"></a> `marks`

</td>
<td>

[`EditorMarks`](../type-aliases/EditorMarks.md) \| `null`

</td>
<td>

[interfaces/editor.ts:53](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L53)

</td>
</tr>
<tr>
<td>

<a id="operations"></a> `operations`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)[]

</td>
<td>

[interfaces/editor.ts:52](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L52)

</td>
</tr>
<tr>
<td>

<a id="selection"></a> `selection`

</td>
<td>

[`BaseSelection`](../type-aliases/BaseSelection.md)

</td>
<td>

[interfaces/editor.ts:51](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L51)

</td>
</tr>
</tbody>
</table>

## Methods

### above()

> **above**\<`T` *extends* [`Ancestor`](../type-aliases/Ancestor.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

Defined in: [interfaces/editor.ts:469](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L469)

Get the ancestor above a location in the document.

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

<a id="type-parameter-t"></a> `T` *extends* [`Ancestor`](../type-aliases/Ancestor.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorAboveOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

#### See

[EditorInterface#above](EditorInterface.md#above) - A static version of this method.

***

### addMark()

> **addMark**(`key`: `string`, `value`: `any`): `void`

Defined in: [interfaces/editor.ts:165](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L165)

Add a custom property to the leaf text nodes within non-void nodes or void
nodes that `editor.markableVoid()` allows in the current selection. If the
selection is currently collapsed, the marks will be added to the
`editor.marks` property instead, and applied when text is inserted next.

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

`key`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#addMark](EditorInterface.md#addmark) - A static version of this method.

***

### after()

> **after**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}): [`BasePoint`](BasePoint.md) \| `undefined`

Defined in: [interfaces/editor.ts:478](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L478)

Get the point after a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorAfterOptions`

</td>
</tr>
<tr>
<td>

`options.distance?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

</td>
<td>

Customizes word boundaries when `unit` is `word`. The callback receives a whole grapheme, including a combined character or emoji. A custom callback replaces the default punctuation rules and language segmentation; it is ignored for other units.

**Example**

```ts
`isWordCharacter: character => /[\w-]/.test(character)` treats `foo-bar_baz` as one word.
```

</td>
</tr>
<tr>
<td>

`options.unit?`

</td>
<td>

[`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`BasePoint`](BasePoint.md) \| `undefined`

#### See

[EditorInterface#after](EditorInterface.md#after) - A static version of this method.

***

### apply()

> **apply**(`operation`: [`BaseOperation`](../type-aliases/BaseOperation.md)): `void`

Defined in: [interfaces/editor.ts:58](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L58)

Apply an operation in the editor.

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

`operation`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### before()

> **before**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}): [`BasePoint`](BasePoint.md) \| `undefined`

Defined in: [interfaces/editor.ts:485](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L485)

Get the point before a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `distance?`: `number`; `isWordCharacter?`: (`character`: `string`) => `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorBeforeOptions`

</td>
</tr>
<tr>
<td>

`options.distance?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

</td>
<td>

Customizes word boundaries when `unit` is `word`. The callback receives a whole grapheme, including a combined character or emoji. A custom callback replaces the default punctuation rules and language segmentation; it is ignored for other units.

**Example**

```ts
`isWordCharacter: character => /[\w-]/.test(character)` treats `foo-bar_baz` as one word.
```

</td>
</tr>
<tr>
<td>

`options.unit?`

</td>
<td>

[`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`BasePoint`](BasePoint.md) \| `undefined`

#### See

[EditorInterface#before](EditorInterface.md#before) - A static version of this method.

***

### collapse()

> **collapse**(`options?`: \{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}): `void`

Defined in: [interfaces/editor.ts:172](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L172)

Collapse the selection.

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

`options?`

</td>
<td>

\{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}

</td>
<td>

Type also exported as `SelectionCollapseOptions`

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`SelectionEdge`](../type-aliases/SelectionEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#collapse](TransformsInterface.md#collapse) - A static version of this method.

***

### delete()

> **delete**(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `distance?`: `number`; `hanging?`: `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:179](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L179)

Delete content in the editor.

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `distance?`: `number`; `hanging?`: `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnit`](../type-aliases/TextUnit.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `TextDeleteOptions`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

The location to delete content from. Defaults to the current selection. If there is no selection, nothing is deleted.

</td>
</tr>
<tr>
<td>

`options.distance?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.hanging?`

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

`options.reverse?`

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

`options.unit?`

</td>
<td>

[`TextUnit`](../type-aliases/TextUnit.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#delete](TransformsInterface.md#delete) - A static version of this method.

***

### deleteBackward()

> **deleteBackward**(`unit`: [`TextUnit`](../type-aliases/TextUnit.md)): `void`

Defined in: [interfaces/editor.ts:185](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L185)

Delete content in the editor backward from the current selection.

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

`unit`

</td>
<td>

[`TextUnit`](../type-aliases/TextUnit.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#deleteBackward](EditorInterface.md#deletebackward) - A static version of this method.

***

### deleteForward()

> **deleteForward**(`unit`: [`TextUnit`](../type-aliases/TextUnit.md)): `void`

Defined in: [interfaces/editor.ts:191](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L191)

Delete content in the editor forward from the current selection.

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

`unit`

</td>
<td>

[`TextUnit`](../type-aliases/TextUnit.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#deleteForward](EditorInterface.md#deleteforward) - A static version of this method.

***

### deleteFragment()

> **deleteFragment**(`options?`: \{ `direction?`: [`TextDirection`](../type-aliases/TextDirection.md); \}): `void`

Defined in: [interfaces/editor.ts:198](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L198)

Delete the content of the current selection.

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

`options?`

</td>
<td>

\{ `direction?`: [`TextDirection`](../type-aliases/TextDirection.md); \}

</td>
<td>

Type also exported as `EditorFragmentDeletionOptions`

</td>
</tr>
<tr>
<td>

`options.direction?`

</td>
<td>

[`TextDirection`](../type-aliases/TextDirection.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#deleteFragment](EditorInterface.md#deletefragment) - A static version of this method.

***

### deselect()

> **deselect**(): `void`

Defined in: [interfaces/editor.ts:204](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L204)

Unset the selection.

#### Returns

`void`

#### See

[TransformsInterface#deselect](TransformsInterface.md#deselect) - A static version of this method.

***

### edges()

> **edges**(`at`: [`Location`](../type-aliases/Location.md)): \[[`BasePoint`](BasePoint.md), [`BasePoint`](BasePoint.md)\]

Defined in: [interfaces/editor.ts:491](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L491)

Get the start and end points of a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

\[[`BasePoint`](BasePoint.md), [`BasePoint`](BasePoint.md)\]

#### See

[EditorInterface#edges](EditorInterface.md#edges) - A static version of this method.

***

### elementReadOnly()

> **elementReadOnly**(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

Defined in: [interfaces/editor.ts:498](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L498)

Match a read-only element in the current branch of the editor.

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorElementReadOnlyOptions`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

#### See

[EditorInterface#elementReadOnly](EditorInterface.md#elementreadonly) - A static version of this method.

***

### end()

> **end**(`at`: [`Location`](../type-aliases/Location.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:506](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L506)

Get the end point of a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`BasePoint`](BasePoint.md)

#### See

[EditorInterface#end](EditorInterface.md#end) - A static version of this method.

***

### first()

> **first**(`at`: [`Location`](../type-aliases/Location.md)): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/editor.ts:512](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L512)

Get the first node at a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

#### See

[EditorInterface#first](EditorInterface.md#first) - A static version of this method.

***

### fragment()

> **fragment**(`at`: [`Location`](../type-aliases/Location.md)): [`Descendant`](../type-aliases/Descendant.md)[]

Defined in: [interfaces/editor.ts:518](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L518)

Get the fragment at a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Descendant`](../type-aliases/Descendant.md)[]

#### See

[EditorInterface#fragment](EditorInterface.md#fragment) - A static version of this method.

***

### getDirtyPaths()

> **getDirtyPaths**(`operation`: [`BaseOperation`](../type-aliases/BaseOperation.md)): [`Path`](../type-aliases/Path.md)[]

Defined in: [interfaces/editor.ts:60](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L60)

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

`operation`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Path`](../type-aliases/Path.md)[]

***

### getFragment()

> **getFragment**(): [`Descendant`](../type-aliases/Descendant.md)[]

Defined in: [interfaces/editor.ts:63](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L63)

Returns the fragment at the current selection. Used when cutting or copying, as an example, to get the fragment at the current selection.

#### Returns

[`Descendant`](../type-aliases/Descendant.md)[]

***

### getMarks()

> **getMarks**(): `Omit`\<[`BaseText`](BaseText.md), `"text"`\> \| `null`

Defined in: [interfaces/editor.ts:526](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L526)

Get the marks that would be added to text at the current selection.

If `editor.marks` is set (marks toggled with a collapsed selection), those are returned. With an expanded selection, it returns the marks of the first text node in the selection, skipping a node the selection only touches at its end, so it describes what typing over the selection would produce rather than marks shared by the whole selection. To check whether a mark applies to all of the selected text, iterate `Editor.nodes(editor, { match: Text.isText })` and compare each node.

#### Returns

`Omit`\<[`BaseText`](BaseText.md), `"text"`\> \| `null`

#### See

[EditorInterface#marks](EditorInterface.md#marks) - A static version of this method.

***

### getSplitProperties()

> **getSplitProperties**(`node`: [`BaseElement`](BaseElement.md) \| [`BaseText`](BaseText.md), `path`: [`Path`](../type-aliases/Path.md)): `Partial`\<[`Node`](../type-aliases/Node.md)\>

Defined in: [interfaces/editor.ts:70](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L70)

Return the properties for the new right-hand node when `Transforms.splitNodes` splits `node` at its current `path`. The default is `Node.extractProps(node)`, which copies every property except `children` and `text`. The original left-hand node keeps its properties.

Override this method to drop or replace properties such as element IDs. Return the full set of properties to keep, including text marks when splitting a text node; omit `children` and `text`. Commands that use `splitNodes`, including `insertBreak`, `insertFragment` and `setNodes` with `split: true`, use this method too, as does `wrapNodes` when it splits an inline element. See [Node IDs](/concepts/02-nodes.md#node-ids) for a plugin example.

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

[`BaseElement`](BaseElement.md) \| [`BaseText`](BaseText.md)

</td>
</tr>
<tr>
<td>

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`Partial`\<[`Node`](../type-aliases/Node.md)\>

***

### hasBlocks()

> **hasBlocks**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:532](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L532)

Check if a node has block children.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#hasBlocks](EditorInterface.md#hasblocks) - A static version of this method.

***

### hasInlines()

> **hasInlines**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:538](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L538)

Check if a node has inline and text children.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#hasInlines](EditorInterface.md#hasinlines) - A static version of this method.

***

### hasPath()

> **hasPath**(`path`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/editor.ts:543](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L543)

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

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#hasPath](EditorInterface.md#haspath) - A static version of this method.

***

### hasRange()

> **hasRange**(`range`: [`BaseRange`](BaseRange.md)): `boolean`

Defined in: [interfaces/editor.ts:545](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L545)

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### hasTexts()

> **hasTexts**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:551](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L551)

Check if a node has text children.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#hasTexts](EditorInterface.md#hastexts) - A static version of this method.

***

### inlineEdgeAffinity()

> **inlineEdgeAffinity**(`element`: [`BaseElement`](BaseElement.md), `edge`: `"start"` \| `"end"`): `"inside"` \| `"outside"` \| `null`

Defined in: [interfaces/editor.ts:102](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L102)

Choose whether insertion at an inline edge belongs inside the inline or in the adjacent text outside it. The rule also applies when the caret names that adjacent text. Defaults to `null`, retaining the current point. An `'inside'` rule never moves a caret into a void, read-only, or non-selectable inline.

At shared boundaries, the outermost inline edge takes precedence. Between adjacent inlines separated by empty text, rules are considered from left to right; the first non-null rule wins. Empty non-void inlines use their start edge, and an outside rule uses the text before the empty inline. These tie rules keep repeated resolution stable.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
<tr>
<td>

`edge`

</td>
<td>

`"start"` \| `"end"`

</td>
</tr>
</tbody>
</table>

#### Returns

`"inside"` \| `"outside"` \| `null`

***

### insertBreak()

> **insertBreak**(): `void`

Defined in: [interfaces/editor.ts:211](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L211)

Insert a block break at the current selection. If the selection is
currently expanded, delete it first.

#### Returns

`void`

#### See

[EditorInterface#insertBreak](EditorInterface.md#insertbreak) - A static version of this method.

***

### insertFragment()

> **insertFragment**(`fragment`: [`Node`](../type-aliases/Node.md)[], `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `filter?`: (`node`: [`Node`](../type-aliases/Node.md), `options`: \{ `blockEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\>; \}) => `boolean`; `hanging?`: `boolean`; `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:219](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L219)

Insert a fragment at the current selection. If the selection is currently
expanded, delete it first.

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

`fragment`

</td>
<td>

[`Node`](../type-aliases/Node.md)[]

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `filter?`: (`node`: [`Node`](../type-aliases/Node.md), `options`: \{ `blockEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\>; \}) => `boolean`; `hanging?`: `boolean`; `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `TextInsertFragmentOptions`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

The location to insert the fragment.

**Default**

```ts
The current selection. If there is no selection, nothing is deleted.
```

</td>
</tr>
<tr>
<td>

`options.batchDirty?`

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

`options.filter?`

</td>
<td>

(`node`: [`Node`](../type-aliases/Node.md), `options`: \{ `blockEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\>; \}) => `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.hanging?`

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

`options.select?`

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

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#insertFragment](EditorInterface.md#insertfragment) - A static version of this method.

***

### insertionPoint()

> **insertionPoint**(`point`: [`BasePoint`](BasePoint.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:553](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L553)

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`BasePoint`](BasePoint.md)

***

### insertNode()

> **insertNode**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`node`: [`Node`](../type-aliases/Node.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:228](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L228)

Insert a node at the current selection. If the selection is currently
expanded, delete it first.

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

<a id="type-parameter-t-1"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`node`

</td>
<td>

[`Node`](../type-aliases/Node.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeInsertNodesOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.batchDirty?`

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

`options.hanging?`

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

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.select?`

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

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#insertNode](EditorInterface.md#insertnode) - A static version of this method.

***

### insertNodes()

> **insertNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`nodes`: [`Node`](../type-aliases/Node.md) \| [`Node`](../type-aliases/Node.md)[], `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:240](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L240)

Insert nodes in the editor at the specified location or (if not defined)
the current selection or (if not defined) the end of the document.

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

<a id="type-parameter-t-2"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`nodes`

</td>
<td>

[`Node`](../type-aliases/Node.md) \| [`Node`](../type-aliases/Node.md)[]

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `batchDirty?`: `boolean`; `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `NodeInsertNodesOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.batchDirty?`

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

`options.hanging?`

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

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.select?`

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

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#insertNodes](TransformsInterface.md#insertnodes) - A static version of this method.

***

### insertSoftBreak()

> **insertSoftBreak**(): `void`

Defined in: [interfaces/editor.ts:250](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L250)

Insert a soft break at the current selection. If the selection is
currently expanded, delete it first.

#### Returns

`void`

#### See

[EditorInterface#insertSoftBreak](EditorInterface.md#insertsoftbreak) - A static version of this method.

***

### insertText()

> **insertText**(`text`: `string`, `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `select?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:258](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L258)

Insert text at the current selection. If the selection is currently
expanded, delete it first.

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

`text`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `select?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `TextInsertTextOptions`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.select?`

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

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

With `voids: true`, replacing an expanded range also deletes within void content instead of removing the void nodes as atomic units. At an inline boundary, insertion uses the surrounding text in that block, adding the empty text required by normalization if replacement temporarily removes it.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#insertText](EditorInterface.md#inserttext) - A static version of this method.

***

### isBlock()

> **isBlock**(`value`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:559](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L559)

Check if an element is a block element. It only accepts an `Element`, so check other values with `Element.isElement` first.

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

`value`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isBlock](EditorInterface.md#isblock) - A static version of this method.

***

### isEdge()

> **isEdge**(`point`: [`BasePoint`](BasePoint.md), `at`: [`Location`](../type-aliases/Location.md)): `boolean`

Defined in: [interfaces/editor.ts:565](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L565)

Check if a point is an edge of a location.

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isEdge](EditorInterface.md#isedge) - A static version of this method.

***

### isElementReadOnly()

> **isElementReadOnly**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:76](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L76)

Check if a value is a read-only `Element` object.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isElementReadOnly](EditorInterface.md#iselementreadonly) - A static version of this method.

***

### isEmpty()

> **isEmpty**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:571](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L571)

Check if an element is empty, accounting for void nodes.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isEmpty](EditorInterface.md#isempty) - A static version of this method.

***

### isEnd()

> **isEnd**(`point`: [`BasePoint`](BasePoint.md), `at`: [`Location`](../type-aliases/Location.md)): `boolean`

Defined in: [interfaces/editor.ts:577](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L577)

Check if a point is the end point of a location.

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isEnd](EditorInterface.md#isend) - A static version of this method.

***

### isInline()

> **isInline**(`value`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:583](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L583)

Check if an element is an inline element. It only accepts an `Element`, so check other values with `Element.isElement` first.

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

`value`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isInline](EditorInterface.md#isinline) - A static version of this method.

***

### isIsolated()

> **isIsolated**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:95](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L95)

Mark elements whose content must not flow across their edges, such as table cells. Slate's default returns `false`.

For an isolated element:

- Backspace at its start and Delete at its end do nothing, so they don't merge it with a neighbour. Deleting by word or line stops at its edge.
- Deleting a range that crosses its edge removes the selected text but doesn't merge the blocks on either side. Isolated elements that are entirely inside the range are still removed.
- `insertBreak`, and `splitNodes` with its default match, don't split it. They still split blocks inside it. `splitNodes` with an explicit `match` that selects the element still splits it.
- Explicit `mergeNodes` calls aren't affected.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Example

```javascript
const { isIsolated } = editor
editor.isIsolated = element =>
  element.type === 'table-cell' || isIsolated(element)
```

***

### isNormalizing()

> **isNormalizing**(): `boolean`

Defined in: [interfaces/editor.ts:589](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L589)

Check if the editor is currently normalizing after each operation.

#### Returns

`boolean`

#### See

[EditorInterface#isNormalizing](EditorInterface.md#isnormalizing) - A static version of this method.

***

### isSelectable()

> **isSelectable**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:116](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L116)

Check if a value is a selectable `Element` object.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isSelectable](EditorInterface.md#isselectable) - A static version of this method.

***

### isStart()

> **isStart**(`point`: [`BasePoint`](BasePoint.md), `at`: [`Location`](../type-aliases/Location.md)): `boolean`

Defined in: [interfaces/editor.ts:595](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L595)

Check if a point is the start point of a location.

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
</tr>
<tr>
<td>

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isStart](EditorInterface.md#isstart) - A static version of this method.

***

### isVoid()

> **isVoid**(`value`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:601](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L601)

Check if an element is a void element. It only accepts an `Element`, so check other values with `Element.isElement` first.

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

`value`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isVoid](EditorInterface.md#isvoid) - A static version of this method.

***

### last()

> **last**(`at`: [`Location`](../type-aliases/Location.md)): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/editor.ts:607](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L607)

Get the last node at a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

#### See

[EditorInterface#last](EditorInterface.md#last) - A static version of this method.

***

### leaf()

> **leaf**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseText`](BaseText.md)\>

Defined in: [interfaces/editor.ts:614](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L614)

Get the leaf text node at a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorLeafOptions`

</td>
</tr>
<tr>
<td>

`options.depth?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseText`](BaseText.md)\>

#### See

[EditorInterface#leaf](EditorInterface.md#leaf) - A static version of this method.

***

### leafEdgeAffinity()

> **leafEdgeAffinity**(`before`: [`BaseText`](BaseText.md), `after`: [`BaseText`](BaseText.md)): `"forward"` \| `"backward"` \| `null`

Defined in: [interfaces/editor.ts:110](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L110)

Choose which of two sibling text leaves receives insertion at their shared boundary. `'backward'` uses the end of `before`; `'forward'` uses the start of `after`. Defaults to `null`, retaining the current point. This rule runs after inline affinity and determines the receiving leaf’s marks reported by `Editor.marks`.

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

`before`

</td>
<td>

[`BaseText`](BaseText.md)

</td>
</tr>
<tr>
<td>

`after`

</td>
<td>

[`BaseText`](BaseText.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`"forward"` \| `"backward"` \| `null`

***

### levels()

> **levels**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `reverse?`: `boolean`; `voids?`: `boolean`; \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

Defined in: [interfaces/editor.ts:621](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L621)

Iterate through all of the levels at a location.

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

<a id="type-parameter-t-3"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `reverse?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorLevelsOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.reverse?`

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

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

#### See

[EditorInterface#levels](EditorInterface.md#levels) - A static version of this method.

***

### liftNodes()

> **liftNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:265](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L265)

Lift nodes at a specific location upwards in the document tree, splitting
their parent in two if necessary.

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

<a id="type-parameter-t-4"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#liftNodes](TransformsInterface.md#liftnodes) - A static version of this method.

***

### markableVoid()

> **markableVoid**(`element`: [`BaseElement`](BaseElement.md)): `boolean`

Defined in: [interfaces/editor.ts:123](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L123)

Tells which void nodes accept marks. Slate's default implementation
returns `false`, but if some void elements support formatting, override
this function to include them.

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### mergeNodes()

> **mergeNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:277](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L277)

Merge a node at a location with the previous node of the same depth,
removing any empty containing nodes after the merge if necessary.

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

<a id="type-parameter-t-5"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#mergeNodes](TransformsInterface.md#mergenodes) - A static version of this method.

***

### move()

> **move**(`options?`: \{ `distance?`: `number`; `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); `reverse?`: `boolean`; `unit?`: [`MoveUnit`](../type-aliases/MoveUnit.md); \}): `void`

Defined in: [interfaces/editor.ts:290](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L290)

Move the selection's point forward or backward.

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

`options?`

</td>
<td>

\{ `distance?`: `number`; `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); `reverse?`: `boolean`; `unit?`: [`MoveUnit`](../type-aliases/MoveUnit.md); \}

</td>
<td>

Type also exported as `SelectionMoveOptions`

</td>
</tr>
<tr>
<td>

`options.distance?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`SelectionEdge`](../type-aliases/SelectionEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.reverse?`

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

`options.unit?`

</td>
<td>

[`MoveUnit`](../type-aliases/MoveUnit.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#move](TransformsInterface.md#move) - A static version of this method.

***

### moveNodes()

> **moveNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `to`: [`Path`](../type-aliases/Path.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:298](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L298)

Move the nodes from an origin to a destination. A destination must be specified in the `options`. If no origin is specified, move the selection.

`to` is the path the node ends up at once the move is done, not the path it is inserted before. For example, with four blocks `1 2 3 4`, moving `[0]` to `[2]` gives `2 3 1 4`. When `match` selects several nodes, they are moved one at a time, each to `to`.

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

<a id="type-parameter-t-6"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `to`: [`Path`](../type-aliases/Path.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.to`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#moveNodes](TransformsInterface.md#movenodes) - A static version of this method.

***

### next()

> **next**\<`T` *extends* [`Descendant`](../type-aliases/Descendant.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

Defined in: [interfaces/editor.ts:630](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L630)

Get the matching node in the branch of the document after a location.

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

<a id="type-parameter-t-7"></a> `T` *extends* [`Descendant`](../type-aliases/Descendant.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorNextOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`SelectionMode`](../type-aliases/SelectionMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

#### See

[EditorInterface#next](EditorInterface.md#next) - A static version of this method.

***

### node()

> **node**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`NodeEntry`](../type-aliases/NodeEntry.md)

Defined in: [interfaces/editor.ts:639](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L639)

Get the node at a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorNodeOptions`

</td>
</tr>
<tr>
<td>

`options.depth?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)

#### See

[EditorInterface#node](EditorInterface.md#node) - A static version of this method.

***

### nodes()

> **nodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `pass?`: (`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `universal?`: `boolean`; `voids?`: `boolean`; \}): `Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

Defined in: [interfaces/editor.ts:646](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L646)

Iterate through all of the nodes in the Editor.

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

<a id="type-parameter-t-8"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `pass?`: (`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`; `reverse?`: `boolean`; `universal?`: `boolean`; `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorNodesOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md) \| [`Span`](../type-aliases/Span.md)

</td>
<td>

The location to iterate over.

**Default**

```ts
The current selection. If there is no selection, nothing is yielded.
```

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

Provide a predicate to the `match?` option to limit the `NodeEntry` objects that are returned.

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`SelectionMode`](../type-aliases/SelectionMode.md)

</td>
<td>

- `'all'` (default): Return all matching nodes
- `'highest'`: in a hierarchy of nodes, only return the highest level matching nodes
- `'lowest'`: in a hierarchy of nodes, only return the lowest level matching nodes

</td>
</tr>
<tr>
<td>

`options.pass?`

</td>
<td>

(`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md)) => `boolean`

</td>
<td>

Skip the descendants of certain nodes (but not the nodes themselves).

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

Walk siblings from last to first. Ancestors still come before their descendants, so this isn't the forward order reversed: for `[block[text a, text b], block[text c]]` the forward order is `editor, 0, 0.0, 0.1, 1, 1.0` and the reverse order is `editor, 1, 1.0, 0, 0.1, 0.0`. To get the exact reverse, collect the forward entries and reverse the array.

</td>
</tr>
<tr>
<td>

`options.universal?`

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

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`Generator`\<[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\>, `void`, `undefined`\>

#### See

[EditorInterface#nodes](EditorInterface.md#nodes) - A static version of this method.

***

### normalize()

> **normalize**(`options?`: \{ `force?`: `boolean`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}): `void`

Defined in: [interfaces/editor.ts:311](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L311)

Normalize any dirty objects in the editor.

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

`options?`

</td>
<td>

\{ `force?`: `boolean`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}

</td>
<td>

Type also exported as `EditorNormalizeOptions`

</td>
</tr>
<tr>
<td>

`options.force?`

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

`options.operation?`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#normalize](EditorInterface.md#normalize) - A static version of this method.

***

### normalizeNode()

> **normalizeNode**(`entry`: [`NodeEntry`](../type-aliases/NodeEntry.md), `options?`: \{ `fallbackElement?`: () => [`BaseElement`](BaseElement.md); `force?`: `boolean`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}): `void`

Defined in: [interfaces/editor.ts:129](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L129)

Normalize a node according to the schema.

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

`entry`

</td>
<td>

[`NodeEntry`](../type-aliases/NodeEntry.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `fallbackElement?`: () => [`BaseElement`](BaseElement.md); `force?`: `boolean`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}

</td>
</tr>
<tr>
<td>

`options.fallbackElement?`

</td>
<td>

() => [`BaseElement`](BaseElement.md)

</td>
</tr>
<tr>
<td>

`options.force?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.operation?`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#normalize](EditorInterface.md#normalize) - A static version of this method.

***

### onChange()

> **onChange**(`options?`: \{ `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}): `void`

Defined in: [interfaces/editor.ts:139](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L139)

Called when there is a change in the editor.

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

`options?`

</td>
<td>

\{ `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}

</td>
</tr>
<tr>
<td>

`options.operation?`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### parent()

> **parent**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Ancestor`](../type-aliases/Ancestor.md)\>

Defined in: [interfaces/editor.ts:655](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L655)

Get the parent node of a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorParentOptions`

</td>
</tr>
<tr>
<td>

`options.depth?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`Ancestor`](../type-aliases/Ancestor.md)\>

#### See

[EditorInterface#parent](EditorInterface.md#parent) - A static version of this method.

***

### path()

> **path**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`Path`](../type-aliases/Path.md)

Defined in: [interfaces/editor.ts:662](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L662)

Get the path of a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `depth?`: `number`; `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorPathOptions`

</td>
</tr>
<tr>
<td>

`options.depth?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`Path`](../type-aliases/Path.md)

#### See

[EditorInterface#path](EditorInterface.md#path) - A static version of this method.

***

### pathRef()

> **pathRef**(`path`: [`Path`](../type-aliases/Path.md), `options?`: \{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}): [`PathRef`](PathRef.md)

Defined in: [interfaces/editor.ts:670](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L670)

Create a mutable ref for a `Path` object, which will stay in sync as new
operations are applied to the editor.

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

`path`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `EditorPathRefOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`TextDirection`](../type-aliases/TextDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`PathRef`](PathRef.md)

#### See

[EditorInterface#pathRef](EditorInterface.md#pathref) - A static version of this method.

***

### pathRefs()

> **pathRefs**(): `Set`\<[`PathRef`](PathRef.md)\>

Defined in: [interfaces/editor.ts:676](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L676)

Get the set of currently tracked path refs of the editor.

#### Returns

`Set`\<[`PathRef`](PathRef.md)\>

#### See

[EditorInterface#pathRefs](EditorInterface.md#pathrefs) - A static version of this method.

***

### point()

> **point**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:683](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L683)

Get the start or end point of a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `edge?`: [`LeafEdge`](../type-aliases/LeafEdge.md); \}

</td>
<td>

Type also exported as `EditorPointOptions`

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`LeafEdge`](../type-aliases/LeafEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`BasePoint`](BasePoint.md)

#### See

[EditorInterface#point](EditorInterface.md#point) - A static version of this method.

***

### pointRef()

> **pointRef**(`point`: [`BasePoint`](BasePoint.md), `options?`: \{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}): [`PointRef`](PointRef.md)

Defined in: [interfaces/editor.ts:691](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L691)

Create a mutable ref for a `Point` object, which will stay in sync as new
operations are applied to the editor.

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

`point`

</td>
<td>

[`BasePoint`](BasePoint.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `EditorPointRefOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`TextDirection`](../type-aliases/TextDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`PointRef`](PointRef.md)

#### See

[EditorInterface#pointRef](EditorInterface.md#pointref) - A static version of this method.

***

### pointRefs()

> **pointRefs**(): `Set`\<[`PointRef`](PointRef.md)\>

Defined in: [interfaces/editor.ts:697](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L697)

Get the set of currently tracked point refs of the editor.

#### Returns

`Set`\<[`PointRef`](PointRef.md)\>

#### See

[EditorInterface#pointRefs](EditorInterface.md#pointrefs) - A static version of this method.

***

### positions()

> **positions**(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}): `Generator`\<[`BasePoint`](BasePoint.md), `void`, `undefined`\>

Defined in: [interfaces/editor.ts:711](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L711)

Iterate through all of the positions in the document where a `Point` can be placed. The first `Point` returns is always the starting point followed by the next `Point` as determined by the `unit` option.

Points inside non-selectable elements are skipped in both directions, including consecutive non-selectable elements.

Read `options.unit` to see how this method iterates through positions.

Note: By default void nodes are treated as a single point and iteration will not happen inside their content unless the voids option is set, then iteration will occur. Text immediately after an inline void starts a new traversal boundary, including when the surrounding text is empty. Word traversal restarts segmentation at that boundary.

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; `reverse?`: `boolean`; `unit?`: [`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorPositionsOptions`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

The `Location` in which to iterate the positions of.

</td>
</tr>
<tr>
<td>

`options.isWordCharacter?`

</td>
<td>

(`character`: `string`) => `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.reverse?`

</td>
<td>

`boolean`

</td>
<td>

When `true` returns the positions in reverse order. In the case of the `unit` being `word`, the actual returned positions are different (i.e. we will get the start of a word in reverse instead of the end).

</td>
</tr>
<tr>
<td>

`options.unit?`

</td>
<td>

[`TextUnitAdjustment`](../type-aliases/TextUnitAdjustment.md)

</td>
<td>

- `offset`: Moves to the next offset `Point`. It will include the `Point` at the end of a `Text` object and then move onto the first `Point` (at the 0th offset) of the next `Text` object. This may be counter-intuitive because the end of a `Text` and the beginning of the next `Text` might be thought of as the same position.
- `character`: Moves to the next `character` but is not always the next `index` in the string. This is because Unicode encodings may require multiple bytes to create one character. Unlike `offset`, `character` will not count the end of a `Text` and the beginning of the next `Text` as separate positions to return. Warning: The character offsets for Unicode characters does not appear to be reliable in some cases like a Smiley Emoji will be identified as 2 characters.
- `word`: Moves to the position immediately after the next `word`. In `reverse` mode, moves to the position immediately before the previous `word`. Whitespace and punctuation end a word, and apostrophes inside a word don't. Where `Intl.Segmenter` is available, a run of word characters is split further at its word boundaries, so Chinese, Japanese and Thai text without spaces moves and deletes one word at a time.
- `line` | `block`: Starts at the beginning position and then the position at the end of the block. Then starts at the beginning of the next block and then the end of the next block.

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

When `true` include void Nodes.

</td>
</tr>
</tbody>
</table>

#### Returns

`Generator`\<[`BasePoint`](BasePoint.md), `void`, `undefined`\>

#### See

[EditorInterface#positions](EditorInterface.md#positions) - A static version of this method.

***

### previous()

> **previous**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

Defined in: [interfaces/editor.ts:718](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L718)

Get the matching node in the branch of the document before a location.

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

<a id="type-parameter-t-9"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`SelectionMode`](../type-aliases/SelectionMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorPreviousOptions<T>`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`SelectionMode`](../type-aliases/SelectionMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<`T`\> \| `undefined`

#### See

[EditorInterface#previous](EditorInterface.md#previous) - A static version of this method.

***

### range()

> **range**(`at`: [`Location`](../type-aliases/Location.md), `to?`: [`Location`](../type-aliases/Location.md)): [`BaseRange`](BaseRange.md)

Defined in: [interfaces/editor.ts:726](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L726)

Get a range of a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`to?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`BaseRange`](BaseRange.md)

#### See

[EditorInterface#range](EditorInterface.md#range) - A static version of this method.

***

### rangeRef()

> **rangeRef**(`range`: [`BaseRange`](BaseRange.md), `options?`: \{ `affinity?`: [`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`; \}): [`RangeRef`](RangeRef.md)

Defined in: [interfaces/editor.ts:734](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L734)

Create a mutable ref for a `Range` object, which will stay in sync as new
operations are applied to the editor.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `affinity?`: [`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`; \}

</td>
<td>

Type also exported as `EditorRangeRefOptions`

</td>
</tr>
<tr>
<td>

`options.affinity?`

</td>
<td>

[`RangeDirection`](../type-aliases/RangeDirection.md) \| `null`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`RangeRef`](RangeRef.md)

#### See

[EditorInterface#rangeRef](EditorInterface.md#rangeref) - A static version of this method.

***

### rangeRefs()

> **rangeRefs**(): `Set`\<[`RangeRef`](RangeRef.md)\>

Defined in: [interfaces/editor.ts:740](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L740)

Get the set of currently tracked range refs of the editor.

#### Returns

`Set`\<[`RangeRef`](RangeRef.md)\>

#### See

[EditorInterface#rangeRefs](EditorInterface.md#rangerefs) - A static version of this method.

***

### removeMark()

> **removeMark**(`key`: `string`): `void`

Defined in: [interfaces/editor.ts:320](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L320)

Remove a custom property from the leaf text nodes within non-void nodes
or void nodes that `editor.markableVoid()` allows in the current
selection. If the selection is currently collapsed, the removal will be
stored on `editor.marks` and applied to the text inserted next.

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

`key`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#removeMark](EditorInterface.md#removemark) - A static version of this method.

***

### removeNodes()

> **removeNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:326](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L326)

Remove the nodes at a specific location in the document.

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

<a id="type-parameter-t-10"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#removeNodes](TransformsInterface.md#removenodes) - A static version of this method.

***

### select()

> **select**(`target`: [`Location`](../type-aliases/Location.md)): `void`

Defined in: [interfaces/editor.ts:338](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L338)

Set the selection to a new value.

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

`target`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#select](TransformsInterface.md#select) - A static version of this method.

***

### setChildren()

> **setChildren**(`children`: [`Descendant`](../type-aliases/Descendant.md)[]): `void`

Defined in: [interfaces/editor.ts:375](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L375)

Apply an external document through Slate operations. Delegates to `editor.setChildren`, so plugins can override the transform. Unchanged child prefixes and suffixes are retained, matched by identity or by deep equality, so a refetched copy of the document with one new block emits a single `insert_node`. Compatible nodes are updated recursively; text edits replace only the changed string middle. Deep-equal cloned values emit no operations.

Nodes shared by object identity can move within or across parents with a `move_node`, preserving selections inside them. Cloned moves are treated as content edits or replacements. Normalization is held until the diff is complete, and selection and refs follow the emitted operations through their normal rules.

With `withHistory`, each external change forms one undo step and is separate from typing before and after it.

To clear an editable document, pass a schema-valid empty block, for example `[{ type: 'paragraph', children: [{ text: '' }] }]`. `setChildren` itself accepts an empty root; it does not invent a block or reset history.

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

`children`

</td>
<td>

[`Descendant`](../type-aliases/Descendant.md)[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#setChildren](TransformsInterface.md#setchildren) - A static version of this method.

***

### setNodes()

> **setNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`props`: `Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\> \| ((`node`: `T`, `path`: [`Path`](../type-aliases/Path.md)) => `Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\>), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `compare?`: [`PropsCompare`](../type-aliases/PropsCompare.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `merge?`: [`PropsMerge`](../type-aliases/PropsMerge.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `replace?`: `boolean`; `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:348](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L348)

Set properties of nodes at the specified location. If no location is specified, use the selection. Optional node properties can be set to `null` to unset them.

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

<a id="type-parameter-t-11"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`props`

</td>
<td>

`Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\> \| ((`node`: `T`, `path`: [`Path`](../type-aliases/Path.md)) => `Partial`\<[`NullableProps`](../type-aliases/NullableProps.md)\<`T`\>\>)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `compare?`: [`PropsCompare`](../type-aliases/PropsCompare.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `merge?`: [`PropsMerge`](../type-aliases/PropsMerge.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `replace?`: `boolean`; `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.compare?`

</td>
<td>

[`PropsCompare`](../type-aliases/PropsCompare.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.merge?`

</td>
<td>

[`PropsMerge`](../type-aliases/PropsMerge.md)

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.replace?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.split?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#setNodes](TransformsInterface.md#setnodes) - A static version of this method.

If `props` contains `undefined` values, the node's corresponding property will also be set to `undefined` as opposed to ignored.

`children` and `text` in `props` are ignored, since they hold a node's content rather than its properties. To change content, use `insertNodes`, `removeNodes` or the text transforms.

***

### setNormalizing()

> **setNormalizing**(`isNormalizing`: `boolean`): `void`

Defined in: [interfaces/editor.ts:383](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L383)

Manually set if the editor should currently be normalizing.

Note: Using this incorrectly can leave the editor in an invalid state.

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

`isNormalizing`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#setNormalizing](EditorInterface.md#setnormalizing) - A static version of this method.

***

### setPoint()

> **setPoint**(`props`: `Partial`\<[`Point`](../type-aliases/Point.md)\>, `options?`: \{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}): `void`

Defined in: [interfaces/editor.ts:390](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L390)

Set new properties on one of the selection's points.

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

`props`

</td>
<td>

`Partial`\<[`Point`](../type-aliases/Point.md)\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `edge?`: [`SelectionEdge`](../type-aliases/SelectionEdge.md); \}

</td>
<td>

Type also exported as `SelectionSetPointOptions`

</td>
</tr>
<tr>
<td>

`options.edge?`

</td>
<td>

[`SelectionEdge`](../type-aliases/SelectionEdge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#setPoint](TransformsInterface.md#setpoint) - A static version of this method.

***

### setSelection()

> **setSelection**(`props`: `Partial`\<[`BaseSelection`](../type-aliases/BaseSelection.md)\>): `void`

Defined in: [interfaces/editor.ts:396](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L396)

Set new properties on the selection.

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

`props`

</td>
<td>

`Partial`\<[`BaseSelection`](../type-aliases/BaseSelection.md)\>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#setSelection](TransformsInterface.md#setselection) - A static version of this method.

***

### shouldMergeNodesRemovePrevNode()

> **shouldMergeNodesRemovePrevNode**(`prevNodeEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md), `curNodeEntry`: [`NodeEntry`](../type-aliases/NodeEntry.md)): `boolean`

Defined in: [interfaces/editor.ts:783](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L783)

Determine whether or not to remove the previous node when merging.

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

`prevNodeEntry`

</td>
<td>

[`NodeEntry`](../type-aliases/NodeEntry.md)

</td>
</tr>
<tr>
<td>

`curNodeEntry`

</td>
<td>

[`NodeEntry`](../type-aliases/NodeEntry.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#shouldMergeNodesRemovePrevNode](EditorInterface.md#shouldmergenodesremoveprevnode) - A static version of this method.

***

### shouldNormalize()

> **shouldNormalize**(`__namedParameters`: \{ `dirtyPaths`: [`Path`](../type-aliases/Path.md)[]; `initialDirtyPathsLength`: `number`; `iteration`: `number`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}): `boolean`

Defined in: [interfaces/editor.ts:145](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L145)

Override this method to prevent normalizing the editor.

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

`__namedParameters`

</td>
<td>

\{ `dirtyPaths`: [`Path`](../type-aliases/Path.md)[]; `initialDirtyPathsLength`: `number`; `iteration`: `number`; `operation?`: [`BaseOperation`](../type-aliases/BaseOperation.md); \}

</td>
</tr>
<tr>
<td>

`__namedParameters.dirtyPaths`

</td>
<td>

[`Path`](../type-aliases/Path.md)[]

</td>
</tr>
<tr>
<td>

`__namedParameters.initialDirtyPathsLength`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`__namedParameters.iteration`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`__namedParameters.operation?`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### See

[EditorInterface#isNormalizing](EditorInterface.md#isnormalizing) - A static version of this method.

***

### splitNodes()

> **splitNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `always?`: `boolean`; `at?`: [`Location`](../type-aliases/Location.md); `height?`: `number`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:402](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L402)

Split the nodes at a specific location.

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

<a id="type-parameter-t-12"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `always?`: `boolean`; `at?`: [`Location`](../type-aliases/Location.md); `height?`: `number`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`RangeMode`](../type-aliases/RangeMode.md); `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.always?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.height?`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`RangeMode`](../type-aliases/RangeMode.md)

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#splitNodes](TransformsInterface.md#splitnodes) - A static version of this method.

***

### start()

> **start**(`at`: [`Location`](../type-aliases/Location.md)): [`BasePoint`](BasePoint.md)

Defined in: [interfaces/editor.ts:746](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L746)

Get the start point of a location.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
</tbody>
</table>

#### Returns

[`BasePoint`](BasePoint.md)

#### See

[EditorInterface#start](EditorInterface.md#start) - A static version of this method.

***

### string()

> **string**(`at`: [`Location`](../type-aliases/Location.md), `options?`: \{ `voids?`: `boolean`; \}): `string`

Defined in: [interfaces/editor.ts:756](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L756)

Get the text string content of a location.

Note: by default the text of void nodes is considered to be an empty
string, regardless of content, unless you pass in true for the voids option.

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

`at`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorStringOptions`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

#### See

[EditorInterface#string](EditorInterface.md#string) - A static version of this method.

***

### unhangRange()

> **unhangRange**(`range`: [`BaseRange`](BaseRange.md), `options?`: \{ `voids?`: `boolean`; \}): [`BaseRange`](BaseRange.md)

Defined in: [interfaces/editor.ts:763](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L763)

Convert a range into a non-hanging one.

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

`range`

</td>
<td>

[`BaseRange`](BaseRange.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorUnhangRangeOptions`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

Allow placing the end of the selection in a void node.

</td>
</tr>
</tbody>
</table>

#### Returns

[`BaseRange`](BaseRange.md)

#### See

[EditorInterface#unhangRange](EditorInterface.md#unhangrange) - A static version of this method.

***

### unsetNodes()

> **unsetNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`props`: `string` \| `string`[], `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:415](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L415)

Unset properties on the nodes at a location.

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

<a id="type-parameter-t-13"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`props`

</td>
<td>

`string` \| `string`[]

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `hanging?`: `boolean`; `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.hanging?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.split?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#unsetNodes](TransformsInterface.md#unsetnodes) - A static version of this method.

***

### unwrapNodes()

> **unwrapNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:432](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L432)

Unwrap the nodes at a location from a parent node, splitting the parent
if necessary to ensure that only the content in the range is unwrapped.

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

<a id="type-parameter-t-14"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.split?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#unwrapNodes](TransformsInterface.md#unwrapnodes) - A static version of this method.

***

### void()

> **void**(`options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}): [`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

Defined in: [interfaces/editor.ts:770](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L770)

Match a void node in the current branch of the editor.

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

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `voids?`: `boolean`; \}

</td>
<td>

Type also exported as `EditorVoidOptions`

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`NodeEntry`](../type-aliases/NodeEntry.md)\<[`BaseElement`](BaseElement.md)\> \| `undefined`

#### See

[EditorInterface#void](EditorInterface.md#void) - A static version of this method.

***

### withoutNormalizing()

> **withoutNormalizing**(`fn`: () => `void`): `void`

Defined in: [interfaces/editor.ts:444](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L444)

Call a function, deferring normalization until after it completes.

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

`fn`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[EditorInterface#withoutNormalizing](EditorInterface.md#withoutnormalizing) - A static version of this method.

***

### word()

> **word**(`options?`: \{ `at?`: [`BasePoint`](BasePoint.md) \| [`BaseRange`](BaseRange.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; \}): [`BaseRange`](BaseRange.md) \| `undefined`

Defined in: [interfaces/editor.ts:777](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L777)

Get the range of the word around a point, within its block. Defaults to the selection's focus. Returns `undefined` when the point isn't touching a word, is inside a void, or there is no selection.

`Editor.word` reads the editor's value, which doesn't include text an input method is still composing. In React, use `DOMEditor.getWord` to include it.

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

`options?`

</td>
<td>

\{ `at?`: [`BasePoint`](BasePoint.md) \| [`BaseRange`](BaseRange.md); `isWordCharacter?`: (`character`: `string`) => `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`BasePoint`](BasePoint.md) \| [`BaseRange`](BaseRange.md)

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

[`BaseRange`](BaseRange.md) \| `undefined`

***

### wrapNodes()

> **wrapNodes**\<`T` *extends* [`Node`](../type-aliases/Node.md)\>(`element`: [`BaseElement`](BaseElement.md), `options?`: \{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}): `void`

Defined in: [interfaces/editor.ts:451](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/editor.ts#L451)

Wrap the nodes at a location in a new container node, splitting the edges
of the range first to ensure that only the content in the range is wrapped.

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

<a id="type-parameter-t-15"></a> `T` *extends* [`Node`](../type-aliases/Node.md)

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

`element`

</td>
<td>

[`BaseElement`](BaseElement.md)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `at?`: [`Location`](../type-aliases/Location.md); `match?`: [`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>; `mode?`: [`MaximizeMode`](../type-aliases/MaximizeMode.md); `split?`: `boolean`; `voids?`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.at?`

</td>
<td>

[`Location`](../type-aliases/Location.md)

</td>
</tr>
<tr>
<td>

`options.match?`

</td>
<td>

[`NodeMatch`](../type-aliases/NodeMatch.md)\<`T`\>

</td>
</tr>
<tr>
<td>

`options.mode?`

</td>
<td>

[`MaximizeMode`](../type-aliases/MaximizeMode.md)

</td>
</tr>
<tr>
<td>

`options.split?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`options.voids?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

[TransformsInterface#wrapNodes](TransformsInterface.md#wrapnodes) - A static version of this method.
