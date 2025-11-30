/**
 * createUseTranslatedToast
 *
 * Utility that creates a typed React hook to produce translated Sonner toasts
 * using a `next-intl` translator instance and the `sonner` API exposed by the
 * `useConfig` hook.
 *
 * The hook returned by `createUseTranslatedToast` is generic over your project's
 * message shape (M). It returns a `useTranslatedToast` hook that optionally can
 * be scoped to a namespace (N). The `useTranslatedToast` hook exposes a `toast`
 * object with the same API as `sonner` but accepting `TranslatedMessage` typed
 * objects (message keys, data and formats) instead of raw strings.
 *
 * JSDoc is intentionally descriptive so consumers of the library can read
 * parameter and return types in editors and generate documentation.
 *
 * @module createUseTranslatedToast
 */

import {
  ConfigOptions,
  SubMessages,
  TranslatedMessage,
  TranslatedToast,
} from "./types";
import { useConfig, SonnerNextIntlProvider } from "./context";
import type { _Translator, NamespaceKeys, NestedKeyOf } from "next-intl";

export * from "./types";

/**
 * Factory that creates a `useTranslatedToast` hook for a particular messages
 * shape `M`. You should call this once per project/library where `M` represents
 * the full messages object for your locale(s).
 *
 * @template M - The top-level messages record for your application.
 * @returns A hook factory `useTranslatedToast` scoped to `M`.
 *
 * @example
 * ```ts
 * // In your library bootstrap:
 * export const useTranslatedToast = createUseTranslatedToast<AppMessages>();
 * ```
 */
