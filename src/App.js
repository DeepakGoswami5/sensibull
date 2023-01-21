import React, { useState } from "react";
import { Layout, Menu, Tooltip } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  StockOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate, Route, Routes } from "react-router-dom";
import { Stock } from "./pages/stock/stock";
import { Quotes } from "./pages/quotes/quotes";
import "./App.css";
const { Content, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  let navigate = useNavigate();
  const selectedKey = useLocation().pathname;

  const highlight = () => {
    if (selectedKey === "/") {
      return ["1"];
    } else if (selectedKey === "/quotes") {
      return ["2"];
    }
  };
  return (
    <Layout className="site-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Tooltip
            placement="right"
            arrowPointAtCenter
            title="Expand / Shrink Menu"
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggleCollapsed,
              }
            )}
          </Tooltip>
        </div>
        <Menu
          mode="inline"
          theme="light"
          defaultSelectedKeys={["1"]}
          selectedKeys={highlight()}
          style={{ height: "100%", borderRight: 0 }}
          items={[
            {
              key: "1",
              icon: <StockOutlined />,
              label: "Stock",
              onClick: () => {
                navigate("/stock");
              },
            },
            {
              key: "2",
              icon: <AppstoreOutlined />,
              label: "Quotes",
              onClick: () => {
                navigate("/quotes");
              },
            },
          ]}
        />
      </Sider>
      <Content>
        <Routes>
          <Route exact path="/stock" element={<Stock />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
