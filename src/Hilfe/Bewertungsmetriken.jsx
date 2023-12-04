import { Table } from "antd";
import React from "react";

export default function Bewertungsmetriken() {
  const columns1 = [
    {
      title: "Stufe",
      dataIndex: "Stufe",
      key: "Stufe",
      width: "5%",
    },
    {
      title: "Beschreibung",
      dataIndex: "Beschreibung",
      key: "Stufe",
      width: 20,
    },
  ];
  const columns2 = [
    {
      title: "Ausprägung",
      dataIndex: "Ausprägung",
      key: "Auspräung",
      width: "20%",
    },
    {
      title: "Beschreibung",
      dataIndex: "Beschreibung",
      key: "Stufe",
      width: 20,
    },
    {
      title: "Wert",
      dataIndex: "Wert",
      key: "Wert",
      width: "5%",
    },
  ];

  const data1 = [
    {
      Stufe: 1,
      Beschreibung: "Bestehendes anpassen oder Personalisieren.",
    },
    {
      Stufe: 2,
      Beschreibung:
        "Einfache Inhalte hinzufügen, die noch nicht im Datenmodell sind.",
    },
    {
      Stufe: 3,
      Beschreibung: "Datenmodell oder Logik Erweiterungen geführt (Key-User).",
    },
    {
      Stufe: 4,
      Beschreibung:
        "An Expliziten Erweiterungspunkten benutzerdefinierten Code hinzufügen.",
    },
    {
      Stufe: 5,
      Beschreibung:
        "Implizite Erweiterungen mit benutzerdefiniertem Code hinzufügen.",
    },
    {
      Stufe: 6,
      Beschreibung: "Aktiv in bestehenden Programmcode eingreifen.",
    },
  ];
  const data2 = [
    {
      Ausprägung: "UI 1",
      Beschreibung: "Ansicht verändern, Tabellenspalten und Filter anpassen",
      Wert: 1,
    },
    {
      Ausprägung: "UI 2",
      Beschreibung: "Visuelle Anpassung, Inhalte entfernen, verschieben",
      Wert: 2,
    },
    {
      Ausprägung: "UI 3",
      Beschreibung: "Visuelle Erweiterung Inhalte hinzufügen",
      Wert: 3,
    },
    {
      Ausprägung: "Logik 1",
      Beschreibung:
        "Logik Anpassung, Erweiterungen die in die bestehende Logik eingreifen",
      Wert: 3,
    },
    {
      Ausprägung: "Logik 2",
      Beschreibung:
        "Logik Erweiterungen, die nicht in die bestehende Logik eingreifen und neue Logik ergänzen.",
      Wert: 3,
    },
    {
      Ausprägung: "Datenmodell 1",
      Beschreibung:
        "Felder zum bestehenden Datenmodell hinzufügen (bereits in S/4HANA) vorhanden",
      Wert: 1,
    },
    {
      Ausprägung: "Datenmodell 2",
      Beschreibung:
        "Felder zum bestehenden Datenmodell hinzufügen (noch nicht in S/4HANA) vorhanden",
      Wert: 2,
    },
    {
      Ausprägung: "Datenmodell 3",
      Beschreibung:
        "Das bestehende Datenmodell grundlegend Erweitern um neue Knoten oder Entitäten.",
      Wert: 3,
    },
  ];
  return (
    <div>
      <h3>Wie wurden die Werte für Flexibililät und Aufwand berechnet?</h3>
      <h4>Flexibilität</h4>
      <p>Für die Flexibilität wurden 6 Flexibilitätsstufen definiert:</p>
      <Table columns={columns1} dataSource={data1} pagination={false} />
      <p>
        In diese Flexibilitätsstufen wurde alle Erweiterungsoptionen
        eingeordnet.
      </p>
      <p>
        Nach dieser Einordnung wurden alle Erweiterungsoptionen * 10
        mulipliziert und subjektive Anpassungen im Intervall (-10;10)
        durchgeführt, um, die Bewertungungen zu diversifizieren.
      </p>
      <p>
        Am Enden wurden die korrigierten Werte in Prozent (%) zum höchsten Wert
        umgewandelt.
      </p>
      <h4>Aufwand</h4>
      <p>
        {" "}
        Der Gesamtaufwand (GA) berechnet sich aus dem Mindestaufwand (MA) und
        einem Wert berechnet aus der Ausprägung in der Spalte
        "Erweiterungsmöglichkeit" (EM).
      </p>
      <p>GA = MA + EM </p>

      <p>
        Der <b> Mindestaufwand </b> wird berechnet aus der Summe an Schritten,
        die mindestens bei der Implementation einer Erweiterungsoption
        durchgeführt werden müssen, ohne die eigentliche Implementation. Also
        sozusagen die Opportunitätskosten einer Erweiterungsoption.
      </p>
      <p> Beispiel für Erweiterungsoption "Controller anlegen":</p>
      <li>Adaptation Project anlegen </li>
      <li> Controller anlegen</li>
      <li>Logik implementieren (wird nicht einbezogen)</li>
      <li> Produktivsetzen</li>
      <p> Daraus ergibt sich ein MA von 3</p>
      <p>
        {" "}
        Der <b>Wert aus der Erweiterungsmöglichkeit</b> ergibt sich aus der dem
        höchsten Wert, der Kategorie, den die Erweiterungsoption in der Spalte
        "Erweiterungsmöglichkeiten in der Datengrundlage enhält.{" "}
      </p>
      <p>
        {" "}
        Die folgende Tabelle zeigt, die Wert die für EM übernommen werden für
        jede Erweiterungsoption. Logik Erweiterungsoptionen wird pauschal der
        Wert 3 übernommen.
      </p>
      <Table columns={columns2} dataSource={data2} pagination={false} />
      <p>
        Auch hier wurden nach dieser Einordnung alle Erweiterungsoptionen * 10
        mulipliziert und subjektive Anpassungen im Intervall (-10;10)
        durchgeführt, um, die Bewertungungen zu diversifizieren.
      </p>
      <p>
        Am Enden wurden die korrigierten Werte in Prozent (%) zum höchsten Wert
        umgewandelt.
      </p>
    </div>
  );
}
