import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useMediaQuery } from "react-responsive";
import Path from "../../path";
import AuthContext from "../../contexts/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={Path.Home} style={{ color: "red" }}>
          Ресторант при Чичо &reg; Меню
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to={Path.Register}>
                  Регистрация
                </Nav.Link>
                <Nav.Link as={Link} to={Path.Login}>
                  Вход
                </Nav.Link>
              </>
            )}

            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to={Path.Logout}>
                  Изход
                </Nav.Link>
                <Nav.Link as={Link} to={Path.Order}>
                  Поръчка
                </Nav.Link>
              </>
            )}
            <Nav.Link style={{ color: "red" }}>
              {isAuthenticated ? username : "Гост"}
            </Nav.Link>
            {isMobile && (
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
