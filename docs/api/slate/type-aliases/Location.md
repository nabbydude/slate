# Type Alias: Location

> **Location** = [`Path`](Path.md) \| [`Point`](Point.md) \| [`Range`](Range.md)

Defined in: [interfaces/location.ts:11](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/location.ts#L11)

The `Location` interface is a union of the ways to refer to a specific
location in a Slate document: paths, points or ranges.

Methods will often accept a `Location` instead of requiring only a `Path`,
`Point` or `Range`. This eliminates the need for developers to manage
converting between the different interfaces in their own code base.
