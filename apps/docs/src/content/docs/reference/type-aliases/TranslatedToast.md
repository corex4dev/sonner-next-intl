---
editUrl: false
next: false
prev: false
title: "TranslatedToast"
---

> **TranslatedToast**\<`T`\> = (`message`, `data?`) => `string` \| `number` & `object`

Defined in: [packages/sonner-next-intl/src/types.ts:168](https://github.com/corex4dev/sonner-next-intl/blob/bb285e98b60d7da52c9521a5f5e2eecb85012b95/packages/sonner-next-intl/src/types.ts#L168)

API for generating translated toasts.

## Type Declaration

### custom()

> **custom**: (`jsx`, `data?`) => `string` \| `number`

#### Parameters

##### jsx

(`id`) => `React.ReactElement`

##### data?

[`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

#### Returns

`string` \| `number`

### dismiss()

> **dismiss**: (`id?`) => `string` \| `number`

#### Parameters

##### id?

`number` | `string`

#### Returns

`string` \| `number`

### error()

> **error**: (`message`, `data?`) => `string` \| `number`

#### Parameters

##### message

[`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

##### data?

[`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

#### Returns

`string` \| `number`

### info()

> **info**: (`message`, `data?`) => `string` \| `number`

#### Parameters

##### message

[`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

##### data?

[`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

#### Returns

`string` \| `number`

### loading()

> **loading**: (`message`, `data?`) => `string` \| `number`

#### Parameters

##### message

[`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

##### data?

[`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

#### Returns

`string` \| `number`

### message()

> **message**: (`message`, `data?`) => `string` \| `number`

#### Parameters

##### message

[`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

##### data?

[`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

#### Returns

`string` \| `number`

### promise()

> **promise**: \<`ToastData`\>(`promise`, `data?`) => `string` & `object` \| `number` & `object` \| \{ `unwrap`: () => `Promise`\<`ToastData`\>; \}

#### Type Parameters

##### ToastData

`ToastData`

#### Parameters

##### promise

[`PromiseT`](/reference/type-aliases/promiset/)\<`ToastData`\>

##### data?

[`PromiseData`](/reference/type-aliases/promisedata/)\<`T`, `ToastData`\>

#### Returns

`string` & `object` \| `number` & `object` \| \{ `unwrap`: () => `Promise`\<`ToastData`\>; \}

### success()

> **success**: (`message`, `data?`) => `string` \| `number`

#### Parameters

##### message

[`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

##### data?

[`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

#### Returns

`string` \| `number`

### warning()

> **warning**: (`message`, `data?`) => `string` \| `number`

#### Parameters

##### message

[`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

##### data?

[`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

#### Returns

`string` \| `number`

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

Messages map.
