import { Table } from "antd";
import React from "react";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import Alert from "antd/es/alert/Alert";

export default function DetailView(props) {
  const mockData = [
    {
      Erweiterungsoption: "Erweiterungsoption 1",
      Typ: "Implizit",
      Beschreibung: "Beschreibung 1",
      Lokalvoraussetzung: "Lokalvoraussetzung 1",
      Umsatzung: "Umsatzung 1",
    },
    {
      Erweiterungsoption: "Erweiterungsoption 1",
      Typ: "Implizit",
      Beschreibung: "Beschreibung 1",
      Lokalvoraussetzung: "Lokalvoraussetzung 1",
      Umsatzung: "Umsatzung 1",
    },
  ];

  const columns = [
    {
      title: "Erweiterungsoption",
      dataIndex: "Erweiterungsoption",
      key: "Erweiterungsoption",
      width: 100,
    },
    {
      title: "Typ",
      dataIndex: "Typ",
      key: "Typ",
      width: 15,
      render: (text) => (
        <>
          {text === "Implizit" ? (
            <p style={{ color: "green" }}>{text}</p>
          ) : (
            <Tooltip title="Diese Erweiterungsoption explizit. Es muss im Einzelfall geprüft werden, ob sie für die Fiori-Anwendung vorhanden ist">
              <p style={{ color: "red" }}>{text}</p>
            </Tooltip>
          )}
        </>
      ),
    },

    {
      title: "Beschreibung",
      dataIndex: "Beschreibung",
      key: "Beschreibung",
      width: 300,
    },
    {
      title: "Voraussetzung",
      dataIndex: "Lokalvoraussetzung",
      key: "Lokalvoraussetzung",
      width: 150,
    },
    {
      title: "Technische Umsetzung",
      dataIndex: "Umsatzung",
      key: "Umsatzung",
      width: 150,
    },

    // Weitere Spalten hinzufügen und die Breiten nach Bedarf anpassen
  ];

  const [filteredData, setFilteredData] = useState();
  const filter = () => {
    //create a string of props.record.ID

    const filteredData2 = props.data.filter(
      (item) => item.Einstiegspunkt === props.record.ID2
    );
    setFilteredData(filteredData2);
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
      <h3>Details</h3>
      <p>ID: {props.record.ID}</p>

      <p>Persona: {props.record.Persona}</p>
      {filteredData?.length > 0 && (
        <>
          <h3>Aufbauende Erweiterungsoptionen</h3>
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
