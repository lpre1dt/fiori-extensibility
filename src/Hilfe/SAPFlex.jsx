import React from "react";
import { Tabs } from "antd";
import Image from "antd/es/image";
import {
  AppstoreOutlined,
  CodeOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

export default function SAPFlex() {
  //SAPFlex
  return (
    <div>
      <h3>
        Wie wird bestimmt ob eine Fiori-Anwendung SAPUI5 Flexibility nutzt?
      </h3>
      <p>
        EineAnwendung vom Typ SAPUI5 Freestyle sollte daraufhin geprüft werden,
        ob sie die SAPUI5 Flexibility unterstützt. Hierfür gibt es drei
        verschiedene Wege:
      </p>
      <ul>
        <li>Prüfung innerhalb der Anwendung.</li>
        <li>Überprüfung im Business Applikation Studio.</li>
        <li>Manuelle Überprüfung.</li>
      </ul>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab={
            <span>
              <AppstoreOutlined />
              In der Anwendung
            </span>
          }
          key="1"
        >
          <p>
            Die schnellste Option ist, die Überprüfung direkt in der Anwendung
            vorzunehmen. Dafür benötigt man die Erweiterungsberechtigungen für
            Key-User. Wenn die Option "UI-anpassen" verfügbar ist, unterstützt
            die Anwendung SAPUI5 Flexibility. Ist die Option nicht verfügbar,
            unterstützt sie SAPUI5 Flexibility nicht.
          </p>
          <Image src="/UInapassen.png" />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <DesktopOutlined />
              Im Business Application Studio
            </span>
          }
          key="2"
        >
          <p>
            Ähnlich kann die Verfügbarkeit im Business Applikation Studio
            überprüft werden. Wenn sich für die Anwendung ein Adaptation Project
            anlegen lässt, unterstützt sie SAPUI5 Flexibility. Dafür muss das
            Projekt nicht vollständig angelegt werden, sondern es reicht, dass
            man die Anwendung selektiert und prüft, ob ein Adaptation Project
            angelegt werden könnte.
          </p>
          <Image src="/ADAPT_Proj.png" />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <CodeOutlined />
              Manuell
            </span>
          }
          key="3"
        >
          <p>
            Es kann manuell geprüft werden, ob die Anwendung SAPUI5 Flexibility
            unterstützt. Dafür müssen die hinreichenden Bedingungen für SAPUI5
            Flexibility im Quellcode der Anwendung überprüft werden. Hierfür
            muss man die Business Server Pages (BSP) mit der SAPUI5 Applikation
            im System aufrufen. Den technischen Namen findet man in der Fiori
            Apps Reference Library.
          </p>
          <Image src="/toManifest.gif" />
          <p>
            Im SAP GUI kann die Manifest.json-Datei der Anwendung über die
            Transaktion SE80 betrachtet werden. Falls die Anwendung keine
            Manifest.json-Datei enthält, ist sie nicht für SAPUI5 Flexibility
            verfügbar. .
          </p>
          <Image src="/manifest1.png" />
          <p>
            Bei der Analyse der Manifest.json-Datei ist es empfehlenswert, in
            folgender Reihenfolge vorzugehen:
            <ol>
              <li>
                MinUI5Version überprüfen: Diese sollte mindestens Version 1.28
                entsprechen. Falls sie geringer ist, unterstützt die Anwendung
                nicht SAPUI5 Flexibility.
              </li>
              <li>
                Dependencies prüfen: Im Bereich Dependencies, falls die Library
                "sap.ca.scfld.md" in der Manifest.json-Datei definiert ist, ist
                die Anwendung nicht für SAPUI5 Flexibility verfügbar.
              </li>
            </ol>
          </p>
          <Image src="/manifest2.png" />
          <ol start="3">
            <li>
              FlexEnabled-Annotation prüfen: Ist diese auf false gesetzt, ist
              die Anwendung nicht für SAPUI5 Flexibility verfügbar. Ist sie auf
              true gesetzt oder nicht gesetzt und wurden bei den Schritten 1 und
              2 keine Fälle identifiziert, die darauf hindeuten, dass SAPUI5
              Flexibility nicht verfügbar ist, so ist die Flexibilität für die
              Anwendung verfügbar.
            </li>
          </ol>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
