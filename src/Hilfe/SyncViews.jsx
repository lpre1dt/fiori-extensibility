import React from "react";
import { Tabs } from "antd";
import Image from "antd/es/image";
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

      <p>
        Um festzustellen, ob die Anwendung synchrone Views verwendet, sollte
        dies im Business Application Studio geprüft werden. Hierfür muss ein
        Adaptation Project definiert und bis zum Schritt "Select Application"
        fortgefahren werden.
      </p>
      <Image src="/SyncViews.png" alt="Adaptation Project" />
      <p>
        Wenn die Anwendung synchrone Views enthält, wird dies gemeldet, und es
        wird die Möglichkeit geboten, zwischen einem Adaptation- oder
        Extension-Projekt zu wählen.
      </p>
    </div>
  );
}
