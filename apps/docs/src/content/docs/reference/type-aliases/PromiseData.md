---
editUrl: false
next: false
prev: false
title: "PromiseData"
---

> **PromiseData**\<`T`, `ToastData`\> = [`PromiseExternalToast`](/reference/type-aliases/promiseexternaltoast/) & `object`

Defined in: [packages/sonner-next-intl/src/types.ts:152](https://github.com/corex4dev/sonner-next-intl/blob/5e49049622b92ee2f2cb88aa4ed3f4a4111707c9/packages/sonner-next-intl/src/types.ts#L152)

Configuration for toast.promise with translated messages.

## Type Declaration

### description?

> `optional` **description**: [`PromiseTExtendedResult`](/reference/type-aliases/promisetextendedresult/)\<`T`\>

### error?

> `optional` **error**: [`PromiseTExtendedResult`](/reference/type-aliases/promisetextendedresult/)\<`T`\>

### finally()?

> `optional` **finally**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

### loading?

> `optional` **loading**: [`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

### success?

> `optional` **success**: [`PromiseTExtendedResult`](/reference/type-aliases/promisetextendedresult/)\<`T`, `ToastData`\>

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

Messages map.

### ToastData

`ToastData` = `any`

Payload.
