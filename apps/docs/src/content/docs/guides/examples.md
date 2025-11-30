---
title: Examples
---

# Usage examples

Below are practical examples for common scenarios.

## Basic success toast

```tsx
"use client";
import React from "react";
import { useTranslatedToast } from "~/lib/toasts";

export default function SaveButton() {
  const { toast } = useTranslatedToast();

  function onSaved() {
    toast.success({
      key: "notifications.saved",
      type: "regular",
      data: { name: "Alice" },
    });
  }

  return <button onClick={onSaved}>Save</button>;
}
```

**Notes**:

- The wrapper will call the configured translator under the hood and forward the resolved string (or node) to Sonner.
- `data` is optional and maps to translation interpolation.

## Using `notificationsRoot` for namespacing

If your application keeps notifications under a dedicated namespace (e.g. `notifications`), you can pass `notificationsRoot` when calling the `useTranslatedToast` hook. This prefix will be prepended to all message keys passed to the toast methods.

```ts
const { toast } = useTranslatedToast({ notificationsRoot: "notifications" });

toast.info({ key: "updateAvailable", type: "regular" });
// actual key used by translator: 'notifications.updateAvailable'
```

This is handy to avoid repeating the `notifications.` prefix across your codebase.

## Rich / markup / raw translations

`next-intl` supports several output modes. The wrapper forwards through the `type` field:

- `type: 'rich'` — use rich tag functions (translator returns React nodes).
- `type: 'markup'` — returns markup string (useful if Sonner supports HTML strings).
- `type: 'raw'` — returns raw string without interpolation.

Example — rich:

```tsx
toast.custom((id) => (
  <div>
    <h4>{translator("notifications.titleWithRich")}</h4>
    <div>
      {translator.rich("notifications.richDescription", {
        bold: (chunks) => <strong>{chunks}</strong>,
      })}
    </div>
  </div>
));
```

But in most cases you will use the typed `TranslatedMessage` descriptor instead:

```ts
toast.info({
  key: "notifications.richDescription",
  type: "rich",
  data: { user: "Bob" },
});
```

## `toast.promise` with translated results

The wrapper supports Sonner's `promise` accepting translated descriptors for `loading`, `success`, `error` and `description`.

```ts
const fetchData = async () => {
  // some async op
};

toast.promise(fetchData(), {
  loading: { key: "notifications.loading", type: "regular" },
  success: async (data) => ({
    message: {
      key: "notifications.successSaved",
      type: "regular",
      data: { count: data.count },
    },
  }),
  error: (err) => ({
    message: { key: "notifications.failed", type: "regular" },
  }),
});
```

The wrapper cleanly handles both static objects and functions that return objects, and translates messages returned from async resolvers.

## Custom JSX toasts

If you want full control over markup, use `toast.custom`. You can still provide a translated `description` in the `data` argument for Sonner:

```tsx
toast.custom(
  (id) => (
    <div className="my-toast">
      <h3>{translator("notifications.customTitle")}</h3>
    </div>
  ),
  {
    description: { key: "notifications.customDescription", type: "markup" },
  }
);
```

The wrapper will translate `description` before passing it.

---
