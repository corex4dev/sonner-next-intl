---
editUrl: false
next: false
prev: false
title: "PromiseTExtendedResult"
---

> **PromiseTExtendedResult**\<`M`, `Data`\> = [`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\> \| (`data`) => [`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\> \| `Promise`\<[`PromiseIExtendedResult`](/reference/interfaces/promiseiextendedresult/)\<`M`\>\>

Defined in: [packages/sonner-next-intl/src/types.ts:137](https://github.com/corex4dev/sonner-next-intl/blob/b92a7dfb0de60c889b4f84507b68d987462f35c7/packages/sonner-next-intl/src/types.ts#L137)

Promise-based result factory or resolved structure.

## Type Parameters

### M

`M` *extends* [`LocalMessages`](/reference/type-aliases/localmessages/)

Messages map.

### Data

`Data` = `any`

Payload.
