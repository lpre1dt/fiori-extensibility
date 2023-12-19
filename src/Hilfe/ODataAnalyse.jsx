import { Image, Tabs } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function ODataAnalyse() {
  return (
    <div>
      <h3>
        Wie wird bestimmt, auf welcher Technologie ein OData-Service basiert?
      </h3>
      <p>
        Zuerst müssen Sie den OData-Service Ihrer Fiori-Anwendung
        identifizieren. Den Namen des OData-Service erhalten Sie aus der{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={
            "https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1708')/S27OP"
          }
        >
          Fiori Apps Reference Library
        </Link>{" "}
      </p>
      <Image src={"/2ODATA.gif"} alt="OData Analyse" />
      <p>
        Einige OData-Services kann man über ihre Namenskonvention
        identifizieren. Es wird empfohlen, den folgenden Entscheidungsbaum zu
        durchlaufen und einem der Analyse-Profile zuzuordnen:
      </p>
      <Image src={"/ODataAnalyse.png"} alt="Analyse Profile" />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={<span>Analyse-Profil A</span>} key="1">
          <h3>Überblick</h3>
          <p>Datenmodell: CDS-basiert</p>
          <p>ABAP-Framework: RAP</p>
          <p>RAP OData-Services beginnen mit "UI_*"</p>
          <p>
            Durch die strenge Namenskonvention bei RAP OData Services ist es
            möglich, mit relativ geringem Aufwand, die Architektur des Services
            in Eclipse zu betrachten. Dafür muss nur der Name des OData Service
            in der ABAP-Objektsuche gesucht werden.
          </p>
          <h3>Wie Sie vom Namen des OData-Services zum CDS-Modell kommen:</h3>
          <Image src="/RAPTPCDS.gif" alt="CDS Modell" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Analyse-Profil B</span>} key="2">
          <h3>Überblick</h3>
          <p>Datenmodell: CDS-basiert</p>
          <p>ABAP-Framework: BOPF</p>
          <p>
            Den Namen des OData Services erhält man hier auch aus dem Eintrag in
            der Fiori Apps Reference Library. Um OData Services zu analysieren,
            die mit „_CDS“ enden, kann die Endung „_CDS“ entfernt werden und man
            erhält den Namen des Consumption CDS-Views, aus dem der
            OData-Service veröffentlicht wurde. Das funktioniert, da
            OData-Services mit dieser Namenskonvention, über die Annotation
            „@OData.Publish:true“ aus dem CDS-View generiert wurden.
          </p>
          <h3>Wie Sie vom Namen des OData-Services zum CDS-Modell kommen:</h3>
          <Image src="/CDSGIF.gif" alt="CDS Modell" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Zwischenschritt CD</span>} key="3">
          <p>
            Falls der OData-Service nicht dem Analyse-Profil A oder B zugeordnet
            werden konnte, ist der Zwischenschritt CD durchzuführen. Im
            Zwischenschritt CD wird gezeigt, wie man mit dem Namen des
            OData-Service sein SEGW-Projekt finden kann und den OData-Service
            den Analyseprofilen C oder D zuordnen kann. Der OData-Service sollte
            im SAP Gateway-Client in der Transaktion „/IWFND/MAINT_SERVICE“
            betrachtet werden. Von dort kann über den Button
            „Serviceimplementierung“ der Screen „Service anzeigen“ erreicht
            werden.
          </p>
          <Image src="/ServiceClient.png" alt="Service Client" />
          <p>
            Im Screen „Service anzeigen“ kann zur Modellanbieterklasse navigiert
            werden, die sich im Paket befindet, in dem auch das SEGW-Projekt
            angelegt ist.
          </p>
          <Image src="/ServiceAnzeigen.png" alt="Service Anzeigen" />
          <p>
            Befindet man sich im Ordner, kann man die SEGW-Projekte, die im
            Ordner angelegt sind. Es kann vorkommen, dass mehrere SEGW-Projekte
            im gleichen Ordner angelegt sind. In diesem Fall sollten überprüft
            werden, welcher Name die größte Übereinstimmung mit dem Namen des
            OData-Services hat.
          </p>
          <Image src="/Classbuilder.png" alt="Class Builder" />
          <p>
            Ist das SEGW-Projekt identifiziert, kann das Projekt in der
            Transaktion geöffnet werden und der Service analysiert werden. Hier
            sollte geprüft werden, woher das Datenmodell des OData-Services
            stammt. Besteht das Datenmodell aus Datenquellenreferenzen, die sich
            im Ordner „Exposures via SADL“ definiert, entspricht der
            OData-Service Analyse-Profil C.
          </p>
          <Image src="/SADL.png" alt="SADL" />
          <p>
            Ist das Datenmodell direkt im SEGW-Projekt definiert, handelt es
            sich um Analyseprofil D.
          </p>
          <Image src="/PAOC.png" alt="PAOC" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Analyse-Profil C</span>} key="4">
          <h3>Überblick</h3>
          <p>Datenmodell: CDS-basiert</p>
          <p>ABAP-Framework: BOPF</p>
          <h3>Wie Sie vom Namen des OData-Services zum CDS-Modell kommen:</h3>
          <Image src="SADLGIF.gif" alt="CDS Modell" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Analyse-Profil D</span>} key="5">
          <h3>Überblick</h3>
          <p>Datenmodell: Nicht CDS-basiert</p>
          <p>ABAP-Framework: -</p>
          <p>Das Datenmodell des OData-Services finden Sie im SEGW-Projekt.</p>
          <Image src="/PAOC.png" alt="PAOC" />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
