import { Empty } from "antd";
import React from "react";
import { Link } from "react-router-dom";
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
        <h2>Bewertete Erweiterungsoptionen </h2>
        <h3>Bewertungskriterien</h3>
        <ul>
          <li>
            <b>Aufwand (A in %):</b> Wie aufwändig ist die Erweiterungsoption zu
            implementieren in % ausgehend von der Erweiterungsoption mit dem
            höchsten Aufwand. ( 100% = Erweiterungsoption mit dem höchsten
            Aufwand)
          </li>
          <li>
            <b>Flexibilität (F in %):</b> Wie flexibel ist die
            Erweiterungsoption in % ausgehend von der Erweiterungsoption mit der
            höchsten Flexibilität. ( 100% = Erweiterungsoption mit der höchsten
            Flexibilität)
          </li>
        </ul>
        <p>
          Informationen zu der genauen Berechnung von Flexibilität und Aufwand
          finden Sie{" "}
          <Link
            onClick={() => {
              setShowHelp({ show: true, help: "bewertung" });
            }}
          >
            hier
          </Link>
        </p>

        {uiFilteredData && (
          <div>
            <h3>Bewertete UI-Erweiterungsoptionen</h3>
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
            <h3>Bewertete Logik-Erweiterungsoptionen</h3>
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
            <h3>Bewertete Datenmodell-Erweiterungsoptionen</h3>
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
        <h2>Bewertete Erweiterungsoption</h2>
        <p>
          Bitte führen Sie zuerst die Beschreibungsphase und die Beschreibung
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
