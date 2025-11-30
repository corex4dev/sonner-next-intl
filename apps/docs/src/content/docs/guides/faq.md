---
title: FAQ
---

# FAQ

**Q: Where should I call `createUseTranslatedToast`?**
A: Once per project (for example `src/lib/toasts.ts`). It returns the hook factory you import in components.

**Q: Does this package render Sonner UI?**
A: No — it only translates descriptors and calls Sonner's API. You still mount Sonner's `<Toaster />` or equivalent in your app.

**Q: Can I use this with server components?**
A: Translation and Sonner are client-side concerns. Use the hook inside client components and provide the `SonnerNextIntlProvider` from a client-level provider.
