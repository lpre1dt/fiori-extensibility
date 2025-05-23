import { Image } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ODataContent() {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t("helpPage.odataContent.title")}</h3>
      <p>
        {t("helpPage.odataContent.multipleOdataDescription")}
      </p>
      <p>
        {t("helpPage.odataContent.browserUrlDescription")}
      </p>
      <p>
        {t("helpPage.odataContent.beispielSDSRV")}
      </p>
      <p>{t("helpPage.odataContent.vorgehen")}</p>
      <Image src="/ODataProc.gif" alt={t("helpPage.odataContent.altODataContent")} />
      <p>{t("helpPage.odataContent.ausgabeJsonFormat")}</p>
      <Image src="/Entities.png" alt={t("helpPage.odataContent.altODataContent")} />
      <p>{t("helpPage.odataContent.inhaltEntitaetICustomer")}</p>{" "}
      <Image src="/ODataContent.png" alt={t("helpPage.odataContent.altODataContent")} />
    </div>
  );
}
