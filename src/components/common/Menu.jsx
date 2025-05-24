import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Menu.css";
import logo from "../../assets/logo-vitbite.png";
import { NavLink, Link, useNavigate } from "react-router";
import { MdLogout } from "react-icons/md";
import Swal from "sweetalert2";
const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Tu sesión se cerrará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión cerrada",
          text: "¡Hasta pronto!",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOut",
          },
        });

        sessionStorage.removeItem("userKey");
        setUsuarioLogueado("");
        navegacion("/");
      }
    });
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
