# Interface: PathInterface

Defined in: [interfaces/path.ts:33](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L33)

## Methods

### Comparison

#### compare()

> **compare**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `-1` \| `0` \| `1`

Defined in: [interfaces/path.ts:59](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L59)

Compare a path to another, returning an integer indicating whether the path
was before, at, or after the other.

Note: Two paths of unequal length can still receive a `0` result if one is
directly above or below the other. If you want exact matching, use
[Path.equals](#equals) instead.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`-1` \| `0` \| `1`

***

#### endsAfter()

> **endsAfter**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:65](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L65)

Check if a path ends after one of the indexes in another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### endsAt()

> **endsAt**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:71](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L71)

Check if a path ends at one of the indexes in another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### endsBefore()

> **endsBefore**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:77](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L77)

Check if a path ends before one of the indexes in another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### equals()

> **equals**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:83](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L83)

Check if a path is exactly equal to another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isAfter()

> **isAfter**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:95](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L95)

Check if a path is after another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isAncestor()

> **isAncestor**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:101](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L101)

Check if a path is an ancestor of another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isBefore()

> **isBefore**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:107](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L107)

Check if a path is before another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isChild()

> **isChild**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:113](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L113)

Check if a path is a child of another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isCommon()

> **isCommon**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:119](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L119)

Check if a path is equal to or an ancestor of another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isDescendant()

> **isDescendant**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:125](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L125)

Check if a path is a descendant of another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isParent()

> **isParent**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:131](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L131)

Check if a path is the parent of another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

***

#### isSibling()

> **isSibling**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:143](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L143)

Check if a path is a sibling of another.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

### Other

#### operationCanTransformPath()

> **operationCanTransformPath**(`operation`: [`BaseOperation`](../type-aliases/BaseOperation.md)): operation is BaseInsertNodeOperation \| BaseMergeNodeOperation \| BaseMoveNodeOperation \| BaseRemoveNodeOperation \| BaseSplitNodeOperation

Defined in: [interfaces/path.ts:170](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L170)

Returns whether this operation can affect paths or not. Used as an
optimization when updating dirty paths during normalization

##### Parameters

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

##### Returns

operation is BaseInsertNodeOperation \| BaseMergeNodeOperation \| BaseMoveNodeOperation \| BaseRemoveNodeOperation \| BaseSplitNodeOperation

### Queries

#### hasPrevious()

> **hasPrevious**(`path`: [`Path`](../type-aliases/Path.md)): `boolean`

Defined in: [interfaces/path.ts:89](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L89)

Check if the path of previous sibling node exists

##### Parameters

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

##### Returns

`boolean`

### Relational

#### ancestors()

> **ancestors**(`path`: [`Path`](../type-aliases/Path.md), `options?`: \{ `reverse?`: `boolean`; \}): [`Path`](../type-aliases/Path.md)[]

Defined in: [interfaces/path.ts:42](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L42)

Get a list of ancestor paths for a given path.

The paths are sorted from shallowest to deepest ancestor. However, if the
`reverse: true` option is passed, they are reversed.

##### Parameters

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

\{ `reverse?`: `boolean`; \}

</td>
<td>

Type also exported as `PathAncestorsOptions`

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
</tbody>
</table>

##### Returns

[`Path`](../type-aliases/Path.md)[]

***

#### common()

> **common**(`path`: [`Path`](../type-aliases/Path.md), `another`: [`Path`](../type-aliases/Path.md)): [`Path`](../type-aliases/Path.md)

Defined in: [interfaces/path.ts:48](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L48)

Get the common ancestor path of two paths.

##### Parameters

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
<tr>
<td>

`another`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Path`](../type-aliases/Path.md)

***

#### levels()

> **levels**(`path`: [`Path`](../type-aliases/Path.md), `options?`: \{ `reverse?`: `boolean`; \}): [`Path`](../type-aliases/Path.md)[]

Defined in: [interfaces/path.ts:154](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L154)

Get a list of paths at every level down to a path. Note: this is the same
as `Path.ancestors`, but including the path itself.

The paths are sorted from shallowest to deepest. However, if the `reverse:
true` option is passed, they are reversed.

##### Parameters

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

\{ `reverse?`: `boolean`; \}

</td>
<td>

Type also exported as `PathLevelsOptions`

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
</tbody>
</table>

##### Returns

[`Path`](../type-aliases/Path.md)[]

***

#### next()

> **next**(`path`: [`Path`](../type-aliases/Path.md)): [`Path`](../type-aliases/Path.md)

Defined in: [interfaces/path.ts:161](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L161)

Given a path, get the path to the next sibling node. The method does not
ensure that the returned `Path` is valid in the document.

##### Parameters

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

##### Returns

[`Path`](../type-aliases/Path.md)

***

#### parent()

> **parent**(`path`: [`Path`](../type-aliases/Path.md)): [`Path`](../type-aliases/Path.md)

Defined in: [interfaces/path.ts:184](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L184)

Given a path, return a new path referring to the parent node above it.
If the `path` argument is equal to `[]`, throws an error.

##### Parameters

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

##### Returns

[`Path`](../type-aliases/Path.md)

***

#### previous()

> **previous**(`path`: [`Path`](../type-aliases/Path.md)): [`Path`](../type-aliases/Path.md)

Defined in: [interfaces/path.ts:193](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L193)

Given a path, get the path to the previous sibling node. The method will
throw an error if there are no previous siblings (e.g. if the Path is
currently `[1, 0]`, the previous path would be `[1, -1]` which is illegal
and will throw an error).

##### Parameters

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

##### Returns

[`Path`](../type-aliases/Path.md)

***

#### relative()

> **relative**(`path`: [`Path`](../type-aliases/Path.md), `ancestor`: [`Path`](../type-aliases/Path.md)): [`Path`](../type-aliases/Path.md)

Defined in: [interfaces/path.ts:202](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L202)

Given two paths, one that is an ancestor to the other, returns the
relative path from the `ancestor` argument to the `path` argument. If the
`ancestor` path is not actually an ancestor or equal to the `path`
argument, throws an error.

##### Parameters

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
<tr>
<td>

`ancestor`

</td>
<td>

[`Path`](../type-aliases/Path.md)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Path`](../type-aliases/Path.md)

***

#### transform()

> **transform**(`path`: [`Path`](../type-aliases/Path.md), `operation`: [`BaseOperation`](../type-aliases/BaseOperation.md), `options?`: \{ `affinity?`: [`TextDirection`](../type-aliases/TextDirection.md) \| `null`; \}): [`Path`](../type-aliases/Path.md) \| `null`

Defined in: [interfaces/path.ts:209](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L209)

Transform a path by an operation.

##### Parameters

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

`operation`

</td>
<td>

[`BaseOperation`](../type-aliases/BaseOperation.md)

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

Type also exported as `PathTransformOptions`

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

##### Returns

[`Path`](../type-aliases/Path.md) \| `null`

### Type Guards

#### isPath()

> **isPath**(`value`: `any`): `value is Path`

Defined in: [interfaces/path.ts:137](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/path.ts#L137)

Check is a value implements the `Path` interface.

##### Parameters

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

`any`

</td>
</tr>
</tbody>
</table>

##### Returns

`value is Path`
