---
editUrl: false
next: false
prev: false
title: "sonner-next-intl"
---

createUseTranslatedToast

Utility that creates a typed React hook to produce translated Sonner toasts
using a `next-intl` translator instance and the `sonner` API exposed by the
`useConfig` hook.

The hook returned by `createUseTranslatedToast` is generic over your project's
message shape (M). It returns a `useTranslatedToast` hook that optionally can
be scoped to a namespace (N). The `useTranslatedToast` hook exposes a `toast`
object with the same API as `sonner` but accepting `TranslatedMessage` typed
objects (message keys, data and formats) instead of raw strings.

JSDoc is intentionally descriptive so consumers of the library can read
parameter and return types in editors and generate documentation.

## Interfaces

- [PromiseIExtendedResult](/reference/interfaces/promiseiextendedresult/)

## Type Aliases

- [ConfigOptions](/reference/type-aliases/configoptions/)
- [LocalMessages](/reference/type-aliases/localmessages/)
- [PromiseData](/reference/type-aliases/promisedata/)
- [PromiseExternalToast](/reference/type-aliases/promiseexternaltoast/)
- [PromiseT](/reference/type-aliases/promiset/)
- [PromiseTExtendedResult](/reference/type-aliases/promisetextendedresult/)
- [SubMessages](/reference/type-aliases/submessages/)
- [TranslatedExternalToast](/reference/type-aliases/translatedexternaltoast/)
- [TranslatedMessage](/reference/type-aliases/translatedmessage/)
- [TranslatedToast](/reference/type-aliases/translatedtoast/)

## Functions

- [createUseTranslatedToast](/reference/functions/createusetranslatedtoast/)
- [SonnerNextIntlProvider](/reference/functions/sonnernextintlprovider/)
