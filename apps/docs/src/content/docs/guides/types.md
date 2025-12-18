---
title: Types
---

# Concepts & types (brief)

- `createUseTranslatedToast<M>()` — _factory_ that returns a typed `useTranslatedToast` hook bound to your app messages type `M`.
- `useTranslatedToast(options?)` — hook returned by factory; returns `{ toast }` where `toast` has the same methods as Sonner but expects `TranslatedMessage<T>` objects.
- `TranslatedMessage<T>` — a string or the descriptor you pass instead of a string. Shape:

  ```ts
  { key: NamespacedKey, type: 'regular' | 'raw' | 'rich' | 'markup', data?: Record<string, any>, formats?: Formats }
  ```

  - `regular` — normal interpolated string using `translator(key, data, formats)`
  - `raw` — `t.raw(key)` (no data/formats)
  - `rich` — `t.rich(key, data)` (returns React nodes via next-intl rich tags)
  - `markup` — `t.markup(key, data)` (returns markup string)

- `notificationsRoot` (ConfigOptions) — optional namespace key to prefix message keys for all toast titles/descriptions.

Read the [Full API Reference](/reference/readme) for more details.
