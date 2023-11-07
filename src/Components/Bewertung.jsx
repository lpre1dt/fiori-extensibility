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

export default function Bewertung({ showEvaluation, filteredData }) {
  if (showEvaluation) {
    return (
      <div>
        <h2>Bewertete Erweiterungsoptionen </h2>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
            }}
          >
            <XAxis type="number" dataKey="Umfang" name="Umfang" unit="U" />
            <YAxis
              type="number"
              dataKey="Umfang"
              name="Flexibilität"
              unit="F"
            />
            <ZAxis type="text" dataKey="Name" name="Name" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />

            <Scatter data={filteredData} fill="#04049c" />
          </ScatterChart>
        </ResponsiveContainer>
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
