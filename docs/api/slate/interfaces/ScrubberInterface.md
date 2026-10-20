# Interface: ScrubberInterface

Defined in: [interfaces/scrubber.ts:70](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/scrubber.ts#L70)

This interface implements a stringify() function, which is used by Slate
internally when generating exceptions containing end user data. Developers
using Slate may call Scrubber.setScrubber() to alter the behavior of this
stringify() function.

## Examples

For example, to prevent the cleartext logging of 'text' fields within Nodes:
```ts
import { Scrubber } from 'slate';
Scrubber.setScrubber((key, val) => {
  if (key === 'text') return '...scrubbed...'
  return val
});
```

Here's an example "textRandomizer" scrubber, which randomizes particular fields
of Nodes, preserving their length, but replacing their contents with randomly
chosen alphanumeric characters.

```ts
import { Scrubber } from 'slate'

const textRandomizer = (fieldNames: string[]) => (key, value) => {
  if (fieldNames.includes(key)) {
    if (typeof value === 'string') {
      return value.split('').map(generateRandomCharacter).join('')
    } else {
      return '... scrubbed ...'
    }
  }

  return value
}

const generateRandomCharacter = (): string => {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLKMNOPQRSTUVWXYZ1234567890'
  return chars.charAt(Math.floor(Math.random() * chars.length))
}

// randomize the 'text' and 'src' fields of any Node that is included in an
// exception thrown by Slate
Scrubber.setScrubber(Scrubber.textRandomizer(['text', 'src']))
```

In this example, a Node that looked like:

```json
{ "text": "My test input string", "count": 5 }
```

will be logged by Slate in an exception as (the random string will differ):

```json
{ "text": "rSIvEzKe39l6rqQSCfyv", "count": 5 }
```

## Methods

### setScrubber()

> **setScrubber**(`scrubber`: [`Scrubber`](../type-aliases/Scrubber.md) \| `undefined`): `void`

Defined in: [interfaces/scrubber.ts:75](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/scrubber.ts#L75)

Set the scrubber function.

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

`scrubber`

</td>
<td>

[`Scrubber`](../type-aliases/Scrubber.md) \| `undefined`

</td>
<td>

The scrubber function to use on inputs of [ScrubberInterface#stringify](#stringify) and each of its properties, or `undefined` for no scrubbing

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### stringify()

> **stringify**(`value`: `any`): `string`

Defined in: [interfaces/scrubber.ts:81](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate/src/interfaces/scrubber.ts#L81)

Convert a value into a JSON string, using the scrubber function if one has been set.

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

`value`

</td>
<td>

`any`

</td>
<td>

The value to stringify

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

The JSON string representation of the value
