/**
 * Type utilities powering translation-typed toasts for Sonner + next-intl.
 *
 * @module types
 */

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

/**
 * Alias for message dictionaries used by next-intl.
 *
 * @template M - Messages map.
 */
export type LocalMessages<M extends Record<string, any> = Record<string, any>> =
  M;

/**
 * Extracts messages inside a specific namespace.
 *
 * @template M - Messages map.
 * @template N - Optional namespace key.
 */
export type SubMessages<
  M extends Record<string, any>,
  N extends NamespaceKeys<M, NestedKeyOf<M>> | undefined,
> = [N] extends [undefined] ? M : NestedValueOf<{ "!": M }, `!.${N}`>;

/**
 * Utility to extract all message keys of a namespace.
 *
 * @template TranslatorMessages - Message map.
 * @template Namespace - Namespace key.
 */
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

/**
 * Configuration options for initializing translated toast utilities.
 *
 * @template M - Messages map.
 */
export type ConfigOptions<M extends Record<string, any>> = {
  /** Root namespace for notifications. */
  notificationsRoot?: NamespaceKeys<M, NestedKeyOf<M>>;
};

/**
 * Describes a translation-ready message used by a toast.
 *
 * @template T - Messages map.
 */
export type TranslatedMessage<T extends Record<string, any>> = {
  /** Message key including namespace. */
  key: NamespacedMessageKeys<T>;
  /** Optional formatting rules. */
  formats?: Formats;
} & (
  | {
      type?: "regular" | never;
      data?: Record<string, string | number | Date> | undefined;
    }
  | {
      type?: "raw";
      data?: never;
      formats?: never;
    }
  | {
      type?: "rich";
      data?:
        | Record<string, string | number | RichTagsFunction | Date>
        | undefined;
    }
  | {
      type?: "markup";
      data?:
        | Record<string, string | number | Date | MarkupTagsFunction>
        | undefined;
    }
);

/**
 * Toast data including translated description.
 *
 * @template T - Messages map.
 */
export type TranslatedExternalToast<T extends Record<string, any>> = Omit<
  ExternalToast,
  "description"
> & {
  description?: TranslatedMessage<T>;
};

/** Promise-like utility type. */
export type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>);

/**
 * Result structure returned from promise-based translated toasts.
 *
 * @template T - Messages map.
 */
export interface PromiseIExtendedResult<T extends Record<string, any>>
  extends TranslatedExternalToast<T> {
  message: TranslatedMessage<T>;
}

/**
 * Promise-based result factory or resolved structure.
 *
 * @template M - Messages map.
 * @template Data - Payload.
 */
export type PromiseTExtendedResult<M extends LocalMessages, Data = any> =
  | PromiseIExtendedResult<M>
  | ((
      data: Data
    ) => PromiseIExtendedResult<M> | Promise<PromiseIExtendedResult<M>>);

/** External toast without description. */
export type PromiseExternalToast = Omit<ExternalToast, "description">;

/**
 * Configuration for toast.promise with translated messages.
 *
 * @template T - Messages map.
 * @template ToastData - Payload.
 */
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

/**
 * API for generating translated toasts.
 *
 * @template T - Messages map.
 */
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
};
