import React from "react";
import { Tabs } from "antd";
import {
  AppstoreOutlined,
  DesktopOutlined,
  CodeOutlined,
} from "@ant-design/icons";

export default function SyncViews() {
  return (
    <div>
      <h3>
        Wie wird bestimmt ob eine Fiori-Anwendung synchrone Views verwendet?
      </h3>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab={
            <span>
              <DesktopOutlined />
              Im Business Application Studio
            </span>
          }
          key="1"
        >
          <p>SAPUI5 ashka ist eine Technologie, die es ermöglicht, die</p>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <CodeOutlined />
              Manuell
            </span>
          }
          key="2"
        >
          <p>Bla</p>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
