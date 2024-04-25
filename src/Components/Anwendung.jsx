import { Button, Checkbox, Radio } from "antd";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { DatabaseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FioriAppDetector } from "./FioriAppDetector";
import { Tabs } from 'antd';

export function Anwendung({
  descriptionValues,
  setDescriptionValues,
  setShowTable,
  setAnforderungsfilter,
  setShowDetailView,
  setShowHelp,
}) {
  const navigate = useNavigate();
  const handleHelp = () => {
    navigate("/hilfe");
  };
  const [frontend, setFrontend] = useState(true);
  const { t } = useTranslation();

  const [uiType, setUiType] = useState("null");
  const [floorplan, setFloorplan] = useState("null");
  const [businessContext, setBusinessContext] = useState("null");
  const [flexEabled, setFlexEnabled] = useState("null");
  const [syncEnabled, setSyncEnabled] = useState("null");
  const [oDataType, setODataType] = useState("null");
  const [behavioAllowed, setBehaviorAllowed] = useState("null");

  const handleFinished = () => {
    setShowTable(true);
    setShowDetailView(false);
    setAnforderungsfilter({
      uiComplexity: 0,
      logicComplexity: 0,
      backendComplexity: 0,
    });
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
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <h2>{t("applicationText1")}</h2>
    
    <Tabs items={[
      {
        key: 1,
        label: "Wizard",
        children: (<FioriAppDetector/>)
      },
      {
      key: 2,
      label: "Manuell",
      children: ( <div>
        {frontend === true && (
        <div style={{}}>
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
                {t("chooseOption")}
                <Link
                  onClick={() => {
                    setShowHelp({ show: true, help: "ui" });
                  }}
                >
                  {t("here")}
                </Link>
              </p>
            </div>
          )}
          {uiType === "SAPUI5" && (
            <div>
              <p>{t("applicationText12")} </p>
              <p>
                {t("sapUi5Flex")}
                <Link
                  onClick={() => {
                    setShowHelp({ show: true, help: "flex" });
                  }}
                >
                  {t("here")}
                </Link>
              </p>
              <Radio.Group defaultValue={flexEabled}>
                <Radio onChange={changeFlex} value={"yes"}>
                  {t("ja")}
                </Radio>
                <Radio onChange={changeFlex} value={"no"}>
                  {t("nein")}
                </Radio>
              </Radio.Group>
              <p></p>
              {flexEabled === "yes" && (
                <div>
                  <p>{t("applicationText13")} </p>
                  <p>
                    {" "}
                    {t("asyncViews")}
                    <Link
                      onClick={() => {
                        setShowHelp({ show: true, help: "sync" });
                      }}
                    >
                      {t("here")}
                    </Link>
                  </p>
                  <Radio.Group defaultValue={syncEnabled}>
                    <Radio onChange={changeSync} value={"yes"}>
                      {t("ja")}
                    </Radio>
                    <Radio onChange={changeSync} value={"no"}>
                      {t("nein")}
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
                        {t("toBackend")}
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
                    {t("toBackend")}
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
              <p>{t("floorPlan")}</p>
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
                {t("applicationText6")}{" "}
                <Link
                  onClick={() => {
                    setShowHelp({ show: true, help: "floorplan" });
                  }}
                >
                  {t("here")}
                </Link>
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
                  {t("toBackend")}
                </Button>
              )}
            </div>
          )}
        </div>
      )}
      {frontend  === false && (
        <div>
          {t("backTo")}
          <Link
            onClick={() => {
              setFrontend(true);
            }}
          >
            Frontend
          </Link>
          <h3>Backend</h3>
          <p>{t("applicationText14")}</p>
          <p>
            {t("businessContext")}
            <Link
              onClick={() => {
                setShowHelp({ show: true, help: "context" });
              }}
            >
              {t("here")}
            </Link>{" "}
            .
          </p>
          <Radio.Group defaultValue={businessContext}>
            <Radio onChange={changeBuinessContext} value={"yes"}>
              {t("ja")}
            </Radio>
            <Radio onChange={changeBuinessContext} value={"no"}>
              {t("nein")}
            </Radio>
          </Radio.Group>
          {businessContext !== "null" && (
            <div>
              <p>{t("applicationText15")}</p>

              <p>
                {" "}
                {t("multipleOData")}
                <Link
                  onClick={() => {
                    setShowHelp({ show: true, help: "odatacontent" });
                  }}
                >
                  {t("here")}
                </Link>
                .
              </p>

              <Radio.Group defaultValue={oDataType}>
                <Radio onChange={changeODataType} value={"SEGW"}>
                  {t("noCDS")}
                </Radio>
                <Radio onChange={changeODataType} value={"CDS"}>
                  {t("cds")}
                </Radio>
                <Radio onChange={changeODataType} value={"RAP"}>
                  {t("cdsRAP")}
                </Radio>
                <Radio onChange={changeODataType} value={"BOPF"}>
                  {t("cdsBOPF")}
                </Radio>
              </Radio.Group>
              <p>
                {t("chooseOption")}
                <Link
                  onClick={() => {
                    setShowHelp({ show: true, help: "odata" });
                  }}
                >
                  {t("here")}
                </Link>
              </p>
              {(oDataType === "SEGW" ||
                oDataType === "BOPF" ||
                oDataType === "CDS") && (
                <div>
                  <Button
                    onClick={submitDescription}
                    type="primary"
                    style={{ marginTop: "20px" }}
                  >
                    {t("applicationText11")}
                  </Button>
                </div>
              )}
              {oDataType === "RAP" && (
                <div>
                  <p> {t("applicationText16")}</p>
                  <Radio.Group defaultValue={behavioAllowed}>
                    <Radio onChange={changeBehaviorAllowed} value={"yes"}>
                      {t("ja")}
                    </Radio>
                    <Radio onChange={changeBehaviorAllowed} value={"no"}>
                      {t("nein")}
                    </Radio>
                  </Radio.Group>
                  <p>
                    {t("chooseOption")}
                    <Link
                      onClick={() => {
                        setShowHelp({ show: true, help: "behavior" });
                      }}
                    >
                      {t("here")}
                    </Link>
                  </p>
                  {behavioAllowed !== "null" && (
                    <Button
                      onClick={submitDescription}
                      type="primary"
                      style={{ marginTop: "20px" }}
                    >
                      {t("applicationText11")}
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

      )}</div>),
      }
    ]} />

     
    </div>
  );
}
