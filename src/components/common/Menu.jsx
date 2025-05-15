import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Menu.css";
import logo from "../../assets/logo-vitbite.png";
const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="menu-bg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo Rolling Coffee"
              className="img-fluid logo-custom"
              width={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="hamburguesa-custom"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto color-texto">
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Acerca de </Nav.Link>
              <NavDropdown title="Consolas" id="collapsible-nav-dropdown">
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
            </Nav>
            <Nav className="texto-iniciarsesion">
              <Nav.Link href="#deets">Iniciar sesión</Nav.Link>
            </Nav>
            <Nav className="color-texto">
              <Nav.Link eventKey={2} href="#memes">
                Registrarse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
