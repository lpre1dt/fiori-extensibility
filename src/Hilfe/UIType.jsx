import React from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";

export default function UIType() {
  return (
    <div>
      <h3>Wie wird der UI-Typ einer Fiori-Anwendung identifiziert?</h3>
      <p>
        Der UI-Typ der Anwendung ist für alle Fiori-Anwendungen in der{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={
            "https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1708')/S27OP"
          }
        >
          Fiori Apps Reference Library
        </Link>{" "}
        dokumentiert und kann aus ihr entnommen werden.
      </p>
      <p>
        Der UI-Typ ist als Applikationstyp definiert. Dort wird nicht nur
        zwischen SAPUI5 und Fiori Elements unterschieden, sondern es gibt
        mehrere Bezeichnungen. Diejenigen vom Typ SAPUI5 Freestyle haben die
        Bezeichnung "SAPUI5" oder "Fiori (SAPUI5)".
      </p>
      <p>
        Für Fiori Elements Anwendungen gibt es mehrere unterschiedliche
        Bezeichnungen wie:
      </p>
      <ul className="bulleted-list">
        <li>Transactional (SAP Fiori elements)</li>
      </ul>
      <ul className="bulleted-list">
        <li>Transactional (SAP Fiori elements for My Inbox)</li>
      </ul>
      <ul className="bulleted-list">
        <li>Analytical (SAP Fiori elements)</li>
      </ul>
      <ul className="bulleted-list">
        <li>Transactional, Analytical (SAP Fiori elements: Overview Page)</li>
      </ul>
      <p>Alle enthalten jedoch den Begriff "SAP Fiori Elements".</p>
      <div
        style={{
          width: "50%",
        }}
      >
        <Image src={"/UITYPE.png"} />
      </div>
    </div>
  );
}
