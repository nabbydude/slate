# Type Alias: Path

> **Path** = `number`[]

Defined in: [interfaces/path.ts:16](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L16)

`Path` arrays are a list of indexes that describe a node's exact position in
a Slate node tree. Although they are usually relative to the root `Editor`
object, they can be relative to any `Node` object.
