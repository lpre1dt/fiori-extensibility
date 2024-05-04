import { useEffect, useState } from "react";
import { Button, Input, Select } from "antd";
import React from "react";

export function FioriAppDetector() {
    const [appName, setAppName] = useState("");
    const [appProperties, setAppProperties] = useState(null);
    const [data, setData] = useState()

    // Dummy-Funktion zum Abrufen der App-Eigenschaften basierend auf dem Namen oder der ID
    const fetchAppProperties = async () => {
     
      try {
        const response = await fetch('FioriApps.csv');
        const csvData = await response.text();
        const rows = csvData.split('\n');
        const headers = rows[0].split(';');
  
        const dataRows = rows.slice(1).map(row => {
          const rowData = row.split(';');
          return headers.reduce((obj, header, index) => {
            obj[header] = rowData[index];
            return obj;
          }, {});
        });
  
        setData(dataRows);
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    
    };
    useEffect(() => {
       fetchAppProperties()
      }, []);

    return (
        <div style={{ display: "flex", maxWidth: "100%" }}>
            <div style={{ flex: "1", padding: "20px" }}>
                <h2>App-Name oder App-ID eingeben:</h2>
  <Select style={{
    width: "60%"
  }}></Select>
              
                <Button  type="primary" onClick={fetchAppProperties} style={{ marginTop: "10px",    width: "40%" }}>
                   Suchen
                </Button>
                
            </div>
            <div style={{ flex: "1", padding: "20px" }}>
                {appProperties && (
                    <>
                        <h2>App-Eigenschaften</h2>
                        <p><strong>UI Typ:</strong> {appProperties.uiType}</p>
                        <p><strong>SAP UI Flexibility:</strong> {appProperties.sapUiFlexibility}</p>
                        <p><strong>Geschäftskontext:</strong> {appProperties.businessContext}</p>
                        <p><strong>OData Service:</strong> {appProperties.oDataService}</p>
                        <Button onClick={()=>{
                          
                        }}>Daten übernehmen</Button>
                    </>
                )}
            </div>
        </div>
    );
}
