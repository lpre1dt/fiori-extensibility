// Backend.js
import { Input, Checkbox } from "antd";
import React, { useEffect, useState } from "react";

export function Backend({ backendValues, setBackendValues }) {
  const [rapSelected, setRapSelected] = useState(false);
  const [bopfSelected, setBopfSelected] = useState(false);
  const [badiSelcected, setBadiSelected] = useState(false);
  const [extensibilityRegisterSelected, setExtensibilityRegisterSelected] =
    useState(false);
  const [gatewaySelected, setGatewaySelected] = useState(false);

  //Handler Functions for OData Services Types
  const handleBopf = (event) => {
    const newValue = event.target.checked;
    setBopfSelected(newValue);
    setBackendValues({
      gateway: gatewaySelected,
      rap: rapSelected,
      bopf: newValue,
      badi: badiSelcected,
      extensibilityRegister: extensibilityRegisterSelected,
    });
  };
  const handleBadi = (event) => {
    const newValue = event.target.checked;
    setBadiSelected(newValue);
    setBackendValues({
      gateway: gatewaySelected,
      rap: rapSelected,
      bopf: bopfSelected,
      badi: newValue,
      extensibilityRegister: extensibilityRegisterSelected,
    });
  };
  const handleExtensibilityRegister = (event) => {
    const newValue = event.target.checked;
    setExtensibilityRegisterSelected(newValue);
    setBackendValues({
      gateway: gatewaySelected,
      rap: rapSelected,
      bopf: bopfSelected,
      badi: badiSelcected,
      extensibilityRegister: newValue,
    });
  };
  const handleRap = (event) => {
    const newValue = event.target.checked;
    setRapSelected(newValue);
    setBackendValues({
      gateway: gatewaySelected,
      rap: newValue,
      bopf: bopfSelected,
      badi: badiSelcected,
      extensibilityRegister: extensibilityRegisterSelected,
    });
  };
  const handleGateway = (event) => {
    const newValue = event.target.checked;
    setGatewaySelected(newValue);
    setBackendValues({
      gateway: newValue,
      rap: rapSelected,
      bopf: bopfSelected,
      badi: badiSelcected,
      extensibilityRegister: extensibilityRegisterSelected,
    });
  };

  useEffect(() => {
    // Setzt den initialen Wert beim ersten Rendern
    setBopfSelected(backendValues.bopf);
    setRapSelected(backendValues.rap);
    setGatewaySelected(backendValues.gateway);
    setBadiSelected(backendValues.badi);
    setExtensibilityRegisterSelected(backendValues.extensibilityRegister);
  }, [backendValues]);

  const [selectedValues, setSelectedValues] = useState("");

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
        display: "grid",
      }}
    >
      <h2>Informantionen über das Backend {bopfSelected}</h2>

      <h3> Allgemeine Informationen</h3>
      <Checkbox onChange={handleBadi} checked={badiSelcected}>
        Die Fiori App verwendet BAdIs
      </Checkbox>
      <Checkbox
        onChange={handleExtensibilityRegister}
        checked={extensibilityRegisterSelected}
      >
        Der Business Context der Fiori App befindet sich im Extensibility
        Registry
      </Checkbox>

      <h3> Welche ODataservices konsumiert die Fiori App</h3>
      <Checkbox onChange={handleGateway} checked={gatewaySelected}>
        SAP Gateway OData Service
      </Checkbox>
      <Checkbox onChange={handleBopf} checked={bopfSelected}>
        CDS mit BOPF
      </Checkbox>
      <Checkbox onChange={handleRap} checked={rapSelected}>
        CDS mit RAP
      </Checkbox>
      {(bopfSelected || rapSelected) && (
        <div
          style={{
            display: "grid",
          }}
        >
          {" "}
          <h3> Allgemeine CDS Eigenschaften</h3>
          <Checkbox>CDS View erlaubt Metadata Extensions</Checkbox>
          <Checkbox>
            CDS View hat einen Stabilitätskontrakt von mind. C0
          </Checkbox>
        </div>
      )}
      {bopfSelected && (
        <div
          style={{
            display: "grid",
          }}
        >
          <h3> BOPF spezifische Eigenschaften</h3>
        </div>
      )}
      {rapSelected && (
        <div
          style={{
            display: "grid",
          }}
        >
          <h3> RAP-spezifische Eigenschaften </h3>
          <Checkbox>Knotenerweiterung erlaubt</Checkbox>
          <Checkbox>Behaviorerweiterung erlaubt</Checkbox>
        </div>
      )}
      {gatewaySelected && <div> Gateway ist ausgewählt</div>}
    </div>
  );
}
