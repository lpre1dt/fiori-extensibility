import { Image } from "antd";
import React from "react";

export default function ODataContent() {
  return (
    <div>
      <h3>Wie wird bestimmt welchen Inhalt ein OData-Service enthält?</h3>
      <p>
        Wenn die Anwendung mehrere OData-Services verwendet, sollten die
        relevanten OData-Services für die Erweiterung identifiziert werden. Dies
        kann durch den Abgleich der Entitäten des OData-Services mit den
        Entitäten der Erweiterungsanforderung überprüft werden, insbesondere
        wenn die Erweiterungsanforderung eine Erweiterung des Datenmodells
        vorsieht.
      </p>
      <p>
        Um festzustellen, welche Daten der OData-Service bereitstellt, ohne
        diesen technisch zu analysieren, kann die Browser-URL des OData-Services
        aufgerufen und im JSON-Format betrachtet werden. Die Browser-URL erhält
        man aus der Transaktion "/IWFND/MAINT_SERVICE" - Services aktivieren und
        verwalten (siehe Abbildung 8), über den Button "Browser abrufen". Mit
        dieser URL können Anfragen gesendet werden, um die vom OData-Service
        ausgelesenen Daten zu erhalten.
      </p>
      <p>
        Ein Beispiel, wie man über URL-Abfragen die Inhalte eines OData-Services
        auslesen kann, ist hier am OData-Service "SD_F1708_CRT_WL_SRV"
        demonstriert.
      </p>
      <p>Vorgehen:</p>
      <Image src="/ODataProc.gif" alt="OData Content" />
      <p>Ausgabe im JSON Format:</p>
      <Image src="/Enities.png" alt="OData Content" />
      <p>Inhalt der Entität I_Customer:</p>{" "}
      <Image src="/ODataContent.png" alt="OData Content" />
    </div>
  );
}
