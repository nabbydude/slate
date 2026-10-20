# Function: useComposing()

> **useComposing**(): `boolean`

Defined in: [packages/slate-react/src/hooks/use-composing.ts:17](https://github.com/nabbydude/slate/blob/32070375b7a9677f46c069396aab6ae0df7fc368/packages/slate-react/src/hooks/use-composing.ts#L17)

Get the current `composing` state of the editor. It deals with `compositionstart`, `compositionupdate`, `compositionend` events.

Composition events are triggered by typing (composing) with a language that uses a composition character (e.g. Chinese, Japanese, Korean, etc.) [example](https://en.wikipedia.org/wiki/Input_method#/media/File:Typing_%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4_in_Dubeolsik_keyboard_layout.gif).

## Returns

`boolean`
