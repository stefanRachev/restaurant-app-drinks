import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import handleOrder from "../../../utils/handlerOrder";
import drinks from "./drinksItems";
import "./Drinks.css";

function Drinks() {
  const [order, setOrder] = useState([]);

  return (
    <Container style={{minHeight: "81vh"}}>
        <h1 style={{textAlign:"center"}}>Напитки</h1>
      <ListGroup>
        {drinks.map((drink, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              {drink.name} - {drink.quantity} мл. Цена: {drink.price} лв.
            </span>
            <Button
              variant="primary"
              onClick={() =>
                handleOrder(drink.name, Number(drink.price).toFixed(2))
              }
            >
              Поръчай
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Drinks;
