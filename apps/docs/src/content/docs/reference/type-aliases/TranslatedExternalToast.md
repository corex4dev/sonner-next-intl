---
editUrl: false
next: false
prev: false
title: "TranslatedExternalToast"
---

> **TranslatedExternalToast**\<`T`\> = `Omit`\<`ExternalToast`, `"description"`\> & `object`

Defined in: [packages/sonner-next-intl/src/types.ts:111](https://github.com/corex4dev/sonner-next-intl/blob/bb285e98b60d7da52c9521a5f5e2eecb85012b95/packages/sonner-next-intl/src/types.ts#L111)

Toast data including translated description.

## Type Declaration

### description?

> `optional` **description**: [`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

Messages map.
