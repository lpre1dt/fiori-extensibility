import { Checkbox } from "antd";
import React from "react";
import { useState } from "react";

export default function Frontend({ change }) {
  const [ui5Selected, setUi5Serlected] = useState(false);
  const [fioriElementsSelected, setFioriElements] = useState(false);
  const handleChanges = (event) => {
    change(event.target.value);
  };
  const handleUi5 = (event) => {
    const newValue = event.target.checked;
    setUi5Serlected(newValue);
  };
  const handleFioriElements = (event) => {
    const newValue = event.target.checked;
    setFioriElements(newValue);
  };
  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
      }}
    >
      <h2>Informantionen über das Frontend</h2>
      <div style={{ display: "grid" }}>
        <h3> Allgemeine Informationen</h3>
        <Checkbox>
          {" "}
          Die Anwendung erfüllt die allgemeinen Voraussetzungen für SAPUI5
          Flexibility
        </Checkbox>
        <Checkbox>Verwendet die Anwendung synchrone Views?</Checkbox>
        <h3> UI-Technologie</h3>
        <Checkbox onChange={handleUi5} checked={ui5Selected}>
          Die Anwendung verwendet SAPUI5
        </Checkbox>
        <Checkbox
          onChange={handleFioriElements}
          checked={fioriElementsSelected}
        >
          Die Anwendung verwendet SAP Fiori Elements
        </Checkbox>
      </div>
      {fioriElementsSelected && (
        <div
          style={{
            display: "grid",
          }}
        >
          <h3>Welche Fiori Elements Floorpläne werden verwendet?</h3>
          <Checkbox>List Report</Checkbox>
          <Checkbox>Analytical List</Checkbox>
          <Checkbox>Object Page</Checkbox>
          <Checkbox>Worklist</Checkbox>
          <Checkbox>Overview Page</Checkbox>
        </div>
      )}
    </div>
  );
}
