import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import items from "./menu";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Row xs={1} md={2} lg={2} className="g-4 justify-content-center">
        {items.map((item, index) => (
          <Col key={index}>
            <Link to={item.url}>
              <Card>
                <Card.Img
                  className="card-img-top"
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Button>{item.name}</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