const createUseTranslatedToast = <M extends Record<string, any>>() => {
  /**
   * Hook that provides a `toast` object with methods adapted to translated
   * messages.
   *
   * The hook accepts an optional `options` object that mirrors
   * `ConfigOptions<M>` and lets you provide a `notificationsRoot` namespace to
   * prefix all message keys used for toast titles/descriptions.
   *
   * @template N - Optional namespace key inside `M` that will be used to scope
   *               (prefix) message keys for notifications.
   * @param {ConfigOptions<M> & { notificationsRoot?: N }} [options] - Optional configuration.
   * @returns {{ toast: TranslatedToast<Sub> }} An object with the `toast` API bound.
   *
   * @example
   * ```ts
   * const { toast } = useTranslatedToast({ notificationsRoot: 'notifications' });
   * toast.success({ key: 'success.saved' });
   * ```
   */
  const useTranslatedToast = <
    N extends NamespaceKeys<M, NestedKeyOf<M>> | undefined = undefined,
  >(
    options?: ConfigOptions<M> & { notificationsRoot?: N }
  ) => {
    // Pull the sonner toast, next-intl translator and messages from the context.
    const { toast: sonner, translator: t, messages } = useConfig<M>();
    // Compute a typed alias for the optional namespace subset.
    type Sub = SubMessages<M, N>;

    /**
     * Internal helper to translate a `TranslatedMessage` into a string or rich result
     * using the provided `next-intl` translator.
     *
     * The function inspects the `type` field of the `TranslatedMessage` and
     * delegates to the appropriate translator method (`markup`, `raw`, `rich`
     * or the default formatter).
     *
     * @param {_Translator<Record<string, any>, string>} t - Translator instance from next-intl.
     * @param {TranslatedMessage<Record<string, any>>} msg - The translated message descriptor.
     * @param {string} [prefix] - Optional namespace prefix to be prepended to the key.
     * @returns {string | React.ReactNode} The translated value ready to pass to sonner.
     */
    const translate = (
      t: _Translator<Record<string, any>, string>,
      { key, data, formats, type }: TranslatedMessage<Record<string, any>>,
      prefix?: string
    ) => {
      let action: any = t;
      if (type) {
        switch (type) {
          case "markup":
            action = t.markup;
            break;
          case "raw":
            action = t.raw;
            break;
          case "rich":
            action = t.rich;
            break;
          default:
            action = t;
        }
      }
      return action(`${prefix ? `${prefix}.` : ""}${key}`, data, formats);
    };

    /**
     * Small wrapper that conditionally translates an `ExternalToast.description`
     * (which in our typed API is a `TranslatedMessage`) into the concrete value
     * expected by `sonner`. Returns `undefined` if the description is absent.
     *
     * @param {any} d - The partial toast object that may contain a `description` field.
     * @returns {any | undefined} Translated description or `undefined`.
     */
    const wrapDescription = (d: any) =>
      d?.description
        ? translate(t as any, d.description, options?.notificationsRoot as any)
        : undefined;

    // Each of the following functions maps the translated-typed API to sonner.

    const success: TranslatedToast<Sub>["success"] = (m, d) =>
      sonner.success(
        translate(t as any, m as any, options?.notificationsRoot as any),
        {
          ...d,
          description: d?.description
            ? translate(
                t as any,
                d.description as any,
                options?.notificationsRoot as any
              )
            : undefined,
        }
      );

    const info: TranslatedToast<Sub>["info"] = (m, d) =>
      sonner.info(
        translate(t as any, m as any, options?.notificationsRoot as any),
        {
          ...d,
          description: wrapDescription(d),
        }
      );

    const warning: TranslatedToast<Sub>["warning"] = (m, d) =>
      sonner.warning(
        translate(t as any, m as any, options?.notificationsRoot as any),
        {
          ...d,
          description: wrapDescription(d),
        }
      );

    const error: TranslatedToast<Sub>["error"] = (m, d) =>
      sonner.error(
        translate(t as any, m as any, options?.notificationsRoot as any),
        {
          ...d,
          description: wrapDescription(d),
        }
      );

    const custom: TranslatedToast<Sub>["custom"] = (jsx, d) =>
      sonner.custom(jsx, {
        ...d,
        description: wrapDescription(d),
      });

    const message: TranslatedToast<Sub>["message"] = (m, d) =>
      sonner.message(
        translate(t as any, m as any, options?.notificationsRoot as any),
        {
          ...d,
          description: wrapDescription(d),
        }
      );

    const promise: TranslatedToast<Sub>["promise"] = (p, d) =>
      sonner.promise(p as any, {
        ...d,
        loading: d?.loading
          ? translate(
              t as any,
              d.loading as any,
              options?.notificationsRoot as any
            )
          : undefined,
        success: async (data: any) =>
          d?.success
            ? typeof d.success === "function"
              ? translate(
                  t as any,
                  (await d.success(data)).message as any,
                  options?.notificationsRoot as any
                )
              : translate(
                  t as any,
                  (d.success as any).message as any,
                  options?.notificationsRoot as any
                )
            : undefined,
        error: async (data: any) =>
          d?.error
            ? typeof d.error === "function"
              ? translate(
                  t as any,
                  (await d.error(data)).message as any,
                  options?.notificationsRoot as any
                )
              : translate(
                  t as any,
                  (d.error as any).message as any,
                  options?.notificationsRoot as any
                )
            : undefined,
        description: async (data: any) =>
          d?.description
            ? typeof d.description === "function"
              ? translate(
                  t as any,
                  (await d.description(data)).message as any,
                  options?.notificationsRoot as any
                )
              : translate(
                  t as any,
                  (d.description as any).message as any,
                  options?.notificationsRoot as any
                )
            : undefined,
      });

    const dismiss: TranslatedToast<Sub>["dismiss"] = (m) => sonner.dismiss(m);

    const loading: TranslatedToast<Sub>["loading"] = (m, d) =>
      sonner.loading(
        translate(t as any, m as any, options?.notificationsRoot as any),
        {
          ...d,
          description: wrapDescription(d),
        }
      );

    /**
     * The final `toast` object that mirrors `sonner` but accepts typed
     * `TranslatedMessage` descriptors. We use `Object.assign` to create a callable
     * function (the default toast call) and attach the convenience methods.
     *
     * @type {TranslatedToast<Sub>}
     */
    const toast: TranslatedToast<Sub> = Object.assign(
      (m: Parameters<TranslatedToast<Sub>>[0], d?: any) =>
        sonner(
          translate(t as any, m as any, options?.notificationsRoot as any),
          {
            ...d,
            description: wrapDescription(d),
          }
        ),
      {
        success,
        info,
        warning,
        error,
        custom,
        message,
        promise,
        dismiss,
        loading,
      }
    );

    return { toast };
  };

  return useTranslatedToast;
};

export { createUseTranslatedToast, SonnerNextIntlProvider };
