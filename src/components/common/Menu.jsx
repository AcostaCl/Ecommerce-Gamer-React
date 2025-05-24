import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Menu.css";
import logo from "../../assets/logo-vitbite.png";
import { NavLink, Link, useNavigate } from "react-router";
import { MdLogout } from "react-icons/md";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("userKey");
    setUsuarioLogueado("");
    navegacion("/");
  };
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
              <Nav.Link as={NavLink} to="/acercade">
                Acerca de{" "}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/carrito">
                Carrito
              </Nav.Link>
            </Nav>
            <Nav className="texto-iniciarsesion"></Nav>
            <Nav className="color-texto"></Nav>
            <Nav className="texto-iniciarsesion">
              {usuarioLogueado.length > 0 ? (
                <>
                  <Nav.Link end as={NavLink} to="/administrador">
                    Administrador
                  </Nav.Link>
                  <Button
                    className="d-flex align-items-center gap-2 btn-menu"
                    onClick={logout}
                  >
                    <MdLogout />
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login">
                    Iniciar sesión
                  </Nav.Link>
                  <Nav.Link href="*">Registrarse</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
