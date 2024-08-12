import { Button, Image, Select, Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import { Homepage } from "./Components/Homepage";
import LoginPage from "./Components/LoginPage";
import { useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

function App() {
  const { i18n } = useTranslation();
  const { currentUser, logout } = useAuth();
  const [language, setLanguage] = useState("de");
  const [betaMode, setBetaMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="App">
      {currentUser && (
        <div
          style={{
            display: "flex",
            padding: 40,
            alignItems: "center",
          }}
        >
          <Image
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/MHP_Management-_und_IT-Beratung_logo.svg/500px-MHP_Management-_und_IT-Beratung_logo.svg.png"
            preview={false}
          />

          <Header
            style={{
              background: "white",
              fontSize: "25px",
            }}
          >
            Fiori Extensibility Compass
          </Header>
          <div
            style={{
              marginLeft: "auto",
              fontSize: "20px",
              marginRight: "20px",
            }}
          >
            <Select
              onChange={(e) => {
                setLanguage(e);
                i18n.changeLanguage(e);
              }}
              defaultValue={language}
              style={{ width: 70 }}
            >
              <Select.Option value="en">EN</Select.Option>
              <Select.Option value="de">DE</Select.Option>
            </Select>
            <Button
              style={{
                marginLeft: 10,
              }}
              onClick={() => {
                navigate("/");

                logout();
              }}
            >
              Logout
            </Button>
            <Switch
              style={{ marginLeft: 10 }}
              checkedChildren="beta on"
              label="Beta Mode"
              unCheckedChildren="beta off"
              value={betaMode}
              onChange={(checked) => {
                document.body.style.backgroundColor = checked
                  ? setBetaMode(true)
                  : setBetaMode(false);
              }}
            />
          </div>
        </div>
      )}

      {currentUser ? <Homepage betaMode={betaMode} /> : <LoginPage />}
    </div>
  );
}

export default App;
