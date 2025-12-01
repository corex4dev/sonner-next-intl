---
editUrl: false
next: false
prev: false
title: "PromiseTExtendedResult"
---

> **PromiseTExtendedResult**\<`M`, `Data`\> = [`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\> \| (`data`) => [`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\> \| `Promise`\<[`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\>\>

Defined in: [packages/sonner-next-intl/src/types.ts:137](https://github.com/corex4dev/sonner-next-intl/blob/bb285e98b60d7da52c9521a5f5e2eecb85012b95/packages/sonner-next-intl/src/types.ts#L137)

Promise-based result factory or resolved structure.

## Type Parameters

### M

`M` *extends* [`LocalMessages`](/reference/type-aliases/localmessages/)

Messages map.

### Data

`Data` = `any`

Payload.
