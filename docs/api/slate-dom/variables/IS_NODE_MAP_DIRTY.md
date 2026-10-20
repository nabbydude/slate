# Variable: IS\_NODE\_MAP\_DIRTY

> `const` **IS\_NODE\_MAP\_DIRTY**: `WeakMap`\<[`Editor`](../../slate/type-aliases/Editor.md), `boolean`\>

Defined in: [slate-dom/src/utils/weak-maps.ts:21](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-dom/src/utils/weak-maps.ts#L21)

Two weak maps that allow us rebuild a path given a node. They are populated
at render time such that after a render occurs we can always backtrack.
