import React, { useState, useEffect } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Drawer } from "antd";
import { OverviewTable } from "./OverviewTable";
import { Anforderungen } from "./Anforderungen";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Anwendung } from "./Anwendung";
import Bewertung from "./Bewertung";
import Startseite from "./Startseite";
import Help from "./Help";
import { findDOMNode } from "react-dom";
import UIType from "../Hilfe/UIType";
import SAPFlex from "../Hilfe/SAPFlex";
import SyncViews from "../Hilfe/SyncViews";
import { useTranslation } from "react-i18next";
const { Header, Content, Footer, Sider } = Layout;

export function Homepage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [anforderungsFilter, setAnforderungsfilter] = useState();
  const [showHelp, setShowHelp] = useState(false);
  const [transferFilteredData, setTransferFilteredData] = useState();
  const [backendValues, setBackenValues] = useState({});
  const [frontendValues, setFrontendValues] = useState("");
  const [descriptionValues, setDescriptionValues] = useState("");
  const [uiFilteredData, setUiFilteredData] = useState();
  const [logicFilteredData, setLogicFilteredData] = useState();
  const [dataModelfilteredData, setDataModelfilteredData] = useState();
  const [showTable, setShowTable] = useState(false);

  const [showDetailView, setShowDetailView] = useState(false);
  function handleBackend(newValue) {
    setBackenValues(newValue);
  }
  function handlFrontend(newValue) {
    setFrontendValues(newValue);
  }
  function closeDrawer() {
    setShowHelp({ show: false });
  }

  return (
    <Layout>
      <Sider
        style={{
          paddingTop: 20,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "auto",
        }}
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={({ key }) => {
            navigate(key);
            window.scrollTo(0, 0);
          }}
          items={[
            {
              key: "/",
              label: <p>{t("landingpage")}</p>,
              icon: React.createElement(DashboardOutlined),
            },
            {
              key: "/beschreibung",
              label: t("fioriapplication"),
              icon: React.createElement(DesktopOutlined),
            },

            {
              key: "/anforderungen",
              label: t("requirements"),
              icon: React.createElement(UnorderedListOutlined),
            },
            {
              key: "/evaluation",
              label: t("selection"),
              icon: React.createElement(BarChartOutlined),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <Drawer
            width={720}
            title="Hilfe"
            placement="right"
            onClose={closeDrawer}
            open={showHelp?.show}
          >
            <Help setShowHelp={setShowHelp} showHelp={showHelp} />
          </Drawer>
          <Routes>
            <Route
              path="/anforderungen"
              element={
                <Anforderungen
                  anforderungsFilter={anforderungsFilter}
                  setAnforderungsfilter={setAnforderungsfilter}
                  showTable={showTable}
                  showDetailView={showDetailView}
                  setShowDetailView={setShowDetailView}
                  setShowTable={setShowTable}
                />
              }
            />
            <Route
              path="/beschreibung"
              element={
                <Anwendung
                  setDescriptionValues={setDescriptionValues}
                  descriptionValues={descriptionValues}
                  setShowTable={setShowTable}
                  setAnforderungsfilter={setAnforderungsfilter}
                  setShowDetailView={setShowDetailView}
                  setShowHelp={setShowHelp}
                />
              }
            />

            <Route
              path="/evaluation"
              element={
                <Bewertung
                  uiFilteredData={uiFilteredData}
                  logicFilteredData={logicFilteredData}
                  dataModelfilteredData={dataModelfilteredData}
                  showEvaluation={showDetailView}
                  setShowHelp={setShowHelp}
                />
              }
            />
            <Route path="/hilfe" element={<Help />} />
            <Route path="/" element={<Startseite />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/beschreibung/uitype" element={<UIType />} />
            <Route
              path="/beschreibung/sapui5flexibility"
              element={<SAPFlex />}
            />
            <Route
              path="/beschreibung/checksyncviews"
              element={<SyncViews />}
            />
          </Routes>
        </Content>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "white",
            }}
          >
            <div
              style={{
                maxWidth: "1200",
              }}
            >
              <div>
                <OverviewTable
                  anforderungsFilter={anforderungsFilter}
                  descriptionValues={descriptionValues}
                  showTable={showTable}
                  setShowTable={setShowTable}
                  showDetailView={showDetailView}
                  setShowDetailView={setShowDetailView}
                  uiFilteredData={uiFilteredData}
                  setUiFilteredData={setUiFilteredData}
                  logicFilteredData={logicFilteredData}
                  setLogicFilteredData={setLogicFilteredData}
                  dataModelfilteredData={dataModelfilteredData}
                  setDataModelfilteredData={setDataModelfilteredData}
                />
              </div>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          MHP a Porsche Company ©2023 Created by Lukas Preidt
        </Footer>
      </Layout>
    </Layout>
  );
}
