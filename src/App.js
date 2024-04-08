import { Image, Select } from "antd";
import { Header } from "antd/es/layout/layout";
import { Homepage } from "./Components/Homepage";
import { useState } from "react";
import React from "react";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <div className="App">
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
            }}
            defaultValue={language}
            style={{ width: 70 }}
          >
            <Select.Option value="en">EN</Select.Option>
            <Select.Option value="de">DE</Select.Option>
          </Select>
        </div>
      </div>

      <Homepage />
    </div>
  );
}

export default App;
