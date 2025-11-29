"use client";

import { useMessages, useTranslations } from "next-intl";
import { PropsWithChildren } from "react";
import { toast } from "sonner";
import { SonnerNextIntlProvider as RemoteProvider } from "sonner-next-intl";

const SonnerNextIntlProvider = ({ children }: PropsWithChildren) => {
  const messages = useMessages();
  const t = useTranslations();
  return (
    <RemoteProvider messages={messages} toast={toast} translator={t}>
      {children}
    </RemoteProvider>
  );
};

export default SonnerNextIntlProvider;
