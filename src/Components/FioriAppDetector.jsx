import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import React from "react";

export function FioriAppDetector() {
    const [appName, setAppName] = useState("");
    const [appProperties, setAppProperties] = useState(null);
    const [data, setData] = useState()

    // Dummy-Funktion zum Abrufen der App-Eigenschaften basierend auf dem Namen oder der ID
    const fetchAppProperties = async () => {
     
      //fetch CSV ErweiterungsoptionenDB.csv
      fetch("FioriApps.csv")
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
            AppId: dataArr2[i][0],
            
          };
          objectArray.push(obj);
        }

        setData(objectArray);
        console.log(data)
        
      });
    };
    useEffect(() => {
       fetchAppProperties()
      }, []);

    return (
        <div style={{ display: "flex", maxWidth: "100%" }}>
            <div style={{ flex: "1", padding: "20px" }}>
                <h2>App-Name oder App-ID eingeben:</h2>
                <Input
                    placeholder="Name oder App-ID"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                />
                <Button type="primary" onClick={fetchAppProperties} style={{ marginTop: "10px" }}>
                    Eigenschaften ermitteln
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
