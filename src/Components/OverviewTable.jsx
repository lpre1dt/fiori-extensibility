import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space, Tooltip } from "antd";
import Highlighter from "react-highlight-words";

export function OverviewTable({
  anforderungsFilter,
  setTransferFilteredData,
  backendValues,
}) {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  const testFilter = () => {
    if (backendValues.rap === true) {
      const filteredData = data.filter(
        (item) =>
          item.Backend === "CDS-RAP" ||
          item.Backend === "CDS" ||
          item.Backend === "NR"
      );
      setFilteredData(filteredData);
    }
    if (backendValues.bopf === true) {
      const filteredData = data.filter(
        (item) => item.Backend === "CDS-BOPF" || item.Backend === "CDS"
      );
      setFilteredData(filteredData);
    }
    if (backendValues.gateway === true) {
      const filteredData = data.filter(
        (item) => item.Backend === "SEGW OData" || item.Backend === "NR"
      );
      setFilteredData(filteredData);
    }
    if (backendValues.badi === false) {
      filteredData.filter(
        (item) => item.Lokalvoraussetzung !== "BAdI muss vorhanden sein."
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    //fetch CSV ErweiterungsoptionenDB.csv
    fetch("ErweiterungsoptionenDB.csv")
      .then((response) => response.text())
      .then((data) => {
        let dataArr = data.split("\n");
        let dataArr2 = [];
        dataArr.forEach((element) => {
          dataArr2.push(element.split(";"));
        });
        const objectArray = [];
        let obj = {};

        for (let i = 1; i < dataArr2.length; i++) {
          obj = {
            Erweiterungsoption: dataArr2[i][0],
            Beschreibung: dataArr2[i][1],
            Lokalvoraussetzung: dataArr2[i][2],
            Grundvorraussetzung: dataArr2[i][3],
            Persona: dataArr2[i][4],
            Ansatz: dataArr2[i][5],
            UI: dataArr2[i][6],
            Backend: dataArr2[i][7],
            Erweiterungsmöglichkeit: dataArr2[i][8],
            Umsatzung: dataArr2[i][9],
            Typ: dataArr2[i][10],
            Einstiegspunkt: dataArr2[i][11],
          };
          objectArray.push(obj);
        }

        setData(objectArray);
        testFilter();
      });
  }, [backendValues]);

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
      title: "Erweiterungsmöglichkeit",
      dataIndex: "Erweiterungsmöglichkeit",
      key: "Erweiterungsmöglichkeit",

      width: 100,
    },
    {
      title: "Technische Umsetzung",
      dataIndex: "Umsatzung",
      key: "Umsatzung",
      width: 150,
    },

    // Weitere Spalten hinzufügen und die Breiten nach Bedarf anpassen
  ];

  return (
    <>
      <Button
        onClick={() => {
          console.log(filteredData);
        }}
      ></Button>
      <Table dataSource={filteredData} columns={columns} />
    </>
  );
}
