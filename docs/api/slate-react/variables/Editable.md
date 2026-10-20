# Variable: Editable

> `const` **Editable**: (`props`: \{ `as?`: `ElementType`\<`any`, keyof IntrinsicElements\>; `decorate?`: (`entry`: [`NodeEntry`](../../slate/type-aliases/NodeEntry.md)) => [`DecoratedRange`](../../slate/type-aliases/DecoratedRange.md)[]; `disableDefaultStyles?`: `boolean`; `onDOMBeforeInput?`: (`event`: `InputEvent`) => `void`; `placeholder?`: `string`; `readOnly?`: `boolean`; `renderChunk?`: (`props`: [`RenderChunkProps`](../interfaces/RenderChunkProps.md)) => `Element`; `renderElement?`: (`props`: [`RenderElementProps`](../interfaces/RenderElementProps.md)) => `Element`; `renderLeaf?`: (`props`: [`RenderLeafProps`](../interfaces/RenderLeafProps.md)) => `Element`; `renderPlaceholder?`: (`props`: [`RenderPlaceholderProps`](../interfaces/RenderPlaceholderProps.md)) => `Element`; `renderText?`: (`props`: [`RenderTextProps`](../interfaces/RenderTextProps.md)) => `Element`; `role?`: `string`; `scrollSelectionIntoView?`: (`editor`: [`ReactEditor`](../interfaces/ReactEditor.md), `domRange`: [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range)) => `void`; `style?`: `CSSProperties`; \}) => `ReactNode`

