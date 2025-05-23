import { Table } from "antd";
import React from "react";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import Alert from "antd/es/alert/Alert";

export default function DetailView(props) {
  const { t } = useTranslation();
  const mockData = [
    {
      Erweiterungsoption: t("detailView.mockErweiterungsoption1"),
      Typ: t("detailView.implizit"),
      Beschreibung: t("detailView.mockBeschreibung1"),
      Lokalvoraussetzung: t("detailView.mockLokalvoraussetzung1"),
      Umsatzung: t("detailView.mockUmsatzung1"),
    },
    {
      Erweiterungsoption: t("detailView.mockErweiterungsoption1"),
      Typ: t("detailView.implizit"),
      Beschreibung: t("detailView.mockBeschreibung1"),
      Lokalvoraussetzung: t("detailView.mockLokalvoraussetzung1"),
      Umsatzung: t("detailView.mockUmsatzung1"),
    },
  ];

  const columns = [
    {
      title: t("erweiterungsOption"),
      dataIndex: "Erweiterungsoption",
      key: "Erweiterungsoption",
      width: 100,
    },
    {
      title: t("type"),
      dataIndex: "Typ",
      key: "Typ",
      width: 15,
      render: (text) => (
        <>
          {text === t("detailView.implizit") ? (
            <p style={{ color: "green" }}>{text}</p>
          ) : (
            <Tooltip title={t("detailView.explizitTooltip")}>
              <p style={{ color: "red" }}>{text}</p>
            </Tooltip>
          )}
        </>
      ),
    },

    {
      title: t("description"),
      dataIndex: "Beschreibung",
      key: "Beschreibung",
      width: 300,
    },
    {
      title: t("voraussetzung"),
      dataIndex: "Lokalvoraussetzung",
      key: "Lokalvoraussetzung",
      width: 150,
    },
    {
      title: t("technische"),
      dataIndex: "Umsatzung",
      key: "Umsatzung",
      width: 150,
    },
  ];

  const [filteredData, setFilteredData] = useState();
  const filter = () => {
    if (props.record.Erweiterungsoption === "Controller hinzufügen") {
      if (props.uiType === "SAPUI5") {
        const filteredData2 = props.data.filter(
          (item) => item.Einstiegspunkt === "DUMMY"
        );
        setFilteredData(filteredData2);
      }
      if (props.uiType === "FE") {
        if (props.floorplan === "Object Page") {
          const filteredData2 = props.data.filter(
            (item) =>
              item.Einstiegspunkt === props.record.ID2 &&
              (item.UI === "FE" || item.UI === "NR" || item.UI === "FE-Obj")
          );
          setFilteredData(filteredData2);
        }
        if (
          props.floorplan === "List Report" ||
          props.floorplan === "Analytical List Page"
        ) {
          const filteredData2 = props.data.filter(
            (item) =>
              item.Einstiegspunkt === props.record.ID2 &&
              (item.UI === "FE" ||
                item.UI === "NR" ||
                item.UI === "FE-ListR-Analytic")
          );
          setFilteredData(filteredData2);
        }
        if (props.floorplan === "Overview Page") {
          const filteredData2 = props.data.filter(
            (item) =>
              item.Einstiegspunkt === props.record.ID2 &&
              (item.UI === "FE" || item.UI === "NR" || item.UI === "FE-Overv")
          );
          setFilteredData(filteredData2);
        }
        if (props.floorplan === "Worklist") {
          const filteredData2 = props.data.filter(
            (item) => item.Einstiegspunkt === "DUMMY"
          );
          setFilteredData(filteredData2);
        }
      }
    } else {
      const filteredData2 = props.data.filter(
        (item) => item.Einstiegspunkt === props.record.ID2
      );
      setFilteredData(filteredData2);
    }
  };
  useEffect(() => {
    filter();
  }, []);

  return (
    <div
      style={{
        border: "1px solid grey",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <h3>{t("detailView.detailsTitle")}</h3>
      <p>{t("detailView.idLabel")} {props.record.ID}</p>

      <p>{t("detailView.personaLabel")} {props.record.Persona}</p>
      {filteredData?.length > 0 && (
        <>
          <h3>{t("detailView.aufbauendeOptionen")} ({filteredData.length})</h3>
          <Table
            columns={columns}
            pagination={false}
            dataSource={filteredData}
          />
        </>
      )}
    </div>
  );
}
