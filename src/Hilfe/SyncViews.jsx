import React from "react";
import { Tabs } from "antd";
import Image from "antd/es/image";
import { useTranslation } from "react-i18next";
import {
  AppstoreOutlined,
  DesktopOutlined,
  CodeOutlined,
} from "@ant-design/icons";

export default function SyncViews() {
  const { t } = useTranslation();
  //SyncViews
  return (
    <div>
      <h3>
        {t("helpPage.syncViews.title")}
      </h3>

      <p>
        {t("helpPage.syncViews.basCheck")}
      </p>
      <Image src="/SyncViews.png" alt={t("helpPage.syncViews.adaptationProjectAltText")} />
      <p>
        {t("helpPage.syncViews.syncViewsMessage")}
      </p>
    </div>
  );
}
