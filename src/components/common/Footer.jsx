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
            <Image
              src={logoFooter}
              alt="Vitbite logo"
              fluid
              className="footer-logo"
              width={70}
            />
          </Col>
          {/* Navegación */}
          <Col md={5} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="footer-link text-decoration-none link-light"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-decoration-none link-light"
                >
                  Contáctanos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-decoration-none link-light"
                >
                  Acerca de
                </a>
              </li>
            </ul>
          </Col>

          {/* Redes sociales */}
          <Col md={4}>
            <h5 className="fw-bold">Redes sociales</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a
                href="https://www.facebook.com/?locale=es_LA"
                target="_blank"
                className="footer-social "
                aria-label="Facebook"
              >
                <CiFacebook size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="footer-social"
                aria-label="Instagram"
              >
                <CiInstagram size={30} />
              </a>
              <a
                href="https://x.com/home?lang=es"
                target="_blank"
                className="footer-social"
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
        <hr className="bg-white opacity-25 mt-4" />

        <Row className="text-center">
          <Col>
            <p>©Todos los derechos reservados.</p>
            <br />
            <p>
              Defensa de los consumidores.
              <a href="#" className="text-secondary text-decoration-none p-2">
                Botón de arrepentimiento
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
