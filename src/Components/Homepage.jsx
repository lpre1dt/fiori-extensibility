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
import { Layout, Menu, theme } from "antd";
import { OverviewTable } from "./OverviewTable";
import { Anforderungen } from "./Anforderungen";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";
import Bewertung from "./Bewertung";
import Startseite from "./Startseite";
import Help from "./Help";
import { findDOMNode } from "react-dom";
const { Header, Content, Footer, Sider } = Layout;

export function Homepage() {
  const navigate = useNavigate();

  const [anforderungsFilter, setAnforderungsfilter] = useState();
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
          }}
          items={[
            {
              key: "/",
              label: "Startseite",
              icon: React.createElement(DashboardOutlined),
            },
            {
              key: "/beschreibung",
              label: "Beschreibung",
              icon: React.createElement(DesktopOutlined),
            },

            {
              key: "/anforderungen",
              label: "Anforderungen",
              icon: React.createElement(UnorderedListOutlined),
            },
            {
              key: "/evaluation",
              label: "Evaluation",
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
                <Frontend
                  setDescriptionValues={setDescriptionValues}
                  descriptionValues={descriptionValues}
                  setShowTable={setShowTable}
                  setAnforderungsfilter={setAnforderungsfilter}
                  setShowDetailView={setShowDetailView}
                />
              }
            />
            <Route
              path="/backend"
              element={
                <Backend
                  backendValues={backendValues}
                  setBackendValues={setBackenValues}
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
                />
              }
            />
            <Route path="/hilfe" element={<Help />} />
            <Route path="/" element={<Startseite />} />
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
