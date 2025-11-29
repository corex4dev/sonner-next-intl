"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { useTranslatedToast } from "../../hooks/useTranslatedToast";

const ClientTest = () => {
  const t = useTranslations();
  const { toast } = useTranslatedToast({ notificationsRoot: "Error" });

  return (
    <>
      <button
        onClick={() => {
          toast(
            { key: "title", type: "regular" },
            {
              description: {
                key: "description",
                type: "rich",
                data: {
                  p: (chunks) => <p>{chunks}</p>,
                  retry: (chunks) => (
                    <button
                      className="text-white underline underline-offset-2"
                      onClick={() => {
                        console.log("reloading");
                      }}
                      type="button"
                    >
                      {chunks}
                    </button>
                  ),
                },
              },
            }
          );
          // toast("hello");
        }}
      >
        {t("TriggerToast")}
      </button>
    </>
  );
};

export default ClientTest;
