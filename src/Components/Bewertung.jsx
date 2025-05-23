import { Empty } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  LabelList,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Bewertung({
  showEvaluation,
  uiFilteredData,
  logicFilteredData,
  dataModelfilteredData,
  setShowHelp,
}) {
  const { t } = useTranslation();
  if (showEvaluation) {
    return (
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
          borderRadius: "10px",
        }}
      >
        <h2>{t("evaluatedOptions")} </h2>
        <h3>{t("evauluationCriteria")}</h3>
        <ul>
          <li>
            <b>{t("aufwand")} (A in %):</b> {t("effortText")}
          </li>
          <li>
            <b>{t("flexibilitaet")} (F in %):</b> {t("flexText")}
          </li>
        </ul>
        <p>
          {t("evaluationText2")}{" "}
          <Link
            onClick={() => {
              setShowHelp({ show: true, help: "bewertung" });
            }}
          >
            {t("here")}
          </Link>
        </p>
        <p>
          {t("evaluationText3")}{" "}
          <Link
            onClick={() => {
              setShowHelp({ show: true, help: "selection" });
            }}
          >
            {t("here")}
          </Link>
        </p>

        {uiFilteredData && (
          <div>
            <h3>{t("bewertung.uiLabel")} {t("evaluatedOptions")} </h3>
            <div style={{ height: "600px", width: "600px" }}>
              <ResponsiveContainer>
                <ScatterChart
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                  }}
                >
                  <XAxis
                    type="number"
                    dataKey="Aufwand"
                    name="Aufwand"
                    unit="% A"
                    domain={[0, 100]}
                  />
                  <YAxis
                    type="number"
                    dataKey="Flexibilitat"
                    name="Flexibilität"
                    unit="% F"
                    domain={[0, 100]}
                  />
                  <ZAxis type="text" dataKey="Erweiterungsoption" name="Name" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                  <Scatter data={uiFilteredData} fill="#04049c" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        {logicFilteredData && (
          <div>
            <h3>{t("bewertung.bewerteteLogikOptionen")}</h3>
            <div style={{ height: "600px", width: "600px" }}>
              <ResponsiveContainer>
                <ScatterChart
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                  }}
                >
                  <XAxis
                    type="number"
                    dataKey="Aufwand"
                    name="Aufwand"
                    unit="% A"
                    domain={[0, 100]}
                  />
                  <YAxis
                    type="number"
                    dataKey="Flexibilitat"
                    name="Flexibilität"
                    unit="% F"
                    domain={[0, 100]}
                  />
                  <ZAxis type="text" dataKey="Erweiterungsoption" name="Name" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                  <Scatter data={logicFilteredData} fill="#04049c" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        {dataModelfilteredData && (
          <div>
            <h3>{t("bewertung.bewerteteDatenmodellOptionen")}</h3>
            <div style={{ height: "600px", width: "600px" }}>
              <ResponsiveContainer>
                <ScatterChart
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                  }}
                >
                  <XAxis
                    type="number"
                    dataKey="Aufwand"
                    name="Aufwand"
                    unit="% A"
                    domain={[0, 100]}
                  />
                  <YAxis
                    type="number"
                    dataKey="Flexibilitat"
                    name="Flexibilität"
                    unit="% F"
                    domain={[0, 100]}
                  />
                  <ZAxis type="text" dataKey="Erweiterungsoption" name="Name" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                  <Scatter data={dataModelfilteredData} fill="#04049c" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
          borderRadius: "10px",
        }}
      >
        <h2>{t("evaluatedOptions")}</h2>
        <p>{t("evaluationHelp")}</p>
        <Empty
          style={{
            marginTop: "50px",
          }}
        />
      </div>
    );
  }
}
