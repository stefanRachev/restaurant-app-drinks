import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <footer className="position-relative bg-dark text-light py-3">
      <Container>
        <Navbar.Brand href="#home">
          Адрес: ул. Примерна 123, гр. Примерград
        </Navbar.Brand>
        <div className="text-center">
          <Nav.Link href="#home">Телефон за поръчки: 0888 123 456</Nav.Link>
          <p>&copy; 2024 Вашият Уебсайт</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
