import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Path from "../../path";
import AuthContext from "../../contexts/authContext";

function Order() {
  const { isAuthenticated } = useContext(AuthContext);

  const navigation = useNavigate();

  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  useEffect(() => {
    const storedOrders = JSON.parse(sessionStorage.getItem("orders"));
    if (storedOrders && storedOrders.length > 0) {
      setOrders(storedOrders);
      setShow(true);
    } else {
      setOrders([]);
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      const totalPrice = orders.reduce(
        (total, order) => total + Number(order.quantity) * order.price,
        0
      );
      setTotalOrderPrice(totalPrice);
    }
  }, [orders]);

  const handleClose = () => {
    setShow(false);
    navigation(Path.Home);
  };

  const finalHandler = () => {
    sessionStorage.removeItem("orders");
    setShow(false);
    navigation(Path.Home);
  };

  const handleOrderClick = () => {
    if (!isAuthenticated) {
      setShow(true);
      navigation(Path.Login);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Поръчки</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orders.length > 0 ? (
          <>
            <ul>
              {orders.map((order, index) => (
                <li key={index}>
                  {order.name} - {order.quantity} бр. -{" "}
                  {Number(order.price).toFixed(2)} лв.
                </li>
              ))}
            </ul>
            <p>Обща цена на поръчката: {totalOrderPrice.toFixed(2)} лв.</p>
          </>
        ) : (
          <p>Няма поръчки.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Затвори
        </Button>
        {orders.length > 0 && (
          <Button
            variant="secondary"
            onClick={isAuthenticated ? finalHandler : handleOrderClick}
          >
            Поръчай
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Order;
