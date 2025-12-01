---
editUrl: false
next: false
prev: false
title: "TranslatedMessage"
---

> **TranslatedMessage**\<`T`\> = `object` & \{ `data?`: `Record`\<`string`, `string` \| `number` \| `Date`\>; `type?`: `"regular"` \| `never`; \} \| \{ `data?`: `never`; `formats?`: `never`; `type?`: `"raw"`; \} \| \{ `data?`: `Record`\<`string`, `string` \| `number` \| `RichTagsFunction` \| `Date`\>; `type?`: `"rich"`; \} \| \{ `data?`: `Record`\<`string`, `string` \| `number` \| `Date` \| `MarkupTagsFunction`\>; `type?`: `"markup"`; \}

Defined in: [packages/sonner-next-intl/src/types.ts:77](https://github.com/corex4dev/sonner-next-intl/blob/bb285e98b60d7da52c9521a5f5e2eecb85012b95/packages/sonner-next-intl/src/types.ts#L77)

Describes a translation-ready message used by a toast.

## Type Declaration

### formats?

> `optional` **formats**: `Formats`

Optional formatting rules.

### key

> **key**: `NamespacedMessageKeys`\<`T`\>

Message key including namespace.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

Messages map.
