# **sonner-next-intl**

![NPM Version](https://img.shields.io/npm/v/sonner-next-intl.svg)
![NPM Downloads](https://img.shields.io/npm/dm/sonner-next-intl.svg)
![NPM License](https://img.shields.io/npm/l/sonner-next-intl.svg)
![NPM Bundle Size](https://img.shields.io/bundlephobia/min/sonner-next-intl)
![NPM Bundle Size (GZIP)](https://img.shields.io/bundlephobia/minzip/sonner-next-intl)
![NPM Types](https://img.shields.io/npm/types/sonner-next-intl)

![Maintained by CoreX4Dev](https://img.shields.io/badge/maintained%20by-CoreX4Dev-blue)

A strongly typed wrapper to integrate **Sonner** with **next-intl**,
enabling fully translated toasts with autocomplete for message keys,
data typing, and formatting.

This package provides:

- `createUseTranslatedToast` --- A factory that generates a strongly
  typed `useTranslatedToast` hook based on your application's message
  schema.
- `SonnerNextIntlProvider` --- A provider exposing to your React tree:
  - the original `sonner` toast API\
  - the `next-intl` translator\
  - your localized messages\
- Fully typed utilities for translated toast messages
  (`TranslatedMessage`, `PromiseData`, `TranslatedExternalToast`,
  etc.)

Perfect for **Next.js App Router** applications using **next-intl**,
where a fully consistent multilingual toast system is required.

---

## 🚀 Installation

### npm

```bash
npm install sonner-next-intl sonner next-intl
```

### pnpm

```bash
pnpm add sonner-next-intl sonner next-intl
```

---

## 📦 Basic Usage

### 1. **Create your typed hook**

```ts
// hooks/useTranslatedToast.ts
import { createUseTranslatedToast } from "sonner-next-intl";
import AppMessages from "@/messages/en.json";

export const useTranslatedToast =
  createUseTranslatedToast<typeof AppMessages>();
```

---

### 2. **Wrap your application with the provider**

```tsx
// app/providers.tsx
"use client";

import { PropsWithChildren } from "react";
import { SonnerNextIntlProvider } from "sonner-next-intl";
import { toast } from "sonner";
import { useTranslations, useMessages } from "next-intl";

export default function Providers({ children }: PropsWithChildren) {
  const t = useTranslations();
  const messages = useMessages();

  return (
    <SonnerNextIntlProvider toast={toast} messages={messages} translator={t}>
      {children}
    </SonnerNextIntlProvider>
  );
}
```

---

### 3. **Use the hook inside components**

```tsx
"use client";

import { useTranslatedToast } from "@/hooks/useTranslatedToast";

export default function Example() {
  const { toast } = useTranslatedToast({
    notificationsRoot: "notifications",
  });

  return (
    <button onClick={() => toast.success({ key: "savedSuccessfully" })}>
      Save
    </button>
  );
}
```

---

## 🧩 Message Example

```json
{
  "notifications": {
    "savedSuccessfully": "Saved correctly!",
    "errorOccurred": "Something went wrong."
  }
}
```

---

## 📄 License

MIT
