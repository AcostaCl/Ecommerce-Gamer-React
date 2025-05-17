import { Container, Row, Col, Image } from "react-bootstrap";
import "../../styles/Footer.css";
import logoFooter from "../../assets/logo-vitbite.png";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="footer-custom text-white py-4 ">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={3} className="mb-4 mb-md-0">
            <Image src={logoFooter} alt="Vitbite logo" width={70} />
          </Col>
          <Col md={5} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Navegación</h5>
            <ul className="list-unstyled ">
              <li>
                <Link
                  to={"/"}
                  className="text-custom text-decoration-none link-light"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={"/FormularioContacto"}
                  className="text-custom text-decoration-none link-light"
                >
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  to={"/AcercaDe"}
                  className="text-custom text-decoration-none link-light"
                >
                  Acerca de
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Redes sociales</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a
                href="https://www.facebook.com/?locale=es_LA"
                target="_blank"
                aria-label="Facebook"
              >
                <CiFacebook size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <CiInstagram size={30} />
              </a>
              <a
                href="https://x.com/home?lang=es"
                target="_blank"
                aria-label="Twitter"
              >
                <CiTwitter ook size={30} />
              </a>
            </div>
            <div className="mt-2">
              <p>ABIERTO - De lunes a viernes 24hs</p>
            </div>
          </Col>
        </Row>
        <hr className=" opacity-25 mt-4" />
        <Row className="text-center">
          <Col>
            <p>©Todos los derechos reservados.</p>
            <br />
            <p>
              Defensa de los consumidores.
              <Link
                to={"/BotonArrepentimiento"}
                className="text-secondary text-decoration-none p-2 text-custom"
              >
                Botón de arrepentimiento
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
