import React from "react";
import { Col, Row } from "antd";
function CardC() {
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
      <Col>
        <Row>
          <Col span={20}>
            <Row>
              <h1>Linkedin</h1>
            </Row>
            <Row>MemberFive.Budget</Row>
            <Row>
              <Col span={8}></Col>
              <Col span={8}></Col> 
              <Col span={8}></Col>
            </Row>
            <Row></Row>
            <Row></Row>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Col>
    </Card>
  );
}

export default Card;
