import React from "react";
import { useTranslation } from "react-i18next";

export default function SelectionHelp() {
  const { t } = useTranslation();
  return (
    <div>
      <h3>
        {t("helpPage.selectionHelp.title")}
      </h3>
      <p>
        {t("helpPage.selectionHelp.logischeEmpfehlungen")}
      </p>
      <ol>
        <li>
          <p>
            {t("helpPage.selectionHelp.punkt1DatenmodellZuerst")}
          </p>
        </li>{" "}
        <li>
          <p>
            {t("helpPage.selectionHelp.punkt2GeringsterAufwand")}{" "}
          </p>
        </li>
        <li>
          <p>
            {t("helpPage.selectionHelp.punkt3Erfahrungsbasiert")}
          </p>
        </li>
        <li>
          <p>
            {t("helpPage.selectionHelp.punkt4GleicherAufwandFlexiblere")}
          </p>
        </li>
        <li>
          <p>
            {t("helpPage.selectionHelp.punkt5ErfolglosVerwerfen")}
          </p>
        </li>
      </ol>
    </div>
  );
}
