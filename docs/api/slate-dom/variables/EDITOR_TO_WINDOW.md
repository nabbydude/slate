# Variable: EDITOR\_TO\_WINDOW

> `const` **EDITOR\_TO\_WINDOW**: `WeakMap`\<[`Editor`](../../slate/type-aliases/Editor.md), `Window`\>

Defined in: [slate-dom/src/utils/weak-maps.ts:29](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/weak-maps.ts#L29)

Weak maps that allow us to go between Slate nodes and DOM nodes. These
are used to resolve DOM event-related logic into Slate actions.
