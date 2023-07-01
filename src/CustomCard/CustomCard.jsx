import React from "react";
import { Col, Row, Card, Badge, Progress, Avatar } from "antd";
import { FireOutlined } from "@ant-design/icons";
function CustomCard() {
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
      <Col>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={20}>
                <Row>Linkedin</Row>
                <Row>Memberfive.Budget</Row>
              </Col>
              <Col span={4}>
                <Avatar
                  src={<FireOutlined />}
                  style={{ backgroundColor: "blue", color: "white" }}
                />
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Row>Amount</Row>
                <Row>Amount</Row>
              </Col>
              <Col span={8}>
                <Row>Frequency</Row>
                <Row>Amount</Row>
              </Col>
              <Col span={8}>
                <Row>Expiry</Row>
                <Row>Amount</Row>
              </Col>
            </Row>
            <Row>
              <Progress
                percent={50}
                showInfo={false}
                trailColor="#f50"
                strokeColor={{
                  from: "hsl(102, 53%, 61%)",
                  to: "hsl(102, 53%, 61%)",
                }}
              />
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Badge color="hsl(102, 53%, 61%)" />
              Spent
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Badge color="#f50" />
              Balance
            </Row>
          </Col>
        </Row>
      </Col>
    </Card>
  );
}

export default CustomCard;
