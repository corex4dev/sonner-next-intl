---
editUrl: false
next: false
prev: false
title: "createUseTranslatedToast"
---

> **createUseTranslatedToast**\<`M`\>(): \<`N`\>(`options?`) => `object`

Defined in: [packages/sonner-next-intl/src/index.ts:45](https://github.com/corex4dev/sonner-next-intl/blob/5e49049622b92ee2f2cb88aa4ed3f4a4111707c9/packages/sonner-next-intl/src/index.ts#L45)

Factory that creates a `useTranslatedToast` hook for a particular messages
shape `M`. You should call this once per project/library where `M` represents
the full messages object for your locale(s).

## Type Parameters

### M

`M` *extends* `Record`\<`string`, `any`\>

The top-level messages record for your application.

## Returns

A hook factory `useTranslatedToast` scoped to `M`.

> \<`N`\>(`options?`): `object`

Hook that provides a `toast` object with methods adapted to translated
messages.

The hook accepts an optional `options` object that mirrors
`ConfigOptions<M>` and lets you provide a `notificationsRoot` namespace to
prefix all message keys used for toast titles/descriptions.

### Type Parameters

#### N

`N` *extends* `string` \| `undefined` = `undefined`

Optional namespace key inside `M` that will be used to scope
              (prefix) message keys for notifications.

### Parameters

#### options?

[`ConfigOptions`](/reference/type-aliases/configoptions/)\<`M`\> & `object`

Optional configuration.

### Returns

An object with the `toast` API bound.

#### toast

> **toast**: [`TranslatedToast`](/reference/type-aliases/translatedtoast/)\<[`SubMessages`](/reference/type-aliases/submessages/)\<`M`, `N`\>\>

The final `toast` object that mirrors `sonner` but accepts typed
`TranslatedMessage` descriptors. We use `Object.assign` to create a callable
function (the default toast call) and attach the convenience methods.

### Example

```ts
const { toast } = useTranslatedToast({ notificationsRoot: 'notifications' });
toast.success({ key: 'success.saved' });
```

## Example

```ts
// In your library bootstrap:
export const useTranslatedToast = createUseTranslatedToast<AppMessages>();
```
