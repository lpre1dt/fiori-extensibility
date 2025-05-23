import { Image } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

export default function BehaviorCheck() {
  const { t } = useTranslation();
  return (
    <div>
      <h3>
        {t("helpPage.behaviorCheck.title")}
      </h3>
      <p>
        {t("helpPage.behaviorCheck.extensibleDescription")}
      </p>
      <Image src="/RAP_Extensible.png" alt={t("helpPage.behaviorCheck.rapExtensibleAltText")} />
    </div>
  );
}
