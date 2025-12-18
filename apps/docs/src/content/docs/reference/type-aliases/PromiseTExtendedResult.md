---
editUrl: false
next: false
prev: false
title: "PromiseTExtendedResult"
---

> **PromiseTExtendedResult**\<`M`, `Data`\> = [`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\> \| (`data`) => [`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\> \| `Promise`\<[`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\>\>

Defined in: [packages/sonner-next-intl/src/types.ts:137](https://github.com/corex4dev/sonner-next-intl/blob/5e49049622b92ee2f2cb88aa4ed3f4a4111707c9/packages/sonner-next-intl/src/types.ts#L137)

Promise-based result factory or resolved structure.

## Type Parameters

### M

`M` *extends* [`LocalMessages`](/reference/type-aliases/localmessages/)

Messages map.

### Data

`Data` = `any`

Payload.
