import {
  ConfigOptions,
  SubMessages,
  TranslatedMessage,
  TranslatedToast,
} from "./types";
import { useConfig, SonnerNextIntlProvider } from "./context";
import type { _Translator, NamespaceKeys, NestedKeyOf } from "next-intl";

export * from "./types";

const createUseTranslatedToast = <M extends Record<string, any>>() => {
  const useTranslatedToast = <
    N extends NamespaceKeys<M, NestedKeyOf<M>> | undefined = undefined,
  >(
    options?: ConfigOptions<M> & { notificationsRoot?: N }
  ) => {
    const { toast: sonner, translator: t, messages } = useConfig<M>();
    type Sub = SubMessages<M, N>;

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

    const wrapDescription = (d: any) =>
      d?.description
        ? translate(t as any, d.description, options?.notificationsRoot as any)
        : undefined;

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

    const check: TranslatedToast<Sub>["check"] = ({ test }) => {
      // ejemplo de comprobación; opcional
      // TypeScript ya infiere que test es Keys válidas para M (o su namespace)
      return;
    };

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
        check,
      }
    );

    return { toast };
  };

  return useTranslatedToast;
};

export { createUseTranslatedToast, SonnerNextIntlProvider };
