---
title: Overview
description: Translate Sonner toasts using next-intl inside the Next.js App Router.
---

# Overview

This package provides a small wrapper that maps typed translation descriptors to Sonner's toast API using a `next-intl` translator instance. Instead of passing raw strings you pass an object like `{ key: 'notifications.saved', type: 'regular', data: { name } }`. The wrapper translates that at runtime and forwards the translated string (or rich/markup node) to Sonner.

The design goals:

- Keep Sonner usage ergonomic and typed.
- Use `next-intl` translation features (raw, markup, rich) where needed.
- Optional namespace prefixing so all notification keys can live under a single `notifications` namespace.

---

## Contents

- [Installation](/guides/installation)
- [Concepts & types (short)](/guides/types)
- [Usage](/guides/usage)
- [Typical usage examples](/guides/examples)
  - [Simple success/info/error](/guides/examples/#basic-success-toast)
  - [`notificationsRoot` namespacing](/guides/examples/#using-notificationsroot-for-namespacing)
  - [Rich / markup / raw translations](/guides/examples/#rich--markup--raw-translations)
  - [`toast.promise` (translated)](/guides/examples/#toastpromise-with-translated-results)
  - [`custom` JSX toasts](/guides/examples/#custom-jsx-toasts)
- [TypeScript tips and troubleshooting](/guides/typescript)
- [FAQ & migration notes for Next.js 15+](/guides/faq)
- [Contributing](/guides/contributing)
