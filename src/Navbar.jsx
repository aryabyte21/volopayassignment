import React from "react";
import { Tabs } from "antd";
import Card from "./CustomCard/CustomCard";

const { TabPane } = Tabs;

const Navbar = () => {
  const handleTabChange = (activeKey) => {
    console.log("Active Tab:", activeKey);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={handleTabChange}>
      <TabPane tab="Your" key="1">
        hello
      </TabPane>
      <TabPane tab="All" key="2">
        All
      </TabPane>
      <TabPane tab="blocked" key="3">
        Blocked
      </TabPane>
    </Tabs>
  );
};

export default Navbar;
