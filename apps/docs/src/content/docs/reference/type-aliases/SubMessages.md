---
editUrl: false
next: false
prev: false
title: "SubMessages"
---

> **SubMessages**\<`M`, `N`\> = \[`N`\] *extends* \[`undefined`\] ? `M` : `NestedValueOf`\<\{ `!`: `M`; \}, `` `!.${N}` ``\>

Defined in: [packages/sonner-next-intl/src/types.ts:32](https://github.com/corex4dev/sonner-next-intl/blob/bb285e98b60d7da52c9521a5f5e2eecb85012b95/packages/sonner-next-intl/src/types.ts#L32)

Extracts messages inside a specific namespace.

## Type Parameters

### M

`M` *extends* `Record`\<`string`, `any`\>

Messages map.

### N

`N` *extends* `NamespaceKeys`\<`M`, `NestedKeyOf`\<`M`\>\> \| `undefined`

Optional namespace key.
