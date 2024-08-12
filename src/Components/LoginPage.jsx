import React, { useState } from "react";
import { Form, Input, Button, Tabs, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Image } from "antd";
import { useAuth } from "../AuthProvider";

const { TabPane } = Tabs;

const LoginPage = () => {
  const [form] = Form.useForm();
  const { signup, login } = useAuth();

  const onFinishLogin = async (values) => {
    try {
      await login(values.email, values.password);
      message.success("Logged in successfully!");
    } catch (error) {
      message.error("Failed to log in!");
    }
  };

  const onFinishSignUp = async (values) => {
    if (!values.email.endsWith("@mhp.com")) {
      message.error("You can only sign up with an @mhp.com email address.");
      return;
    }
    try {
      await signup(values.email, values.password);
      message.success("Account created successfully!");
    } catch (error) {
      message.error("Failed to create account!");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          padding: 40,
          alignItems: "center",
        }}
      ></div>
      <div
        style={{
          maxWidth: 300,
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <Image
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/MHP_Management-_und_IT-Beratung_logo.svg/500px-MHP_Management-_und_IT-Beratung_logo.svg.png"
          preview={false}
        />
        <Header
          style={{
            background: "white",
            fontSize: "15px",
          }}
        >
          Fiori Extensibility Compass
        </Header>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Login" key="1">
            <Form form={form} name="login" onFinish={onFinishLogin}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Sign Up" key="2">
            <Form form={form} name="register" onFinish={onFinishSignUp}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
      <div
        style={{
          padding: 90,
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
        }}
      >
        <p style={{}}>
          You can create a free account with an @mhp.com email address. If you
          don't have one, you can get your email address whitelisted. Just
          request account via mail{" "}
          <a href="mailto:lukas.preidt@mhp.com?subject=request%20FEC%20Account&body=User%20request%20for%20this%20Email.%20Please%20generate%20an%20User%20for%20the%20Fiori%20Extensibility%20Compass.">
            Request account
          </a>{" "}
          just send predefined mail (no adjustments or formalities needed ).
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
