import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import * as authServices from "../../services/authServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setErrorMessage("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formValue.password !== formValue.repeatPassword) {
      setErrorMessage("incorrect password");
      return;
    } else if (Object.values(formValue).some((value) => value === "")) {
      setErrorMessage("Are fields are required!");
      return;
    }

    authServices
      .register(
        formValue.email,
        formValue.password,
        formValue.username,
        formValue.phoneNumber,
        formValue.deliveryAddress
      )
      .then((response) => {
        console.log("Server response:", response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setErrorMessage("Server error. Please try again later.");
      });
  };
  return (
    <Container style={{ minHeight: "81vh", maxWidth: "400px", margin: "auto" }}>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="register-email"
            value={formValue.email}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="register-password"
            value={formValue.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="repeatPassword"
            id="register-repeatPassword"
            value={formValue.repeatPassword}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            id="register-username"
            value={formValue.username}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="phone-number"
            name="phoneNumber"
            id="register-phoneNumber"
            value={formValue.phoneNumber}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>delivery address</Form.Label>
          <Form.Control
            type="text"
            placeholder="delivery-address"
            name="deliveryAddress"
            id="register-deliveryAddress"
            value={formValue.deliveryAddress}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
