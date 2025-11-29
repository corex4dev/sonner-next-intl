import type {
  Formats,
  MarkupTagsFunction,
  MessageKeys,
  NamespaceKeys,
  NestedKeyOf,
  NestedValueOf,
  RichTagsFunction,
} from "next-intl";
import type { ExternalToast } from "sonner";

export type LocalMessages<M extends Record<string, any> = Record<string, any>> =
  M;

export type SubMessages<
  M extends Record<string, any>,
  N extends NamespaceKeys<M, NestedKeyOf<M>> | undefined,
> = [N] extends [undefined] ? M : NestedValueOf<{ "!": M }, `!.${N}`>;

type NamespacedMessageKeys<
  TranslatorMessages extends LocalMessages,
  Namespace extends NamespaceKeys<
    TranslatorMessages,
    NestedKeyOf<TranslatorMessages>
  > = never,
> = MessageKeys<
  NestedValueOf<
    { "!": TranslatorMessages },
    [Namespace] extends [never] ? "!" : `!.${Namespace}`
  >,
  NestedKeyOf<
    NestedValueOf<
      { "!": TranslatorMessages },
      [Namespace] extends [never] ? "!" : `!.${Namespace}`
    >
  >
>;

export type ConfigOptions<M extends Record<string, any>> = {
  notificationsRoot?: NamespaceKeys<M, NestedKeyOf<M>>;
};

export type TranslatedMessage<T extends Record<string, any>> = {
  key: NamespacedMessageKeys<T>;
  formats?: Formats;
} & (
  | {
      type: "regular";
      data?: Record<string, string | number | Date> | undefined;
    }
  | {
      type: "raw";
      data?: never;
      formats?: never;
    }
  | {
      type: "rich";
      data?:
        | Record<string, string | number | RichTagsFunction | Date>
        | undefined;
    }
  | {
      type: "markup";
      data?:
        | Record<string, string | number | Date | MarkupTagsFunction>
        | undefined;
    }
);

export type TranslatedExternalToast<T extends Record<string, any>> = Omit<
  ExternalToast,
  "description"
> & {
  description?: TranslatedMessage<T>;
};

export type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>);
export interface PromiseIExtendedResult<T extends Record<string, any>>
  extends TranslatedExternalToast<T> {
  message: TranslatedMessage<T>;
}
export type PromiseTExtendedResult<M extends LocalMessages, Data = any> =
  | PromiseIExtendedResult<M>
  | ((
      data: Data
    ) => PromiseIExtendedResult<M> | Promise<PromiseIExtendedResult<M>>);

export type PromiseExternalToast = Omit<ExternalToast, "description">;

export type PromiseData<
  T extends Record<string, any>,
  ToastData = any,
> = PromiseExternalToast & {
  loading?: TranslatedMessage<T>;
  success?: PromiseTExtendedResult<T, ToastData>;
  error?: PromiseTExtendedResult<T>;
  description?: PromiseTExtendedResult<T>;
  finally?: () => void | Promise<void>;
};

export type TranslatedToast<T extends Record<string, any>> = ((
  message: TranslatedMessage<T>,
  data?: TranslatedExternalToast<T>
) => string | number) & {
  success: (
    message: TranslatedMessage<T>,
    data?: TranslatedExternalToast<T>
  ) => string | number;
  info: (
    message: TranslatedMessage<T>,
    data?: TranslatedExternalToast<T>
  ) => string | number;
  warning: (
    message: TranslatedMessage<T>,
    data?: TranslatedExternalToast<T>
  ) => string | number;
  error: (
    message: TranslatedMessage<T>,
    data?: TranslatedExternalToast<T>
  ) => string | number;
  custom: (
    jsx: (id: number | string) => React.ReactElement,
    data?: TranslatedExternalToast<T>
  ) => string | number;
  message: (
    message: TranslatedMessage<T>,
    data?: TranslatedExternalToast<T>
  ) => string | number;
  promise: <ToastData>(
    promise: PromiseT<ToastData>,
    data?: PromiseData<T, ToastData>
  ) =>
    | (string & { unwrap: () => Promise<ToastData> })
    | (number & { unwrap: () => Promise<ToastData> })
    | { unwrap: () => Promise<ToastData> };
  dismiss: (id?: number | string) => string | number;
  loading: (
    message: TranslatedMessage<T>,
    data?: TranslatedExternalToast<T>
  ) => string | number;
  check: (params: { test: NamespacedMessageKeys<T> }) => void;
};
