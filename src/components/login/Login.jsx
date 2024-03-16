import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });

  return (
    <Container style={{ minHeight: "81vh", maxWidth: "400px", margin: "auto" }}>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            id="login-email"
            onChange={onChange}
            value={values.email}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            id="login-password"
            value={values.password}
            onChange={onChange}
          />
        </Form.Group>

        <p className="mt-3">
          Ако нямате регистрация,{" "}
          <Link to="/register">тук може да се регистрирате</Link>.
        </p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
