import { _Translator, createTranslator } from "next-intl";
import { createContext, PropsWithChildren, useContext } from "react";
import { toast } from "sonner";

export type ContextType<M extends Record<string, any>> = {
  toast: typeof toast;
  messages: M;
  translator: _Translator<any, string>;
};

const defaultTranslator = createTranslator({ locale: "en" }) as _Translator<
  any,
  string
>;
const LocalContext = createContext<ContextType<any>>({
  toast,
  messages: {} as any,
  translator: defaultTranslator,
});

export const useConfig = <M extends Record<string, any>>() =>
  useContext(LocalContext) as ContextType<M>;

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
