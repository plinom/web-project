import React from "react";
import before from "./images/before.jpg";
import after from "./images/after.jpg";
import arrow from "./images/arrow.png";
import zyzz from "./images/zyzz.png";
import Placeholder from "../components/Placeholder";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const items1: MenuProps["items"] = ["Sign In", "Sign Up"].map((key) => ({
  key,
  label: key,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "left" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout style={{ background: "#74a5f2", color: "white" }}>
        <div style={{ textAlign: "center", fontSize: 64, paddingTop: 8 }}>
          Are you ready for summer?
        </div>
        <div style={{ display: "flex", marginTop: 32 }}>
          <div
            style={{
              flex: "auto",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              paddingLeft: 32,
              maxWidth: 800,
              width: "100%",
            }}
          >
            <div style={{ textAlign: "center", marginRight: 50 }}>
              <img src={before} style={{ height: 300, width: 300 }} />
              <p style={{ fontSize: 30 }}>Before</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src={arrow} style={{ width: 50 }} />
            </div>
            <div style={{ textAlign: "center", marginLeft: 50 }}>
              <img src={after} style={{ height: 300, width: 300 }} />
              <p style={{ fontSize: 30 }}>After</p>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", margin: 30, fontSize: 20 }}>
              If you want to end up like the guy on the left, keep scrolling. If
              not, click "Get training plan" and get an individualized training
              plan to become like the guy on the right
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 64, paddingTop: 8 }}>
          Let's start
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", paddingTop: 96 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 30,
                marginBottom: 30,
                paddingLeft: "30%",
                paddingRight: "30%",
              }}
            >
              <div>Age</div>
              <div style={{ width: "100" }}>
                <Placeholder placeholderText="Enter your age" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 30,
                marginBottom: 30,
                paddingLeft: "30%",
                paddingRight: "30%",
              }}
            >
              <div>Weight</div>
              <div style={{ width: "100" }}>
                <Placeholder placeholderText="Enter your weight" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 30,
                marginBottom: 30,
                paddingLeft: "30%",
                paddingRight: "30%",
              }}
            >
              <div>Height</div>
              <div style={{ width: "100" }}>
                <Placeholder placeholderText="Enter your height" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 30,
                marginBottom: 30,
                paddingLeft: "30%",
                paddingRight: "30%",
              }}
            >
              <div>Gender</div>
              <div style={{ width: "100" }}>
                <Placeholder placeholderText="Enter your gender" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 30,
                marginBottom: 30,
                paddingLeft: "20%",
                paddingRight: "30%",
              }}
            >
              <div style={{ textAlign: "center" }}>
                Number of trainings
                <br /> per week
              </div>
              <div style={{ width: "100" }}>
                <Placeholder placeholderText="Enter wanted number" />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary">Get training plan</Button>
            </div>
          </div>
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <img src={zyzz} style={{ height: 500, width: 500 }} />
          </div>
        </div>
        <div style={{ background: "#051d42" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: 32,
              margin: 20,
            }}
          >
            Do you want to track your progress?
            <br />
            Create an account!
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", margin: 30 }}
          >
            <Button type="primary" onClick={() => navigate("/auth")}>
              Log In
            </Button>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default Landing;
