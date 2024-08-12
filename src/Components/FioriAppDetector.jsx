import { useEffect, useState } from "react";
import { Button, Input, AutoComplete } from "antd";
import React from "react";

import { PlayCircleOutlined } from "@ant-design/icons";
export function FioriAppDetector() {
  const [searchInput, setSearchInput] = useState("");
  const [appProperties, setAppProperties] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [showResult, showRresult] = useState(false);

  const fetchAppProperties = async () => {
    try {
      const response = await fetch("FioriApps.csv");
      const csvData = await response.text();
      const rows = csvData.split("\n");
      const headers = rows[0].split(";");

      const dataRows = rows.slice(1).map((row) => {
        const rowData = row.split(";");
        return headers.reduce((obj, header, index) => {
          obj[header] = rowData[index];
          return obj;
        }, {});
      });

      setDataSource(
        dataRows.map((app) => ({
          value: `${app.AppName} (${app.fioriId})`,
          appName: app.AppName,
          fioriId: app.fioriId,
        }))
      );
    } catch (error) {
      console.error("Error fetching CSV:", error);
    }
  };

  useEffect(() => {
    fetchAppProperties();
  }, []);

  const handleSearch = (value) => {
    setSearchInput(value);
    const filteredApps = dataSource.filter(
      (app) =>
        app.appName?.toLowerCase().includes(value.toLowerCase()) ||
        app.fioriId?.toLowerCase().includes(value.toLowerCase())
    );
    setAppProperties(filteredApps);
  };

  const onSelect = (value, option) => {
    setSearchInput(value);
    const selectedApp = dataSource.find(
      (app) => `${app.appName} (${app.fioriId})` === value
    );
    setAppProperties([selectedApp]);
  };

  const onSearchButtonClick = () => {
    showRresult(true);
  };

  return (
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <div style={{ flex: "1", padding: "20px" }}>
        <h2>App-Name oder App-ID eingeben:</h2>
        <AutoComplete
          value={searchInput}
          options={appProperties.map((app) => ({
            value: `${app.appName} (${app.fioriId})`,
            label: `${app.appName} (${app.fioriId})`,
          }))}
          style={{ width: "80%" }}
          onSelect={onSelect}
          onSearch={handleSearch}
          placeholder="App-Name oder App-ID"
        />
        <Button
          type="primary"
          onClick={onSearchButtonClick}
          style={{ marginTop: "10px", width: "18%", marginLeft: "2%" }}
        >
          <PlayCircleOutlined />
        </Button>
      </div>
      {showResult && (
        <div style={{ flex: "1", padding: "20px" }}>
          {appProperties.length > 0 && (
            <>
              <h2>Gefundene Apps</h2>
              <div>
                <p>
                  <strong>fioriId:</strong> {appProperties[0]?.fioriId}
                </p>
                <p>
                  <strong>AppName:</strong> {appProperties[0]?.appName}
                </p>
                {/* Weitere App-Eigenschaften hier anzeigen */}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
