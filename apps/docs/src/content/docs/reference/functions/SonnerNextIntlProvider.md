---
editUrl: false
next: false
prev: false
title: "SonnerNextIntlProvider"
---

> **SonnerNextIntlProvider**\<`M`\>(`props`): `Element`

Defined in: [packages/sonner-next-intl/src/context.tsx:98](https://github.com/corex4dev/sonner-next-intl/blob/bb285e98b60d7da52c9521a5f5e2eecb85012b95/packages/sonner-next-intl/src/context.tsx#L98)

Provider component that wires `sonner` plus `next-intl` translator into the
React context for descendant components to consume via `useConfig`.

The component expects the full context shape as props. This design keeps the
provider API explicit and simple: you pass a `toast` implementation, the
`messages` object for the current locale and a `translator` instance.

## Type Parameters

### M

`M` *extends* `Record`\<`string`, `any`\>

The shape of the `messages` object for translations.

## Parameters

### props

`object` & `ContextType`\<`M`\>

Props for the provider.

## Returns

`Element`

The provider wrapping the children.

## Example

```tsx
<SonnerNextIntlProvider
  toast={toast}
  messages={messages}
  translator={translator}
>
  <App />
</SonnerNextIntlProvider>
```
