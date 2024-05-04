import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space, Tooltip, Empty } from "antd";
import Highlighter from "react-highlight-words";
import DetailView from "./DetailView";
import { useTranslation } from "react-i18next";
import { render } from "@testing-library/react";

export function OverviewTable({
  anforderungsFilter,
  showDetailView,
  descriptionValues,
  showTable,
  uiFilteredData,
  setUiFilteredData,
  logicFilteredData,
  setLogicFilteredData,
  dataModelfilteredData,
  setDataModelfilteredData,
}) {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const { t } = useTranslation();

  function filterBusinessContext(input) {
    //Filterkonditionen Geschäftskontext nicht vorhanden

    if (descriptionValues?.businessContext === "no") {
      const filteredData = input.filter(
        (item) =>
          item.Grundvorraussetzung !==
          "Geschäftskontext im Erweiterungsregister"
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
        (item) => item.Backend === "No-CDS" || item.Backend === "NR"
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
    if (descriptionValues?.oDataType === "CDS") {
      const filteredData = input.filter(
        (item) => item.Backend === "CDS" || item.Backend === "NR"
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
          (item) => item.Grundvorraussetzung !== "BDEF extensible"
        );
        return filteredData2;
      }
      return filteredData;
    }
  }
  function filterUiComplexity(input) {
    console.log(anforderungsFilter?.uiComplexity);
    if (anforderungsFilter?.uiComplexity === 1) {
      const filteredData = input.filter(
        (item) => item.Erweiterungsmöglichkeit === "UI 1"
      );
      return filteredData;
    }
    if (anforderungsFilter?.uiComplexity === 2) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "UI 2" ||
          item.Erweiterungsmöglichkeit === "UI 2,3"
      );
      return filteredData;
    }
    if (anforderungsFilter?.uiComplexity === 3) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "UI 3" ||
          item.Erweiterungsmöglichkeit === "UI 2,3"
      );
      return filteredData;
    }
  }
  function filterLogicComplexity(input) {
    if (anforderungsFilter?.logicComplexity === 1) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Logik 1" ||
          item.Erweiterungsmöglichkeit === "Logik 1,2"
      );
      return filteredData;
    }
    if (anforderungsFilter?.logicComplexity === 2) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Logik 2" ||
          item.Erweiterungsmöglichkeit === "Logik 1,2"
      );
      return filteredData;
    }
  }
  function filterBackendComplexity(input) {
    if (anforderungsFilter?.backendComplexity === 1) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Datenmodell 1" ||
          item.Erweiterungsmöglichkeit === "Datenmodell 1,2" ||
          item.Erweiterungsmöglichkeit === "Datenmodell 1,2,3"
      );
      return filteredData;
    }
    if (anforderungsFilter?.backendComplexity === 2) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Datenmodell 2" ||
          item.Erweiterungsmöglichkeit === "Datenmodell 1,2" ||
          item.Erweiterungsmöglichkeit === "Datenmodell 2,3" ||
          item.Erweiterungsmöglichkeit === "Datenmodell 1,2,3"
      );
      return filteredData;
    }
    if (anforderungsFilter?.backendComplexity === 3) {
      const filteredData = input.filter(
        (item) =>
          item.Erweiterungsmöglichkeit === "Datenmodell 3" ||
          item.Erweiterungsmöglichkeit === "Datenmodell 2,3" ||
          item.Erweiterungsmöglichkeit === "Datenmodell 1,2,3"
      );
      return filteredData;
    }
  }

  //Nur Einstiegspunkte anzeigen
  const testFilter2 = () => {
    const filteredData = data?.filter((item) => item.Einstiegspunkt === "Ja");
    //Wenn descriptionValues leer ist wird auh nichts in der Tabelle angezeigt
    console.log(filteredData);
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
            Aufwand: dataArr2[i][12],
            Flexibilitat: dataArr2[i][13],
            Aufwand2: dataArr2[i][14],
            Flexibilitat2: dataArr2[i][15],
            ID2: dataArr2[i][16],
            ID: dataArr2[i][17],
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
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      width: 5,
    },
    {
      title: "" + t("erweiterungsOption") + "",
      dataIndex: "Erweiterungsoption",
      key: "Erweiterungsoption",
      width: 100,
    },

    {
      title: "" + t("typ") + "",
      dataIndex: "Typ",
      key: "Typ",
      width: 15,
      render: (text) => (
        <>
          {text === "Implizit" ? (
            <p style={{ color: "green" }}>{text}</p>
          ) : (
            <Tooltip title="Diese Erweiterungsoption explizit. Es muss im Einzelfall geprüft werden, ob sie für die Fiori-Anwendung vorhanden ist.">
              <p style={{ color: "red" }}>{text}</p>
            </Tooltip>
          )}
        </>
      ),
    },

    {
      title: "" + t("description") + "",
      dataIndex: "Beschreibung",
      key: "Beschreibung",
      width: 300,
    },
    {
      title: "" + t("voraussetzung") + "",
      dataIndex: "Lokalvoraussetzung",
      key: "Lokalvoraussetzung",
      width: 150,
    },
    {
      title: "" + t("technische") + "",
      dataIndex: "Umsatzung",
      key: "Umsatzung",
      width: 150,
    },
    {
      title: "" + t("flexibilitaet") + "",
      dataIndex: "Flexibilitat",
      key: "Flexibilitat",
      width: 5,
      render: (text) => <>{text + "%"}</>,
    },
    {
      title: "" + t("aufwand") + "",
      dataIndex: "Aufwand",
      key: "Aufwand",
      width: 5,
      render: (text) => <>{text + "%"}</>,
    },

    // Weitere Spalten hinzufügen und die Breiten nach Bedarf anpassen
  ];
  if (showTable) {
    return (
      <div>
        <h2>
          {t("possibleExtensions")} ({filteredData?.length})
        </h2>

        <Table dataSource={filteredData} columns={columns} pagination={false} />
      </div>
    );
  }
  if (showDetailView) {
    return (
      <div>
        <h2>{t("possibleForReq")} </h2>
        {anforderungsFilter?.uiComplexity !== 0 && (
          <div>
            <h3>
              {t("possibleUI")} ({uiFilteredData?.length})
            </h3>
            <p>
              {" "}
              UI-{t("minimumLevel")}
              {anforderungsFilter?.uiComplexity}
            </p>
            <Table
              rowKey={(record) => record.ID2}
              dataSource={uiFilteredData}
              columns={columns}
              pagination={false}
              expandable={{
                expandedRowRender: (record) => (
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    <DetailView record={record} data={data} />
                  </p>
                ),

                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
            />
          </div>
        )}
        {anforderungsFilter?.logicComplexity !== 0 && (
          <div>
            <h3>
              {t("possibleLogic")} ({logicFilteredData?.length}){" "}
            </h3>
            <p>
              {" "}
              Logic-{t("minimumLevel")} {anforderungsFilter?.logicComplexity}
            </p>
            <Table
              rowKey={(record) => record.ID2}
              dataSource={logicFilteredData}
              columns={columns}
              pagination={false}
              expandable={{
                expandedRowRender: (record) => (
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    <DetailView
                      uiType={descriptionValues?.uiType}
                      floorplan={descriptionValues?.floorplan}
                      record={record}
                      data={data}
                    />
                  </p>
                ),

                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
            />
          </div>
        )}
        {anforderungsFilter?.backendComplexity !== 0 && (
          <div>
            <h3>
              {t("possibleDataModel")}({dataModelfilteredData?.length}){" "}
            </h3>
            <p>
              {" "}
              Backend {t("minimumLevel")}{" "}
              {anforderungsFilter?.backendComplexity}
            </p>
            <Table
              rowKey={(record) => record.ID2}
              dataSource={dataModelfilteredData}
              columns={columns}
              pagination={false}
              expandable={{
                expandedRowRender: (record) => (
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    <DetailView record={record} data={data} />
                  </p>
                ),

                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h2>{t("possibleExtensions")}</h2>
        <p> {t("pleaseDescriptionPhase")}</p>
        <Empty
          style={{
            marginTop: "50px",
          }}
        />
      </div>
    );
  }
}
