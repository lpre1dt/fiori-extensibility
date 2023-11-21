import React from "react";
import { Link } from "react-router-dom";

export default function Floorplan() {
  return (
    <div>
      <h3>
        Wie identifiziere ich den Floorplan einer Fiori Elements-Anwendung?
      </h3>
      <p>
        Ist der Name des Floorplans nicht aus dem Applikationstyp in der Fiori
        Apps Reference Library identifizierbar, muss er manuell abgeglichen
        werden. Eine Übersicht mit allen Fiori Elements Floorplans finden Sie{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={
            "https://sapui5.hana.ondemand.com/sdk/#/topic/797c3239b2a9491fa137e4998fd76aa7"
          }
        >
          hier
        </Link>
        .
      </p>
    </div>
  );
}
