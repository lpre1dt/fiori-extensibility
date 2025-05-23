import React from "react";
import { Tabs } from "antd";
import Image from "antd/es/image";
import { useTranslation } from "react-i18next";
import {
  AppstoreOutlined,
  CodeOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

export default function SAPFlex() {
  const { t } = useTranslation();
  //SAPFlex
  return (
    <div>
      <h3>
        {t("helpPage.sapFlex.title")}
      </h3>
      <p>
        {t("helpPage.sapFlex.freestyleCheck")}
      </p>
      <ul>
        <li>{t("helpPage.sapFlex.pruefungInAnwendung")}</li>
        <li>{t("helpPage.sapFlex.pruefungInBas")}</li>
        <li>{t("helpPage.sapFlex.manuellePruefung")}</li>
      </ul>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab={
            <span>
              <AppstoreOutlined />
              {t("helpPage.sapFlex.inDerAnwendungTitle")}
            </span>
          }
          key="1"
        >
          <p>
            {t("helpPage.sapFlex.inDerAnwendungDescription")}
          </p>
          <Image src="/UInapassen.png" />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <DesktopOutlined />
              {t("helpPage.sapFlex.imBasTitle")}
            </span>
          }
          key="2"
        >
          <p>
            {t("helpPage.sapFlex.imBasDescription")}
          </p>
          <Image src="/ADAPT_Proj.png" />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <CodeOutlined />
              {t("helpPage.sapFlex.manuellTitle")}
            </span>
          }
          key="3"
        >
          <p>
            {t("helpPage.sapFlex.manuellDescription1")}
          </p>
          <Image src="/toManifest.gif" />
          <p>
            {t("helpPage.sapFlex.manuellDescription2")}
          </p>
          <Image src="/manifest1.png" />
          <p>
            {t("helpPage.sapFlex.manifestAnalyseOrder")}
            <ol>
              <li>
                {t("helpPage.sapFlex.manifestMinUi5Version")}
              </li>
              <li>
                {t("helpPage.sapFlex.manifestDependencies")}
              </li>
            </ol>
          </p>
          <Image src="/manifest2.png" />
          <ol start="3">
            <li>
              {t("helpPage.sapFlex.manifestFlexEnabled")}
            </li>
          </ol>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
