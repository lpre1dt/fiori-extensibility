import { Button, Checkbox, Radio } from "antd";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { DatabaseOutlined } from "@ant-design/icons";

export function Frontend({
  descriptionValues,
  setDescriptionValues,
  setShowTable,
}) {
  const [frontend, setFrontend] = useState(true);

  const [uiType, setUiType] = useState("null");
  const [floorplan, setFloorplan] = useState("null");
  const [businessContext, setBusinessContext] = useState("null");
  const [flexEabled, setFlexEnabled] = useState("null");
  const [syncEnabled, setSyncEnabled] = useState("null");
  const [oDataType, setODataType] = useState("null");
  const [behavioAllowed, setBehaviorAllowed] = useState("null");
  const handleFinished = () => {
    setShowTable(true);
  };
  const handleFloorplan = (e) => {
    setFloorplan(e.target.value);
  };

  const changeBehaviorAllowed = (e) => {
    setBehaviorAllowed(e.target.value);
  };

  const changeODataType = (e) => {
    setODataType(e.target.value);
    setBehaviorAllowed("null");
  };
  const changeBuinessContext = (e) => {
    setBusinessContext(e.target.value);
  };

  const changeSync = (e) => {
    setSyncEnabled(e.target.value);
  };

  const changeFlex = (e) => {
    setFlexEnabled(e.target.value);
    setSyncEnabled("null");
  };

  const changeRadio = (e) => {
    console.log(e.target.value);
    setUiType(e.target.value);

    setFlexEnabled("null");
    setSyncEnabled("null");
    setFloorplan("null");
  };
  const submitDescription = () => {
    setDescriptionValues({
      uiType: uiType,
      flexEnabled: flexEabled,
      syncEnabled: syncEnabled,
      floorplan: floorplan,
      businessContext: businessContext,
      oDataType: oDataType,
      behavioAllowed: behavioAllowed,
      frontend: frontend,
    });
    handleFinished();
  };
  useEffect(() => {
    if (descriptionValues.uiType !== undefined) {
      console.log("Backend Values Changed");
      setFrontend(descriptionValues.frontend);
      console.log(descriptionValues.uiType);

      setUiType(descriptionValues.uiType);
      setFlexEnabled(descriptionValues.flexEnabled);
      setSyncEnabled(descriptionValues.syncEnabled);
      setFloorplan(descriptionValues.floorplan);

      setFrontend(false);
      setBusinessContext(descriptionValues.businessContext);
      setODataType(descriptionValues.oDataType);
      setBehaviorAllowed(descriptionValues.behavioAllowed);
    }
  }, [descriptionValues]);

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
      }}
    >
      <h2>Beschreibungsphase</h2>

      {frontend === true && (
        <div>
          <h3>Frontend</h3>
          <div>
            <Radio.Group defaultValue={uiType}>
              <Radio value={"SAPUI5"} onChange={changeRadio}>
                SAPUI5 Freestyle
              </Radio>
              <Radio value={"FE"} onChange={changeRadio}>
                Fiori Elements
              </Radio>
            </Radio.Group>
          </div>
          {uiType === "null" && (
            <div>
              <p>
                Bitte wählen sie eine Option aus. Hilfe zur Beantwortung dieser
                Frage finden sie <Link>hier</Link>
              </p>
            </div>
          )}
          {uiType === "SAPUI5" && (
            <div>
              <p>
                Erfüllt die Anwendung die Bedingungen für SAPUI5 Flexibility?{" "}
                Wie überprüft werden kann, ob die Bedingungen für SAPUI5
                Flexibility erfüllt sind erfahren Sie <Link>hier</Link>
              </p>
              <Radio.Group defaultValue={flexEabled}>
                <Radio onChange={changeFlex} value={"yes"}>
                  Ja
                </Radio>
                <Radio onChange={changeFlex} value={"no"}>
                  Nein
                </Radio>
              </Radio.Group>
              <p></p>
              {flexEabled === "yes" && (
                <div>
                  <p>
                    Enthält die Anwendung synchrone Views? Wie überprüft werden
                    kann, ob die Anwendung synchrone Views enthält erfahren Sie{" "}
                    <Link>hier</Link>
                  </p>
                  <Radio.Group defaultValue={syncEnabled}>
                    <Radio onChange={changeSync} value={"yes"}>
                      Ja
                    </Radio>
                    <Radio onChange={changeSync} value={"no"}>
                      Nein
                    </Radio>
                  </Radio.Group>
                  {syncEnabled !== "null" && (
                    <div>
                      <Button
                        type="primary"
                        onClick={() => {
                          setFrontend(false);
                        }}
                        icon={React.createElement(DatabaseOutlined)}
                        style={{
                          marginTop: "20px",
                          width: "250px",
                        }}
                      >
                        Weiter zur Backend Analyse
                      </Button>
                    </div>
                  )}
                </div>
              )}
              {flexEabled === "no" && (
                <div>
                  <Button
                    type="primary"
                    onClick={() => {
                      setFrontend(false);
                    }}
                    icon={React.createElement(DatabaseOutlined)}
                    style={{
                      marginTop: "20px",
                      width: "250px",
                    }}
                  >
                    Weiter zur Backend Analyse
                  </Button>
                </div>
              )}
              {flexEabled === "null" && <div></div>}
            </div>
          )}
          {uiType === "FE" && (
            <div
              style={{
                display: "grid",
              }}
            >
              <p>
                Für welchen Floorplan sollen Erweiterungen in betracht gezogen
                werden?
              </p>
              <Radio.Group defaultValue={floorplan}>
                <Radio onChange={handleFloorplan} value={"Object Page"}>
                  Object Page
                </Radio>
                <Radio onChange={handleFloorplan} value={"List Report"}>
                  List Report
                </Radio>
                <Radio
                  onChange={handleFloorplan}
                  value={"Analytical List Page"}
                >
                  Analytical List Page
                </Radio>
                <Radio onChange={handleFloorplan} value={"Overview Page"}>
                  Overview Page
                </Radio>
                <Radio onChange={handleFloorplan} value={"Worklist"}>
                  Worklist
                </Radio>
              </Radio.Group>

              <p>
                Eine kurze Vorstellung der Fiori Elements Floorpläne finden Sie{" "}
                <Link>hier</Link>
              </p>
              {floorplan !== "null" && (
                <Button
                  type="primary"
                  onClick={() => {
                    setFrontend(false);
                  }}
                  icon={React.createElement(DatabaseOutlined)}
                  style={{
                    marginTop: "20px",
                    width: "250px",
                  }}
                >
                  Weiter zur Backend Analyse
                </Button>
              )}
            </div>
          )}
        </div>
      )}
      {frontend === false && (
        <div>
          Zurück zum{" "}
          <Link
            onClick={() => {
              setFrontend(true);
            }}
          >
            Frontend
          </Link>
          <h3>Backend</h3>
          <p>
            Ist der Geschäftskontext der Anwendung im Erweiterungsregister
            vorhanden? Wie sie herausfinden, ob der Geschäftskontext der
            Anwendung im Erweiterungsregister vorhanden ist erfahren sie{" "}
            <Link>hier</Link>{" "}
          </p>
          <Radio.Group defaultValue={businessContext}>
            <Radio onChange={changeBuinessContext} value={"yes"}>
              Ja
            </Radio>
            <Radio onChange={changeBuinessContext} value={"no"}>
              Nein
            </Radio>
          </Radio.Group>
          {businessContext !== "null" && (
            <div>
              <p>
                Auf welcher Technologie basiert der OData Service der Anwendung?
                Wenn die Anwendung mehrere OData Services verwendet bitte die
                Frae für den OData Service verwenden, den die Erweiterung
                betrifft
              </p>

              <Radio.Group defaultValue={oDataType}>
                <Radio onChange={changeODataType} value={"SEGW"}>
                  SAP Gateway OData Service
                </Radio>
                <Radio onChange={changeODataType} value={"RAP"}>
                  CDS mit RAP
                </Radio>
                <Radio onChange={changeODataType} value={"BOPF"}>
                  CDS mit BOPF
                </Radio>
              </Radio.Group>
              <p>
                Bitte wählen sie eine Option aus. Hilfe zur Beantwortung dieser
                Frage finden sie <Link>hier</Link>
              </p>
              {(oDataType === "SEGW" || oDataType === "BOPF") && (
                <div>
                  <Button
                    onClick={submitDescription}
                    type="primary"
                    style={{ marginTop: "20px" }}
                  >
                    Beschreibung abschließen
                  </Button>
                </div>
              )}
              {oDataType === "RAP" && (
                <div>
                  <p>
                    {" "}
                    Sind für den RAP-OData-Service Behavior-Erweiterungen
                    erlaubt?
                  </p>
                  <Radio.Group defaultValue={behavioAllowed}>
                    <Radio onChange={changeBehaviorAllowed} value={"yes"}>
                      Ja
                    </Radio>
                    <Radio onChange={changeBehaviorAllowed} value={"no"}>
                      Nein
                    </Radio>
                  </Radio.Group>
                  <p>
                    Bitte wählen sie eine Option aus. Hilfe zur Beantwortung
                    dieser Frage finden sie <Link>hier</Link>
                  </p>
                  {behavioAllowed !== "null" && (
                    <Button
                      onClick={submitDescription}
                      type="primary"
                      style={{ marginTop: "20px" }}
                    >
                      Beschreibung abschließen
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
