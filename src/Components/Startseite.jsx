import { Button, Radio } from "antd";
import React from "react";

export default function Startseite() {
  //Startseite
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
        Übersicht über die Erweiterungsmöglichkeiten. Die Webanwendung ist Teil
        des Konzepts zum strukturierten Vorgehen bei der Erweiterung von SAP
        Fiori-Anwendungen. Dieses Konzept besteht aus einer Analyse der
        Anwendung, einer Beschreibung der Anwendung und einer Selektion der
        verfügbaren Erweiterungsoptionen.
      </p>
      <p>
        Um Zugriff auf das gesamte Konzept zu erhalten, wenden Sie sich bitte
        per E-Mail an <a href="mailto:lukas.preidt@mhp.com">Lukas Preidt</a>.
      </p>
      <p>Die Webanwendung ist in drei Bereiche unterteilt:</p>
      <ul>
        <li>
          <b>Fiori-Anwendung:</b> Hier können Sie Frontend und Backend der
          Fiori-Anwendung beschreiben. Zur Beantwortung der Fragen werden Ihnen
          Hilfestellungen angeboten.
        </li>
        <li>
          <b>Anforderungen:</b> Hier können Sie die Erweiterungsanforderung
          beschreiben, die Sie für Ihre Fiori-Anwendung implementieren möchten.
        </li>
        <li>
          <b>Selektion:</b> Hier werden die verfügbaren Erweiterungsoptionen
          visualisiert, und Sie können die für Sie passende Option auswählen.
        </li>
      </ul>
      <p>
        Sie können die verschiedenen Bereiche über die Navigation erreichen.
      </p>
      <h3>Einführungsvideo</h3>
      <p>
        Schauen Sie sich bitte vor der ersten Durchführung das folgende Video
        an: (wenn ich machnmal etwas zu langsam rede kann man das Video auch auf
        2x Geschwindigkeit abspielen)
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1_DQTCTPdaFz-pcNidNeldoUPPUbcJlwJ/preview"
          width="740"
          height="480"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeIBCP3x24DbEReed4OhDNhsFaDs2gsB1xuH-8aaWb3izj6Sw/viewform?embedded=true"
          width="640"
          height="480"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Wird geladen…
        </iframe>
      </div>
      <h3> Datengrundlage</h3>
      <p>
        Als Datengrundlage für die Erweiterungsoptionen dient die folgende
        CSV-Datei.
      </p>
      <Button
        download="/ErweiterungsoptionenDB.csv"
        type="primary"
        href="/ErweiterungsoptionenDB.csv"
      >
        Download
      </Button>
    </div>
  );
}
