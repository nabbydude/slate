# Type Alias: Ancestor

> **Ancestor** = [`Editor`](Editor.md) \| [`Element`](Element.md)

Defined in: [interfaces/node.ts:771](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/node.ts#L771)

The `Ancestor` union type represents nodes that are ancestors in the tree.
It is returned as a convenience in certain cases to narrow a value further
than the more generic `Node` union.
