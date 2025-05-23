import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Floorplan() {
  const { t } = useTranslation();
  //FP
  return (
    <div>
      <h3>
        {t("helpPage.floorplan.title")}
      </h3>
      <p>
        {t("helpPage.floorplan.manualAbgleich")}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={
            "https://sapui5.hana.ondemand.com/sdk/#/topic/797c3239b2a9491fa137e4998fd76aa7"
          }
        >
          {t("here")}
        </Link>
        {t("helpPage.floorplan.dot")}
      </p>
    </div>
  );
}
