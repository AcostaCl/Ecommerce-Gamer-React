import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Menu.css";
import logo from "../../assets/logo-vitbite.png";
import { NavLink, Link } from "react-router";

const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="menu-bg">
        <Container>
          <Navbar.Brand as={Link} to="/">
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
            <Nav className="me-auto color-texto ">
              <Nav.Link as={NavLink} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/AcercaDe">
                Acerca de{" "}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Carrito">
                Carrito
              </Nav.Link>
            </Nav>
            <Nav className="texto-iniciarsesion">
              <Nav.Link as={NavLink} to="/Login">
                Iniciar sesión
              </Nav.Link>
            </Nav>
            <Nav className="color-texto">
              <Nav.Link href="*">Registrarse</Nav.Link>
            </Nav>
            <Nav className="texto-iniciarsesion">
              <Nav.Link end as={NavLink} to="/Administrador">
                Administrador
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
