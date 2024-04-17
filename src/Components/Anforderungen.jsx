import React, { useEffect, useState } from "react";
import { Checkbox, Button, Slider, Select } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

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
  const [workOnLogic, setWorkOnLogic] = useState(true);
  const [workOnBackend, setWorkOnBackend] = useState(true);
  const [uiComplexity, setUiComplexity] = useState(0);
  const [logicComplexity, setLogicComplexity] = useState(0);
  const [backendComplexity, setBackendComplexity] = useState(0);
  const { t } = useTranslation();

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
      return <p>{t("ui0")}.</p>;
    }
    if (uiComplexity === 1) {
      return <p>{t("ui1")}</p>;
    }
    if (uiComplexity === 2) {
      return <p>{t("ui2")}</p>;
    }
    if (uiComplexity === 3) {
      return <p>{t("ui3")}</p>;
    }
    return <p>hoch</p>;
  };
  const logicComplexityHelper = () => {
    if (logicComplexity === 0) {
      return <p>{t("logik0")}</p>;
    }
    if (logicComplexity === 1) {
      return <p>{t("logik1")}</p>;
    }
    if (logicComplexity === 2) {
      return <p>{t("logik2")}</p>;
    }
  };
  const backendComplexityHelper = () => {
    if (backendComplexity === 0) {
      return <p>{t("backend0")}</p>;
    }
    if (backendComplexity === 1) {
      return <p>{t("backend1")}</p>;
    }
    if (backendComplexity === 2) {
      return <p>{t("backend2")}</p>;
    }
    if (backendComplexity === 3) {
      return <p>{t("backend3")}</p>;
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
          <h2> {t("requiremetText1")}</h2>

          {workOnUI && (
            <div>
              <h3>{t("requiremetText2")}</h3>
              <p> {t("requiremetText5")}</p>
              {t("stufe")}: {uiComplexity}
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
              <h3>{t("requiremetText3")}</h3>
              <p> {t("requiremetText6")}</p>
              {t("stufe")}: {logicComplexity}
              <div
                style={{
                  width: "250px",
                }}
              >
                <Select
                  defaultValue={logicComplexity}
                  onChange={handleLogicComplexity}
                  style={{ width: "300px", marginTop: "20px" }}
                  options={[
                    { value: 0, label: <p>{t("noChanges")}</p> },
                    { value: 1, label: <p>{t("changeLogic")}</p> },
                    { value: 2, label: <p>{t("addLogic")}</p> },
                  ]}
                />
              </div>
              {logicComplexityHelper(logicComplexity)}
            </div>
          )}
          {workOnBackend && (
            <div>
              <h3>{t("requiremetText3")}</h3>
              <p> {t("requiremetText7")}</p>
              {t("stufe")}: {backendComplexity}
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
                {t("finishRequirement")}
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
          <h2>{t("requiremetText8")}</h2>
          <p>{t("requiremetText9")}</p>
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
