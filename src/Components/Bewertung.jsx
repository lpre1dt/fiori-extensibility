import { Empty } from "antd";
import React from "react";
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
}) {
  if (showEvaluation) {
    return (
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
        }}
      >
        <h2>Bewertete Erweiterungsoptionen </h2>

        {uiFilteredData && (
          <div>
            <h3>Bewertete UI-Erweiterungsoptionen</h3>
            <ResponsiveContainer width="100%" height={400}>
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
                  unit="%"
                  domain={[0, 100]}
                />
                <YAxis
                  type="number"
                  dataKey="Flexibilitat"
                  name="Flexibilität"
                  unit="%"
                  domain={[0, 100]}
                />
                <ZAxis type="text" dataKey="Erweiterungsoption" name="Name" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                <Scatter data={uiFilteredData} fill="#04049c" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        )}
        {logicFilteredData && (
          <div>
            <h3>Bewertete Logik-Erweiterungsoptionen</h3>
            <ResponsiveContainer width="80%" height={400}>
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
                  unit="%"
                  domain={[0, 100]}
                />
                <YAxis
                  type="number"
                  dataKey="Flexibilitat"
                  name="Flexibilität"
                  unit="%"
                  domain={[0, 100]}
                />
                <ZAxis type="text" dataKey="Erweiterungsoption" name="Name" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                <Scatter data={logicFilteredData} fill="#04049c" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        )}
        {dataModelfilteredData && (
          <div>
            <h3>Bewertete Datenmodell-Erweiterungsoptionen</h3>
            <ResponsiveContainer width="100%" height={400}>
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
                  unit="%"
                  domain={[0, 100]}
                />
                <YAxis
                  type="number"
                  dataKey="Flexibilitat"
                  name="Flexibilität"
                  unit="%"
                  domain={[0, 100]}
                />
                <ZAxis type="text" dataKey="Erweiterungsoption" name="Name" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                <Scatter data={dataModelfilteredData} fill="#04049c" />
              </ScatterChart>
            </ResponsiveContainer>
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
        }}
      >
        <h2>Bewertete Erweiterungsoption</h2>
        <p>
          Bitte führen sie zuerst die Beschreibungsphase und die Beschreibung
          der Anforderungen durch.
        </p>
        <Empty
          style={{
            marginTop: "50px",
          }}
        />
      </div>
    );
  }
}