Defined in: [packages/slate-react/src/components/editable.tsx:336](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/components/editable.tsx#L336)

The `Editable` component is the main editing component. Note that it must be inside a [Slate](../functions/Slate.md) component.
Keyboard focus (Tab or Shift+Tab) restores the editor's existing selection. If there is no selection, the browser chooses the initial caret position. Clicking the editor places the caret at the clicked position.

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

\{ `as?`: `ElementType`\<`any`, keyof IntrinsicElements\>; `decorate?`: (`entry`: [`NodeEntry`](../../slate/type-aliases/NodeEntry.md)) => [`DecoratedRange`](../../slate/type-aliases/DecoratedRange.md)[]; `disableDefaultStyles?`: `boolean`; `onDOMBeforeInput?`: (`event`: `InputEvent`) => `void`; `placeholder?`: `string`; `readOnly?`: `boolean`; `renderChunk?`: (`props`: [`RenderChunkProps`](../interfaces/RenderChunkProps.md)) => `Element`; `renderElement?`: (`props`: [`RenderElementProps`](../interfaces/RenderElementProps.md)) => `Element`; `renderLeaf?`: (`props`: [`RenderLeafProps`](../interfaces/RenderLeafProps.md)) => `Element`; `renderPlaceholder?`: (`props`: [`RenderPlaceholderProps`](../interfaces/RenderPlaceholderProps.md)) => `Element`; `renderText?`: (`props`: [`RenderTextProps`](../interfaces/RenderTextProps.md)) => `Element`; `role?`: `string`; `scrollSelectionIntoView?`: (`editor`: [`ReactEditor`](../interfaces/ReactEditor.md), `domRange`: [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range)) => `void`; `style?`: `CSSProperties`; \}

</td>
<td>

The props for the Editable component.

It also inherits all React props for [a contentEditable div](https://react.dev/reference/react-dom/components/textarea).

</td>
</tr>
<tr>
<td>

`props.as?`

</td>
<td>

`ElementType`\<`any`, keyof IntrinsicElements\>

</td>
<td>

The as prop specifies the type of element that will be used to render the Editable component in your React application.

</td>
</tr>
<tr>
<td>

`props.decorate?`

</td>
<td>

(`entry`: [`NodeEntry`](../../slate/type-aliases/NodeEntry.md)) => [`DecoratedRange`](../../slate/type-aliases/DecoratedRange.md)[]

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`props.disableDefaultStyles?`

</td>
<td>

`boolean`

</td>
<td>

The `disableDefaultStyles` prop determines whether the default styles of the Slate.js `Editable` component are applied or not.

Please note that with this prop set to `true`, you will need to ensure that your styles cater to all the functionalities of the editor that rely on specific styles to work properly.

Here are the default styles:

```typescript
const defaultStyles = {
  // Allow positioning relative to the editable element.
  position: 'relative',
  // Preserve adjacent whitespace and new lines.
  whiteSpace: 'pre-wrap',
  // Allow words to break if they are too long.
  wordWrap: 'break-word',
  // Make the minimum height that of the placeholder.
  ...(placeholderHeight ? { minHeight: placeholderHeight } : {}),
}
```

</td>
</tr>
<tr>
<td>

`props.onDOMBeforeInput?`

</td>
<td>

(`event`: `InputEvent`) => `void`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`props.placeholder?`

</td>
<td>

`string`

</td>
<td>

The text to display as a placeholder when the Editor is empty. A typical value for `placeholder` would be "Enter text here..." or "Start typing...". The placeholder text will not be treated as an actual value and will disappear when the user starts typing in the Editor.

While it is shown, the editor root gets an `aria-placeholder` with the same text.

</td>
</tr>
<tr>
<td>

`props.readOnly?`

</td>
<td>

`boolean`

</td>
<td>

When set to true, renders the editor in a "read-only" state. In this state, user input and interactions will not modify the editor's content.

Caller-provided event handlers still run in read-only mode; Slate skips its own editing behavior. Add `tabIndex={0}` to make a read-only editor keyboard-focusable. Read-only editors do not receive a tab index by default.

If this prop is omitted or set to false, the editor remains in the default "editable" state, allowing users to interact with and modify the content.

This prop is particularly useful when you want to display text or rich media content without allowing users to edit it, such as when displaying published content or a preview of the user's input.

</td>
</tr>
<tr>
<td>

`props.renderChunk?`

</td>
<td>

(`props`: [`RenderChunkProps`](../interfaces/RenderChunkProps.md)) => `Element`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`props.renderElement?`

</td>
<td>

(`props`: [`RenderElementProps`](../interfaces/RenderElementProps.md)) => `Element`

</td>
<td>

The `renderElement` prop is a function used to render a custom component for a specific type of Element node in the Slate.js document model.

The `attributes` must be added to the props of the top level HTML element returned from the function and the `children` must be rendered somewhere inside the returned JSX.

**Example**

Here is a typical usage of `renderElement` with two types of elements.

```ts
// We use `useCallback` here to memoize the function for subsequent renders.
props.renderElement = useCallback(props => {
  switch (props.element.type) {
    case 'code':
      return (
        <pre {...props.attributes}>
          <code>{props.children}</code>
        </pre>
      )
    default:
      return <p {...props.attributes}>{props.children}</p>
  }
}, [])
```

</td>
</tr>
<tr>
<td>

`props.renderLeaf?`

</td>
<td>

(`props`: [`RenderLeafProps`](../interfaces/RenderLeafProps.md)) => `Element`

</td>
<td>

The `renderLeaf` prop allows you to customize the rendering of leaf nodes in the document tree of your Slate editor. A "leaf" in Slate is the smallest chunk of text and its associated formatting attributes.

**Example**

```jsx
<Editor
  renderLeaf={({ attributes, children, leaf }) => {
    return (
      <span
        {...attributes}
        style={{ fontWeight: leaf.bold ? 'bold' : 'normal' }}
      >
        {children}
      </span>
    )
  }}
/>
```

</td>
</tr>
<tr>
<td>

`props.renderPlaceholder?`

</td>
<td>

(`props`: [`RenderPlaceholderProps`](../interfaces/RenderPlaceholderProps.md)) => `Element`

</td>
<td>

The `renderPlaceholder` prop allows you to customize how the placeholder of the Slate.js `Editable` component is rendered when the editor is empty. The placeholder will only be shown when the editor's content is empty.

Note that the `attributes` prop that comes in will contain a `style` object already. This object contains important styling properties which will make the placeholder behave like a placeholder. As such, it is advisable to extend styles and to focus on things like changing colors, opacity etc. Changing positioning, for example, could cause undesirable behavior.

**Example**

```jsx
<Editable
  placeholder="Enter text here..."
  renderPlaceholder={({ attributes, children }) => {
    const styledAttributes = {
      ...attributes,
      style: {
        ...attributes.style,
        color: 'gray',
      },
    }
    return <div {...styledAttributes}>{children}</div>
  }}
/>
```

</td>
</tr>
<tr>
<td>

`props.renderText?`

</td>
<td>

(`props`: [`RenderTextProps`](../interfaces/RenderTextProps.md)) => `Element`

</td>
<td>

The `renderText` prop allows you to customize the rendering of the container element for a Text node in the Slate editor. This is useful when you need to wrap the entire text node content or add elements associated with the text node as a whole, regardless of how decorations might split the text into multiple leaves.

**Example**

```jsx
<Editable
  renderText={({ attributes, children, text }) => {
    return (
      <span {...attributes} className="custom-text">
        {children}
        {text.tooltipContent && <Tooltip content={text.tooltipContent} />}
      </span>
    )
  }}
/>

</td>
</tr>
<tr>
<td>

`props.role?`

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

`props.scrollSelectionIntoView?`

</td>
<td>

(`editor`: [`ReactEditor`](../interfaces/ReactEditor.md), `domRange`: [`Range`](https://developer.mozilla.org/en-US/docs/Web/API/Range)) => `void`

</td>
<td>

Slate has its own default method to scroll a DOM selection into view that works for most cases; however, if the default behavior isn't working for you, possible due to some complex styling, you may need to override the default behavior by providing a different function here.

</td>
</tr>
<tr>
<td>

`props.style?`

</td>
<td>

`CSSProperties`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

## Returns

`ReactNode`
