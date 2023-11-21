import React, { useEffect, useState } from "react";
import { Checkbox, Button, Slider, Select } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";

export function Anforderungen({
  anforderungsFilter,
  setAnforderungsfilter,
  finished,
  setShowTable,
  setShowDetailView,
  showTable,
  showDetailView,
}) {
  const [workOnUI, setWorkOnUI] = useState(true);
  const [workOnLogic, setWorkOnLogic] = useState(true); // [0, 10
  const [workOnBackend, setWorkOnBackend] = useState(true);
  const [uiComplexity, setUiComplexity] = useState(0); // [0, 10
  const [logicComplexity, setLogicComplexity] = useState(0); // [0, 10
  const [backendComplexity, setBackendComplexity] = useState(0); // [0, 10

  const handleUiComplexity = (value) => {
    console.log(value);
    setUiComplexity(value);
  };
  const handleLogicComplexity = (value) => {
    console.log(value);
    setLogicComplexity(value);
  };
  const handleBackendComplexity = (value) => {
    console.log(value);
    setBackendComplexity(value);
  };
  const uiComplexityHelper = () => {
    if (uiComplexity === 0) {
      return <p>Keine Erweiterungen oder Änderungen and der UI</p>;
    }
    if (uiComplexity === 1) {
      return <p>Ansicht verändern oder personaliseren für Endbenutzer</p>;
    }
    if (uiComplexity === 2) {
      return (
        <p>
          Größere UI anpassungen vornhemen, Elemente verschieben, einblenden,
          ausblenden
        </p>
      );
    }
    if (uiComplexity === 3) {
      return (
        <p>
          Komplette UI anpassen, neue Elemente hinzufügen, neue Seiten erstellen
        </p>
      );
    }
    return <p>hoch</p>;
  };
  const logicComplexityHelper = () => {
    if (logicComplexity === 0) {
      return <p>Keine Erweiterungen oder Änderungen and der Logik</p>;
    }
    if (logicComplexity === 1) {
      return <p>Bestehende Logik anpassen</p>;
    }
    if (logicComplexity === 2) {
      return <p>Neue Logik hinzufügen</p>;
    }
  };
  const backendComplexityHelper = () => {
    if (backendComplexity === 0) {
      return (
        <p>
          Keine Erweiterungen am Datemodell benötigte daten befinden sich
          bereits im bestehenden Datenmodell
        </p>
      );
    }
    if (backendComplexity === 1) {
      return (
        <p>
          Felder zum Datenmodell hinzufügen, die bereits im S/4HANA System
          vorhanden sind
        </p>
      );
    }
    if (backendComplexity === 2) {
      return (
        <p>
          Felder zum Datenmodell hinzufügen, die nicht im S/4HANA System
          vorhanden sind und neu angelegt werden müssen.
        </p>
      );
    }
    if (backendComplexity === 3) {
      return (
        <p>
          Das bestehende Datenmodell wird grundlegend erweitert und zum Beispiel
          neune Knoten, Entitäten angelegt.
        </p>
      );
    }
  };
  const submitValues = () => {
    setAnforderungsfilter({
      uiComplexity: uiComplexity,
      logicComplexity: logicComplexity,
      backendComplexity: backendComplexity,
    });
    setShowTable(false);
    setShowDetailView(true);
  };

  useEffect(() => {
    setUiComplexity(anforderungsFilter?.uiComplexity);
    setLogicComplexity(anforderungsFilter?.logicComplexity);
    setBackendComplexity(anforderungsFilter?.backendComplexity);
  }, [anforderungsFilter]);

  if (showTable || showDetailView) {
    return (
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
          display: "grid",
          borderRadius: "10px",
        }}
      >
        <div>
          <h2> Anforderung der Erweiterung </h2>

          {workOnUI && (
            <div>
              <h3>Erweiterungen der UI</h3>
              <p>
                {" "}
                Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung
                bezogen auf die UI zuordnen?
              </p>
              Stufe: {uiComplexity}
              <div
                style={{
                  width: "250px",
                }}
              >
                <Slider
                  min={0}
                  max={3}
                  step={1}
                  value={uiComplexity}
                  defaultValue={uiComplexity}
                  onChange={handleUiComplexity}
                />
              </div>
              {uiComplexityHelper(uiComplexity)}
            </div>
          )}
          {workOnLogic && (
            <div>
              <h3>Erweiterungen der Logik</h3>
              <p>
                {" "}
                Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung
                bezogen auf die Logik zuordnen?
              </p>
              Stufe: {logicComplexity}
              <div
                style={{
                  width: "250px",
                }}
              >
                <Select
                  defaultValue={logicComplexity}
                  onChange={handleLogicComplexity}
                  style={{ width: "250px", marginTop: "20px" }}
                  options={[
                    { value: 0, label: "Keine Erweiterung der Logik" },
                    { value: 1, label: "Logik anpassen" },
                    { value: 2, label: "Logik erweitern" },
                  ]}
                />
              </div>
              {logicComplexityHelper(logicComplexity)}
            </div>
          )}
          {workOnBackend && (
            <div>
              <h3>Erweiterungen des Datenmodells</h3>
              <p>
                {" "}
                Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung
                bezogen auf die Erweiterung des Datenmodells im Backend
                zuordnen?
              </p>
              Stufe: {backendComplexity}
              <div
                style={{
                  width: "250px",
                }}
              >
                <Slider
                  value={backendComplexity}
                  min={0}
                  max={3}
                  step={1}
                  defaultValue={backendComplexity}
                  onChange={handleBackendComplexity}
                />
              </div>
              {backendComplexityHelper(backendComplexity)}
              <Button type="primary" onClick={submitValues}>
                Anforderungsbeschreibung abschließen
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          padding: 20,
          minHeight: 360,
          background: "white",
          display: "grid",
          borderRadius: "10px",
        }}
      >
        <div>
          <h2>Allgemeine Anforderung der Erweiterung </h2>
          <p> Beschreibungsphase muss vollständig durchgeführt werden</p>
          <LockOutlined
            style={{
              fontSize: "100px",
              color: "rgba(0, 0, 0, 0.25)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          />
        </div>
      </div>
    );
  }
}
