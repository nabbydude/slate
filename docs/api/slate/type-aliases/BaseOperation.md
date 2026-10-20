# Type Alias: BaseOperation

> **BaseOperation** = [`NodeOperation`](NodeOperation.md) \| [`SelectionOperation`](SelectionOperation.md) \| [`TextOperation`](TextOperation.md)

Defined in: [interfaces/operation.ts:137](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/operation.ts#L137)

`Operation` objects define the low-level instructions that Slate editors use
to apply changes to their internal state. Representing all changes as
operations is what allows Slate editors to easily implement history,
collaboration, and other features.
