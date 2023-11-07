import { Button, Radio } from "antd";
import React from "react";

export default function Startseite() {
  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
      }}
    >
      <h2>
        Strukturiert vorgehen bei der Erweiterung von SAP Fiori-Anwendungen
      </h2>
      <p>
        Diese Webanwendung soll Ihnen dabei helfen, die richtige
        Erweiterungsoption für Ihre SAP Fiori-Anwendung zu finden. Dazu können
        Sie die verschiedenen Erweiterungsoptionen auswählen und erhalten eine
        Übersicht über die Erweiterungsmöglichkeiten.
      </p>
      <p>Die Webanwendung ist in drei Bereiche unterteilt:</p>
      <ul>
        <li>
          <b>Frontend:</b> Hier finden Sie Informationen über die
          Erweiterungsmöglichkeiten im Frontend.
        </li>
        <li>
          <b>Backend:</b> Hier finden Sie Informationen über die
          Erweiterungsmöglichkeiten im Backend.
        </li>
        <li>
          <b>Anforderungen:</b> Hier finden Sie Informationen über die
          Anforderungen an die Erweiterungsmöglichkeiten.
        </li>
      </ul>
      <p>
        Sie können die verschiedenen Bereiche über die Navigation erreichen.
      </p>

      <Button type="primary">Tour starten</Button>
    </div>
  );
}
