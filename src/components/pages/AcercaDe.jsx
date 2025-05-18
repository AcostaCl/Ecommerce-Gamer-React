import "../../styles/AcercaDe.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const AcercaDe = () => {
  return (
    <>
      <section className="bg-dark py-5">
        <Container className="text-center">
          <article>
            <h2 className="fw-bold text-light">Sobre nosotros</h2>
            <p className="text-secondary">
              Vitbite es una tienda online dedicada a videojuegos retro,
              consolas clásicas y nostalgia gamer
            </p>
          </article>
        </Container>
      </section>
      <section>
        <Container className="py-5">
          <Row className="mb-5 align-items-center">
            <Col className={6}>
              <h3 className="fw-bold"></h3>{" "}
              <p className="text-muted">
                Vitbite es una tienda online especializada en videojuegos retro,
                creada con nostalgia, pasión y mucho cuidado por los clásicos.
                Aquí encontrarás consolas, juegos y accesorios que marcaron
                época, seleccionados para los verdaderos amantes del gaming de
                antaño.
              </p>
            </Col>
            <Col md={6}>
              <p className="text-muted">
                Este proyecto está desarrollado y gestionado por una sola
                persona. Cada parte del sitio, ha sido creado pensando en
                ofrecer una experiencia auténtica y confiable. Vitbite no es
                solo una tienda: es un rincón para revivir los mejores momentos
                del pasado gamer.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <img
                src="https://www.servnet.mx/hubfs/Backend-y-Frontend-%C2%BFQu%C3%A9-es-c%C3%B3mo-funcionan-en-la-programaci%C3%B3n.jpg"
                alt="Equipo Front End"
                width={400}
                className="img-fluid"
              />
              <Card className="mt-3 shadow-sm">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>Celina Acosta</p>
                    <footer className="blockquote-footer">
                      Desarrolladora web
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AcercaDe;
