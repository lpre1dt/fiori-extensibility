import { Button, Radio } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Startseite() {
  //Startseite
  const { t } = useTranslation();
  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
      }}
    >
      <h2>{t("mainHeader")}</h2>
      <p>{t("mainText1")}</p>
      <p>
        {t("mainText2")} <a href="mailto:lukas.preidt@mhp.com">Lukas Preidt</a>.
      </p>
      <p>{t("mainText3")}</p>
      <ul>
        <li>
          <b>{t("fioriapplication")}:</b> {t("mainText4")}.
        </li>
        <li>
          <b>{t("requirements")}:</b> {t("mainText5")}
        </li>
        <li>
          <b>{t("selection")}:</b> {t("mainText6")}
        </li>
      </ul>
      <p>{t("mainText7")}</p>
      <h3>{t("mainText8")}</h3>
      <p>{t("mainText9")}</p>
      <div
        style={{
          display: "flex",
          //justifyContent: "center",
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1_DQTCTPdaFz-pcNidNeldoUPPUbcJlwJ/preview"
          width="740"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
      <h3>{t("mainText10")} </h3>
      <p>{t("mainText11")}</p>
      <Button
        download="/ErweiterungsoptionenDB.csv"
        type="primary"
        href="/ErweiterungsoptionenDB.csv"
      >
        {t("startseite.downloadButton")}
      </Button>
    </div>
  );
}
