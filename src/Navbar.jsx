import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Navbar = () => {
  const handleTabChange = (activeKey) => {
    // Handle tab change logic here
    console.log("Active Tab:", activeKey);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={handleTabChange}>
      <TabPane tab="Your" key="1">
        Your
      </TabPane>
      <TabPane tab="All" key="2">
      All
      </TabPane>
      <TabPane tab="blocked" key="3">
        blocked
      </TabPane>
    </Tabs>
  );
};

export default Navbar;
