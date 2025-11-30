---
editUrl: false
next: false
prev: false
title: "PromiseIExtendedResult"
---

Defined in: [packages/sonner-next-intl/src/types.ts:126](https://github.com/corex4dev/sonner-next-intl/blob/b92a7dfb0de60c889b4f84507b68d987462f35c7/packages/sonner-next-intl/src/types.ts#L126)

Result structure returned from promise-based translated toasts.

## Extends

- [`TranslatedExternalToast`](/reference/type-aliases/translatedexternaltoast/)\<`T`\>

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

Messages map.

## Properties

### action?

> `optional` **action**: `ReactNode` \| `Action`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:62

#### Inherited from

`TranslatedExternalToast.action`

***

### actionButtonStyle?

> `optional` **actionButtonStyle**: `CSSProperties`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:68

#### Inherited from

`TranslatedExternalToast.actionButtonStyle`

***

### cancel?

> `optional` **cancel**: `ReactNode` \| `Action`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:63

#### Inherited from

`TranslatedExternalToast.cancel`

***

### cancelButtonStyle?

> `optional` **cancelButtonStyle**: `CSSProperties`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:67

#### Inherited from

`TranslatedExternalToast.cancelButtonStyle`

***

### className?

> `optional` **className**: `string`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:71

#### Inherited from

`TranslatedExternalToast.className`

***

### classNames?

> `optional` **classNames**: `ToastClassnames`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:72

#### Inherited from

`TranslatedExternalToast.classNames`

***

### closeButton?

> `optional` **closeButton**: `boolean`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:57

#### Inherited from

`TranslatedExternalToast.closeButton`

***

### description?

> `optional` **description**: [`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

Defined in: [packages/sonner-next-intl/src/types.ts:115](https://github.com/corex4dev/sonner-next-intl/blob/b92a7dfb0de60c889b4f84507b68d987462f35c7/packages/sonner-next-intl/src/types.ts#L115)

#### Inherited from

`TranslatedExternalToast.description`

***

### descriptionClassName?

> `optional` **descriptionClassName**: `string`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:73

#### Inherited from

`TranslatedExternalToast.descriptionClassName`

***

### dismissible?

> `optional` **dismissible**: `boolean`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:58

#### Inherited from

`TranslatedExternalToast.dismissible`

***

### duration?

> `optional` **duration**: `number`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:60

#### Inherited from

`TranslatedExternalToast.duration`

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:53

#### Inherited from

`TranslatedExternalToast.icon`

***

### id?

> `optional` **id**: `string` \| `number`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:125

#### Inherited from

`TranslatedExternalToast.id`

***

### invert?

> `optional` **invert**: `boolean`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:56

#### Inherited from

`TranslatedExternalToast.invert`

***

### message

> **message**: [`TranslatedMessage`](/reference/type-aliases/translatedmessage/)\<`T`\>

Defined in: [packages/sonner-next-intl/src/types.ts:128](https://github.com/corex4dev/sonner-next-intl/blob/b92a7dfb0de60c889b4f84507b68d987462f35c7/packages/sonner-next-intl/src/types.ts#L128)

***

### onAutoClose()?

> `optional` **onAutoClose**: (`toast`) => `void`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:65

#### Parameters

##### toast

`ToastT`

#### Returns

`void`

#### Inherited from

`TranslatedExternalToast.onAutoClose`

***

### onDismiss()?

> `optional` **onDismiss**: (`toast`) => `void`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:64

#### Parameters

##### toast

`ToastT`

#### Returns

`void`

#### Inherited from

`TranslatedExternalToast.onDismiss`

***

### position?

> `optional` **position**: `Position`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:74

#### Inherited from

`TranslatedExternalToast.position`

***

### richColors?

> `optional` **richColors**: `boolean`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:55

#### Inherited from

`TranslatedExternalToast.richColors`

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:69

#### Inherited from

`TranslatedExternalToast.style`

***

### testId?

> `optional` **testId**: `string`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:75

#### Inherited from

`TranslatedExternalToast.testId`

***

### toasterId?

> `optional` **toasterId**: `string`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:50

#### Inherited from

`TranslatedExternalToast.toasterId`

***

### unstyled?

> `optional` **unstyled**: `boolean`

Defined in: node\_modules/.pnpm/sonner@2.0.7\_react-dom@19.2.0\_react@19.2.0\_\_react@19.2.0/node\_modules/sonner/dist/index.d.ts:70

#### Inherited from

`TranslatedExternalToast.unstyled`
