# Interface: BaseElement

Defined in: [interfaces/element.ts:84](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L84)

`Element` objects are a type of node in a Slate document that contain other
element nodes or text nodes. They can be either "blocks" or "inlines"
depending on the Slate editor's configuration.

## Element Behavior Types

Element nodes behave differently depending on the Slate editor's configuration. An element can be:

- "block" or "inline" as defined by [BaseEditor#isInline](BaseEditor.md#isinline)
- either "void" or "not void" as defined by [BaseEditor#isVoid](BaseEditor.md#isvoid)

### Block vs. Inline

A "block" element can only be siblings with other "block" elements. An "inline" node can be siblings with `Text` nodes or other "inline" elements.

### Void vs Not Void

In a not "void" element, Slate handles the rendering of its `children` (e.g. in a paragraph where the `Text` and `Inline` children are rendered by Slate). In a "void" element, the `children` are rendered by the `Element`'s render code.

#### Voids That Support Marks

Some void elements are effectively stand-ins for text, such as with the [Mentions](https://www.slatejs.org/examples/mentions) example, where the mention element renders the character's name. Users might want to format Void elements like this with bold, or set their font and size, so `editor.markableVoid` tells Slate whether or not to apply Marks to the text children of void elements.

#### Rendering Void Elements

Void Elements must

- always have one empty child text node (for selection)
- render using `attributes` and `children` (so, their outermost HTML element **can't** be an HTML void element)
- set `contentEditable={false}` (for Firefox)

## Examples

Typical rendering code will resemble this `thematic-break` (horizontal rule) element:

```javascript
return (
  <div {...attributes} contentEditable={false}>
    {children}
    <hr />
  </div>
)
```

For a "markable" void such as a `mention` element, marks on the empty child element can be used to determine how the void element is rendered (Slate Marks are applied only to Text leaves):

```javascript
const Mention = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  const style: React.CSSProperties = {
    padding: '3px 3px 2px',
    margin: '0 1px',
    verticalAlign: 'baseline',
    display: 'inline-block',
    borderRadius: '4px',
    backgroundColor: '#eee',
    fontSize: '0.9em',
    boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
  }
  // See if our empty text child has any styling marks applied and apply those
  if (element.children[0].bold) {
    style.fontWeight = 'bold'
  }
  if (element.children[0].italic) {
    style.fontStyle = 'italic'
  }
  return (
    <span
      {...attributes}
      contentEditable={false}
      data-cy={`mention-${element.character.replace(' ', '-')}`}
      style={style}
    >
      {children}@{element.character}
    </span>
  )
}
```

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

[interfaces/element.ts:85](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/element.ts#L85)

</td>
</tr>
</tbody>
</table>
