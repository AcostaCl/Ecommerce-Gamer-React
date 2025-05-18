import "../../styles/AcercaDe.css";
import { Container, Row, Col } from "react-bootstrap";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi error placeat veritatis porro quasi dolorem iste
                nesciunt repellat dolor molestiae aspernatur, praesentium quis
                veniam numquam a eos exercitationem quaerat officia.
              </p>
            </Col>
            <Col md={6}>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi error placeat veritatis porro quasi dolorem iste
                nesciunt repellat dolor molestiae aspernatur, praesentium quis
                veniam numquam a eos exercitationem quaerat officia.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AcercaDe;
