import React from "react";
import { Col, Row, Card, Badge, Progress, Avatar } from "antd";
import { FireOutlined, RedoOutlined } from "@ant-design/icons";
function CustomCard(props) {
  const { card } = props;
  console.log("card", card);
  return (
    <Card style={{ width: 400, marginTop: 16 }}>
      <Col>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={20}>
                <Row style={{ fontSize: "22px", fontWeight: "800" }}>
                  {card.name}
                </Row>
                <Row style={{ fontSize: "15px" }}>{card.budget_name}</Row>
              </Col>
              <Col span={4}>
                {card.card_type === "burner" ? (
                  <Avatar
                    src={<FireOutlined />}
                    style={{ backgroundColor: "blue", color: "white" }}
                  />
                ) : (
                  <Avatar
                    src={<RedoOutlined />}
                    style={{ backgroundColor: "blue", color: "white" }}
                  />
                )}
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Row>Amount</Row>
                <Row style={{ fontWeight: "700" }}>
                  {card.spent.value + card.available_to_spend.value}{" "}
                  {card.available_to_spend.currency}
                </Row>
              </Col>
              <Col span={8}>
                <Row>Frequency</Row>
                <Row style={{ fontWeight: "700" }}>{card.limit}</Row>
              </Col>
              <Col span={8}>
                <Row>Expiry</Row>
                <Row style={{ fontWeight: "700" }}>{card.expiry}</Row>
              </Col>
            </Row>
            <Row>
              <Progress
                percent={
                  (card.spent.value /
                    (card.spent.value + card.available_to_spend.value)) *
                  100
                }
                showInfo={false}
                trailColor="#f50"
                strokeColor={{
                  from: "hsl(102, 53%, 61%)",
                  to: "hsl(102, 53%, 61%)",
                }}
              />
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Badge color="hsl(102, 53%, 61%)" text="Spent" />
              {card.spent.value}
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Badge color="#f50" text="Balance" />
              {card.available_to_spend.value}
            </Row>
          </Col>
        </Row>
      </Col>
    </Card>
  );
}

export default CustomCard;
