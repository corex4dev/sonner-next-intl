import { _Translator, createTranslator } from "next-intl";
import { createContext, PropsWithChildren, useContext } from "react";
import { toast } from "sonner";

/**
 * Context shape used by the provider and hook.
 *
 * @template M - The shape of the messages object for translations.
 */
export type ContextType<M extends Record<string, any>> = {
  /** The `sonner` toast API that will be exposed to consumers. */
  toast: typeof toast;
  /** The localized messages object used by `next-intl`. */
  messages: M;
  /** A translator instance created by `next-intl`.
   *
   * The generic is left permissive because `next-intl` types often use complex
   * generics. Consumers should provide a more strict type when using the hook.
   */
  translator: _Translator<any, string>;
};

/**
 * Default translator used as a fallback for the context default value.
 *
 * Using `createTranslator` with locale `en` gives a safe default to avoid
 * runtime errors when the context is consumed outside a provider in tests or
 * edge-cases.
 */
const defaultTranslator = createTranslator({ locale: "en" }) as _Translator<
  any,
  string
>;

/**
 * React Context that stores the toast API, messages and translator.
 *
 * This context is intentionally permissive (`any`) for the default value. When
 * you use the exported `useConfig` hook you can (and should) specify a stricter
 * messages shape.
 */
const LocalContext = createContext<ContextType<any>>({
  toast,
  messages: {} as any,
  translator: defaultTranslator,
});

/**
 * Hook to access the Sonner/next-intl configuration from the React tree.
 *
 * Use this hook inside components to read the configured `toast`, `messages`
 * and `translator` values.
 *
 * @template M - The expected shape of the localized messages object. Provide
 * an explicit type to enable type-safe message keys in your code.
 *
 * @returns {ContextType<M>} The current configuration stored in context.
 *
 * @example
 * ```ts
 * const { toast, translator } = useConfig<{ common: { ok: string } }>();
 * const message = translator('common.ok');
 * toast.success({ title: message });
 * ```
 */
export const useConfig = <M extends Record<string, any>>() =>
  useContext(LocalContext) as ContextType<M>;

/**
 * Provider component that wires `sonner` plus `next-intl` translator into the
 * React context for descendant components to consume via `useConfig`.
 *
 * The component expects the full context shape as props. This design keeps the
 * provider API explicit and simple: you pass a `toast` implementation, the
 * `messages` object for the current locale and a `translator` instance.
 *
 * @template M - The shape of the `messages` object for translations.
 *
 * @param {object} props - Props for the provider.
 * @param {typeof toast} props.toast - The `sonner` toast implementation to expose.
 * @param {M} props.messages - The localized messages object for the active locale.
 * @param {_Translator<any, string>} props.translator - A `next-intl` translator instance.
 * @param {React.ReactNode} props.children - React children that will receive the context.
 *
 * @returns {JSX.Element} The provider wrapping the children.
 *
 * @example
 * ```tsx
 * <SonnerNextIntlProvider
 *   toast={toast}
 *   messages={messages}
 *   translator={translator}
 * >
 *   <App />
 * </SonnerNextIntlProvider>
 * ```
 */
export const SonnerNextIntlProvider = <M extends Record<string, any>>({
  toast: sonner,
  messages,
  translator,
  children,
}: PropsWithChildren & ContextType<M>) => {
  return (
    <LocalContext.Provider value={{ toast: sonner, messages, translator }}>
      {children}
    </LocalContext.Provider>
  );
};
