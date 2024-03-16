import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import handlerOrder from "../../../utils/handlerOrder";
import items from "./pizzaItems";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import Path from "../../../path";

function Pizza() {
  const [pizza, setPizza] = useState([]);

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Пица</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map((item, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    handlerOrder(item.name, Number(item.price).toFixed(2))
                  }
                >
                  Поръчай
                </Button>
                <p>Цена: {item.price} лв.</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Pizza;
