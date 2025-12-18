---
editUrl: false
next: false
prev: false
title: "SubMessages"
---

> **SubMessages**\<`M`, `N`\> = \[`N`\] *extends* \[`undefined`\] ? `M` : `NestedValueOf`\<\{ `!`: `M`; \}, `` `!.${N}` ``\>

Defined in: [packages/sonner-next-intl/src/types.ts:32](https://github.com/corex4dev/sonner-next-intl/blob/5e49049622b92ee2f2cb88aa4ed3f4a4111707c9/packages/sonner-next-intl/src/types.ts#L32)

Extracts messages inside a specific namespace.

## Type Parameters

### M

`M` *extends* `Record`\<`string`, `any`\>

Messages map.

### N

`N` *extends* `NamespaceKeys`\<`M`, `NestedKeyOf`\<`M`\>\> \| `undefined`

Optional namespace key.
