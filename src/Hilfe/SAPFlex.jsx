import React from "react";
import { Tabs } from "antd";
import {
  AppstoreOutlined,
  CodeOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

export default function SAPFlex() {
  return (
    <div>
      <h3>
        Wie wird bestimmt ob eine Fiori-Anwendung SAPUI5 Flexibility nutzt?
      </h3>
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
            SAPUI5 Flexibility ist eine Technologie, die es ermöglicht, die
            Benutzeroberfläche einer Fiori-Anwendung zur Laufzeit zu verändern.
            Die Änderungen werden in einer separaten Persistenzschicht
            gespeichert und können jederzeit wieder rückgängig gemacht werden.
            Die Änderungen können auf Benutzerebene oder auf Rollenebene
            durchgeführt werden.
          </p>

          <p>
            Die Änderungen können auf Benutzerebene oder auf Rollenebene
            durchgeführt werden.
          </p>
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
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
