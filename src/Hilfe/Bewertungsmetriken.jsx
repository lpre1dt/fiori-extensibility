import { Table } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Bewertungsmetriken() {
  const { t } = useTranslation();

  const columns1 = [
    {
      title: t("stufe"),
      dataIndex: "Stufe",
      key: "Stufe",
      width: "5%",
    },
    {
      title: t("description"),
      dataIndex: "Beschreibung",
      key: "Beschreibung",
      width: "95%",
    },
  ];

  const columns2 = [
    {
      title: t("helpPage.bewertungsmetriken.auspraegung"),
      dataIndex: "Ausprägung",
      key: "Ausprägung",
      width: "20%",
    },
    {
      title: t("description"),
      dataIndex: "Beschreibung",
      key: "Beschreibung",
      width: "75%",
    },
    {
      title: t("helpPage.bewertungsmetriken.wert"),
      dataIndex: "Wert",
      key: "Wert",
      width: "5%",
    },
  ];

  const data1 = [
    {
      Stufe: 1,
      Beschreibung: t("helpPage.bewertungsmetriken.flexStufe1"),
    },
    {
      Stufe: 2,
      Beschreibung: t("helpPage.bewertungsmetriken.flexStufe2"),
    },
    {
      Stufe: 3,
      Beschreibung: t("helpPage.bewertungsmetriken.flexStufe3"),
    },
    {
      Stufe: 4,
      Beschreibung: t("helpPage.bewertungsmetriken.flexStufe4"),
    },
    {
      Stufe: 5,
      Beschreibung: t("helpPage.bewertungsmetriken.flexStufe5"),
    },
    {
      Stufe: 6,
      Beschreibung: t("helpPage.bewertungsmetriken.flexStufe6"),
    },
  ];

  const data2 = [
    {
      Ausprägung: "UI 1", // This is a category label, might not need translation or a specific key if always displayed with numeric value
      Beschreibung: t("helpPage.bewertungsmetriken.emUbersicht1"),
      Wert: 1,
    },
    {
      Ausprägung: "UI 2",
      Beschreibung: t("helpPage.bewertungsmetriken.emUbersicht2"),
      Wert: 2,
    },
    {
      Ausprägung: "UI 3",
      Beschreibung: t("helpPage.bewertungsmetriken.emUbersicht3"),
      Wert: 3,
    },
    {
      Ausprägung: "Logik 1",
      Beschreibung: t("helpPage.bewertungsmetriken.emLogik1"),
      Wert: 3,
    },
    {
      Ausprägung: "Logik 2",
      Beschreibung: t("helpPage.bewertungsmetriken.emLogik2"),
      Wert: 3,
    },
    {
      Ausprägung: "Datenmodell 1",
      Beschreibung: t("helpPage.bewertungsmetriken.emDatenmodell1"),
      Wert: 1,
    },
    {
      Ausprägung: "Datenmodell 2",
      Beschreibung: t("helpPage.bewertungsmetriken.emDatenmodell2"),
      Wert: 2,
    },
    {
      Ausprägung: "Datenmodell 3",
      Beschreibung: t("helpPage.bewertungsmetriken.emDatenmodell3"),
      Wert: 3,
    },
  ];

  return (
    <div>
      <h3>{t("helpPage.bewertungsmetriken.title")}</h3>
      <h4>{t("flexibilitaet")}</h4>
      <p>{t("helpPage.bewertungsmetriken.flexStufenDef")}</p>
      <Table columns={columns1} dataSource={data1} pagination={false} />
      <p>
        {t("helpPage.bewertungsmetriken.eingeordnetDescription")}
      </p>
      <p>
        {t("helpPage.bewertungsmetriken.multipliziertDescription")}
      </p>
      <p>
        {t("helpPage.bewertungsmetriken.umgewandeltDescription")}
      </p>

      <h4>{t("aufwand")}</h4>
      <p>
        {t("helpPage.bewertungsmetriken.gesamtaufwandDescription")}
      </p>
      <p>{t("helpPage.bewertungsmetriken.gaFormula")} </p>

      <p>
        <span dangerouslySetInnerHTML={{ __html: t("helpPage.bewertungsmetriken.mindestaufwandDescription") }} />
      </p>
      <p>{t("helpPage.bewertungsmetriken.beispielControllerAnlegen")}</p>
      <ul>
        <li>{t("helpPage.bewertungsmetriken.adaptationProjectAnlegen")}</li>
        <li>{t("helpPage.bewertungsmetriken.controllerAnlegen")}</li>
        <li>{t("helpPage.bewertungsmetriken.logikImplementieren")}</li>
        <li>{t("helpPage.bewertungsmetriken.produktivsetzen")}</li>
      </ul>
      <p>{t("helpPage.bewertungsmetriken.maResult")}</p>

      <p>
        <span dangerouslySetInnerHTML={{ __html: t("helpPage.bewertungsmetriken.wertErweiterungsmoeglichkeit") }} />
      </p>
      <p>
        {t("helpPage.bewertungsmetriken.tabelleEmWerte")}
      </p>
      <Table columns={columns2} dataSource={data2} pagination={false} />
      <p>
        {t("helpPage.bewertungsmetriken.auchHierMultipliziert")}
      </p>
      <p>
        {t("helpPage.bewertungsmetriken.umgewandeltDescription")}
      </p>
    </div>
  );
}
