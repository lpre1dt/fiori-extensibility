import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space, Tooltip, Empty } from "antd";
import Highlighter from "react-highlight-words";

export function OverviewTable({
  anforderungsFilter,
  showDetailView,
  descriptionValues,
  showTable,
}) {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [uiFilteredData, setUiFilteredData] = useState();
  const [logicFilteredData, setLogicFilteredData] = useState();
  const [dataModelfilteredData, setDataModelfilteredData] = useState();
  function filterBusinessContext(input) {
    //Filterkonditionen Geschäftskontext nicht vorhanden
    if (descriptionValues?.businessContext === "no") {
      const filteredData = input.filter(
        (item) =>
          item.Grundvorraussetzung !==
          "Geschäftskontext der App ist im Erweiterungsregister vorhanden"
      );
      return filteredData;
    }
    //Filterkonditionen Geschäftskontext nicht vorhanden
    if (descriptionValues?.businessContext === "yes") {
      const filteredData = input;
      return filteredData;
    }
  }
  function filterODatatypes(input) {
    //Filterkonditionen für SEGW
    if (descriptionValues?.oDataType === "SEGW") {
      const filteredData = input.filter(
        (item) => item.Backend === "SEGW OData" || item.Backend === "NR"
      );
      return filteredData;
    }
    if (descriptionValues?.oDataType === "BOPF") {
      const filteredData = input.filter(
        (item) =>
          item.Backend === "CDS" ||
          item.Backend === "CDS-BOPF" ||
          item.Backend === "NR"
      );
      return filteredData;
    }
    if (descriptionValues?.oDataType === "RAP") {
      const filteredData = input.filter(
        (item) =>
          item.Backend === "CDS" ||
          item.Backend === "CDS-RAP" ||
          item.Backend === "NR"
      );
      if (descriptionValues?.behavioAllowed === "no") {
        const filteredData2 = filteredData.filter(
          (item) =>
            item.Grundvorraussetzung !==
            "In der Standard Behavior Definition muss im Kopf �extensible� stehen."
        );
        return filteredData2;
      }
      return filteredData;
    }
  }
  function filterUiComplexity(input) {
    console.log(anforderungsFilter?.uiComplexity);
    if (anforderungsFilter?.uiComplexity === 1) {
      alert("filterUiComplexity");
      const filteredData = input.filter(
        (item) => item.Erweiterungsmöglichkeit === "Ansicht verändern"
      );
      return filteredData;
    }
    if (anforderungsFilter?.uiComplexity === 2) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Visuelle Anpassung" ||
          item.Erweiterungsmöglichkeit === "Visuelle Erweiterung"
      );
      return filteredData;
    }
    if (anforderungsFilter?.uiComplexity === 3) {
      const filteredData = input.filter(
        (item) => item.Erweiterungsmöglichkeit === "Visuelle Erweiterung"
      );
      return filteredData;
    }
  }
  function filterLogicComplexity(input) {
    if (anforderungsFilter?.logicComplexity === 1) {
      const filteredData = input.filter(
        (item) => item.Erweiterungsmöglichkeit === "Logik Anpassung"
      );
      return filteredData;
    }
    if (anforderungsFilter?.logicComplexity === 2) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Logik Anpassung" ||
          item.Erweiterungsmöglichkeit === "Logik Erweiterung"
      );
      return filteredData;
    }
  }
  function filterBackendComplexity(input) {
    if (anforderungsFilter?.backendComplexity === 1) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Datenmodell" ||
          item.Erweiterungsmöglichkeit === "Datenmodell-Felder" ||
          item.Erweiterungsmöglichkeit === "Datenmodell Felder" ||
          item.Erweiterungsmöglichkeit === "Datenmodell-komplex"
      );
      return filteredData;
    }
    if (anforderungsFilter?.backendComplexity === 2) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Datenmodell-Felder" ||
          item.Erweiterungsmöglichkeit === "Datenmodell Felder" ||
          item.Erweiterungsmöglichkeit === "Datenmodell-komplex"
      );
      return filteredData;
    }
    if (anforderungsFilter?.backendComplexity === 3) {
      const filteredData = input.filter(
        (item) => item.Erweiterungsmöglichkeit === "Datenmodell-komplex"
      );
      return filteredData;
    }
  }

  //Nur Einstiegspunkte anzeigen
  const testFilter2 = () => {
    const filteredData = data?.filter((item) => item.Einstiegspunkt === "Ja\r");
    //Wenn descriptionValues leer ist wird auh nichts in der Tabelle angezeigt
    if (descriptionValues === undefined) {
      setFilteredData(null);
    }
    // Filterkonditionen für SAPUI5
    if (descriptionValues?.uiType === "SAPUI5") {
      //Nur einrtäge speziell für SAPUI5 anzeigen oder Einträge die UI unspezifisch sind
      const filteredData2 = filteredData.filter(
        (item) => item.UI === "UI5" || item.UI === "NR"
      );
      //Filterkonditionen für SAPUI5 Flexibility und enthält Synchrone Views
      if (
        descriptionValues.flexEnabled === "yes" &&
        descriptionValues.syncEnabled === "yes"
      ) {
        const filteredData3 = filteredData2.filter(
          (item) => item.Erweiterungsoption !== "Controller hinzufügen"
        );
        //Filterkonditionen Geschäftskontext
        const filteredData4 = filterBusinessContext(filteredData3);
        //Filterkonditionen für OData
        const filteredData5 = filterODatatypes(filteredData4);
        setFilteredData(filteredData5);
      }
      //Filterkonditionen für SAPUI5 Flexibility und enthält KEINE Synchrone Views
      if (
        descriptionValues?.flexEnabled === "yes" &&
        descriptionValues?.syncEnabled === "no"
      ) {
        const filteredData3 = filteredData2.filter(
          (item) => item.Grundvorraussetzung !== "Extension Project"
        );
        //Filterkonditionen Geschäftskontext
        const filteredData4 = filterBusinessContext(filteredData3);
        //Filterkonditionen für OData
        const filteredData5 = filterODatatypes(filteredData4);
        setFilteredData(filteredData5);
      }
      //Filterkonditionen wenn SAPUI5 Flexibility nicht verfügbar ist
      if (descriptionValues?.flexEnabled === "no") {
        const filteredData3 = filteredData2.filter(
          (item) => item.Grundvorraussetzung !== "SAPUI5 Flexibility"
        );
        //Filterkonditionen Geschäftskontext
        const filteredData4 = filterBusinessContext(filteredData3);
        //Filterkonditionen für OData
        const filteredData5 = filterODatatypes(filteredData4);
        setFilteredData(filteredData5);
      }
    }
    // Filterkonditionen für Fiori Elements
    if (
      descriptionValues?.uiType === "FE" &&
      (descriptionValues?.floorplan === "List Report" ||
        descriptionValues?.floorplan === "Analytical List Page")
    ) {
      alert("FE-ListR-Analytic");
      const filteredData2 = filteredData?.filter(
        (item) =>
          item.UI === "FE" ||
          item.UI === "NR" ||
          item.UI === "FE-ListR-Analytic"
      );
      //Filterkonditionen Geschäftskontext
      const filteredData3 = filterBusinessContext(filteredData2);
      //Filterkonditionen für OData
      const filteredData4 = filterODatatypes(filteredData3);
      setFilteredData(filteredData4);
    }
    if (
      descriptionValues?.uiType === "FE" &&
      descriptionValues?.floorplan === "Object Page"
    ) {
      alert("FE-Obj");
      const filteredData2 = filteredData.filter(
        (item) => item.UI === "FE" || item.UI === "NR" || item.UI === "FE-Obj"
      );
      //Filterkonditionen Geschäftskontext
      const filteredData3 = filterBusinessContext(filteredData2);
      //Filterkonditionen für OData
      const filteredData4 = filterODatatypes(filteredData3);
      setFilteredData(filteredData4);
    }
    if (
      descriptionValues?.uiType === "FE" &&
      descriptionValues?.floorplan === "Worklist"
    ) {
      alert("FE-Worklist");
      const filteredData2 = filteredData.filter(
        (item) => item.UI === "FE" || item.UI === "NR"
      );
      //Filterkonditionen Geschäftskontext
      const filteredData3 = filterBusinessContext(filteredData2);
      //Filterkonditionen für OData
      const filteredData4 = filterODatatypes(filteredData3);
      setFilteredData(filteredData4);
    }
    if (
      descriptionValues?.uiType === "FE" &&
      descriptionValues?.floorplan === "Overview Page"
    ) {
      alert("FE");
      const filteredData2 = filteredData.filter(
        (item) => item.UI === "FE" || item.UI === "NR" || item.UI === "FE-Overv"
      );
      //Filterkonditionen Geschäftskontext
      const filteredData3 = filterBusinessContext(filteredData2);
      //Filterkonditionen für OData
      const filteredData4 = filterODatatypes(filteredData3);
      setFilteredData(filteredData4);
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
        testFilter2();
      });
  }, [descriptionValues]);
  useEffect(() => {
    if (filteredData !== undefined) {
      const filteredData2 = filterUiComplexity(filteredData);
      const filteredData3 = filterLogicComplexity(filteredData);
      const filteredData4 = filterBackendComplexity(filteredData);
      setUiFilteredData(filteredData2);
      setLogicFilteredData(filteredData3);
      setDataModelfilteredData(filteredData4);
    }
  }, [anforderungsFilter]);

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
  if (showTable) {
    return (
      <div>
        <h2>Mögliche Erweiterungen</h2>
        <Button
          onClick={() => {
            console.log(filteredData);
          }}
        ></Button>
        <h2>({filteredData?.length})</h2>
        <p>
          Erweietrungsoptionen für eine Anwendung mit{" "}
          {descriptionValues?.uiType}{" "}
        </p>
        <Table dataSource={filteredData} columns={columns} pagination={false} />
      </div>
    );
  }
  if (showDetailView) {
    return (
      <div>
        <h2>Mögliche Erweiterungen für die jewiligen Anforderungen</h2>
        {anforderungsFilter?.uiComplexity !== 0 && (
          <div>
            <h3>UI Erweiterungsoptionen: </h3>
            <p>
              {" "}
              UI-Erweiterunsgoption, die mindestens die Anforderungsstufe{" "}
              {anforderungsFilter?.uiComplexity}
            </p>
            <Table
              dataSource={uiFilteredData}
              columns={columns}
              pagination={false}
            />
          </div>
        )}
        {anforderungsFilter?.logicComplexity !== 0 && (
          <div>
            <h3>Logik Erweiterungsoptionen: </h3>
            <p>
              {" "}
              Logik-Erweiterunsgoption, die mindestens die Anforderungsstufe{" "}
              {anforderungsFilter?.logicComplexity}
            </p>
            <Table
              dataSource={logicFilteredData}
              columns={columns}
              pagination={false}
            />
          </div>
        )}
        {anforderungsFilter?.backendComplexity !== 0 && (
          <div>
            <h3>Datenmodell Erweiterungsoptionen: </h3>
            <p>
              {" "}
              Backend-Erweiterunsgoption, die mindestens die Anforderungsstufe{" "}
              {anforderungsFilter?.backendComplexity}
            </p>
            <Table
              dataSource={dataModelfilteredData}
              columns={columns}
              pagination={false}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Mögliche Erweiterungen</h2>
        <p>
          {" "}
          Bitte führen Sie erst die Beschreibungsphase durch vollsrändig durch
        </p>
        <Empty
          style={{
            marginTop: "50px",
          }}
        />
      </div>
    );
  }
}
