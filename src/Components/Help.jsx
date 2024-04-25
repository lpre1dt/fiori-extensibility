import React from "react";
import UIType from "../Hilfe/UIType";
import SAPFlex from "../Hilfe/SAPFlex";
import SyncViews from "../Hilfe/SyncViews";
import Floorplan from "../Hilfe/Floorplan";
import BusinessContext from "../Hilfe/BusinessContext";
import ODataAnalyse from "../Hilfe/ODataAnalyse";
import ODataContent from "../Hilfe/ODataContent";
import Bewertungsmetriken from "../Hilfe/Bewertungsmetriken";
import BehaviorCheck from "../Hilfe/BehaviorCheck";
import SelectionHelp from "../Hilfe/SelectionHelp";
import { useTranslation } from "react-i18next";
export default function Help({ showHelp, setShowHelp }) {
  const { t } = useTranslation();
  if (showHelp?.show) {
    return (
      <div
        style={{
          background: "white",
        }}
      >
        <>{}</>
        <div style={{}}>
          {showHelp.help === "floorplan" && <Floorplan />}
          {showHelp.help === "flex" && <SAPFlex />}
          {showHelp.help === "sync" && <SyncViews />}
          {showHelp.help === "ui" && <UIType />}
          {showHelp.help === "context" && <BusinessContext />}
          {showHelp.help === "odata" && <ODataAnalyse />}
          {showHelp.help === "odatacontent" && <ODataContent />}
          {showHelp.help === "bewertung" && <Bewertungsmetriken />}
          {showHelp.help === "behavior" && <BehaviorCheck />}
          {showHelp.help === "selection" && <SelectionHelp />}
        </div>
      </div>
    );
  }
}
