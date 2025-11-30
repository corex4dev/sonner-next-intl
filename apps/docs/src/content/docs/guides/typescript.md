---
title: Typescript tips
---

# TypeScript tips & troubleshooting

### Ensure `AppMessages` matches your next-intl message shape

The factory `createUseTranslatedToast<AppMessages>()` should receive the same shape you use with `next-intl` types. That makes `key` strongly typed and improves DX in editors.

### Common type errors

- **`key` not assignable**: Make sure your `AppMessages` generic matches the actual messages shape. If you use nested namespaces, ensure the type exposes nested keys.
- **Translator method not found at runtime**: The provider expects a real `translator` from `next-intl` — not a lightweight mock. For tests you can use `createTranslator({ locale: 'en', messages })`.

### `notificationsRoot` mismatches

If you pass a `notificationsRoot` that isn't present in your messages type, TypeScript will complain. Either update your messages type or omit `notificationsRoot` and include the full namespaced key in `key` values.
