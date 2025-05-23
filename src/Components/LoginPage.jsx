import React from "react";
import { Form, Input, Button, Tabs, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Header } from "antd/es/layout/layout";
import { Image } from "antd";
import { useAuth } from "../AuthProvider";
import { auth } from "../firebase"; // Stelle sicher, dass Firebase korrekt importiert ist

const { TabPane } = Tabs;

const LoginPage = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { signup, login } = useAuth();

  const onFinishLogin = async (values) => {
    try {
      const user = await login(values.email, values.password);
      if (user.emailVerified) {
        message.success(t("loginPage.loginSuccess"));
      } else {
        message.error(t("loginPage.verifyEmailError"));
        await auth.signOut(); // Benutzer abmelden, wenn nicht verifiziert
      }
    } catch (error) {
      message.error(t("loginPage.loginFailedError"));
    }
  };

  const onFinishSignUp = async (values) => {
    if (!values.email.endsWith("@mhp.com")) {
      message.error(t("loginPage.mhpEmailError"));
      return;
    }
    try {
      const user = await signup(values.email, values.password);
      message.success(t("loginPage.signUpSuccess"));
    } catch (error) {
      message.error(t("loginPage.signUpFailedError"));
    }
  };

  const handlePasswordReset = async (email) => {
    if (!email) {
      message.error(t("loginPage.passwordResetEmailPrompt"));
      return;
    }

    try {
      await auth.sendPasswordResetEmail(email);
      message.success(t("loginPage.passwordResetSuccess"));
    } catch (error) {
      message.error(t("loginPage.passwordResetFailed"));
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
          {t("loginPage.appTitle")}
        </Header>
        <Tabs defaultActiveKey="1">
          <TabPane tab={t("loginPage.loginTitle")} key="1">
            <Form form={form} name="login" onFinish={onFinishLogin}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: t("loginPage.emailPlaceholder") }, // Assuming this message is for placeholder
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={t("loginPage.emailPlaceholder")}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: t("loginPage.passwordPlaceholder") }, // Assuming this message is for placeholder
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={t("loginPage.passwordPlaceholder")}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  {t("loginPage.loginButton")}
                </Button>
              </Form.Item>
              <Form.Item>
                <a
                  href="#"
                  onClick={() => {
                    const email = form.getFieldValue("email");
                    handlePasswordReset(email);
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {t("loginPage.forgotPasswordLink")}
                </a>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab={t("loginPage.signUpTitle")} key="2">
            <Form form={form} name="register" onFinish={onFinishSignUp}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: t("loginPage.emailPlaceholder") }, // Assuming this message is for placeholder
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={t("loginPage.emailPlaceholder")}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: t("loginPage.passwordPlaceholder") }, // Assuming this message is for placeholder
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={t("loginPage.passwordPlaceholder")}
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: t("loginPage.confirmPasswordPrompt"),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(t("loginPage.passwordsNoMatchError"))
                      );
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={t("loginPage.confirmPasswordPlaceholder")}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  {t("loginPage.signUpButton")}
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
        <p>
          {t("loginPage.freeAccountInfo")}
          <a href="mailto:lukas.preidt@mhp.com?subject=request%20FEC%20Account&body=User%20request%20for%20this%20Email.%20Please%20generate%20an%20User%20for%20the%20Fiori%20Extensibility%20Compass.">
            {t("loginPage.requestAccountLink")}
          </a>
          {t("loginPage.predefinedMailInfo")}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
