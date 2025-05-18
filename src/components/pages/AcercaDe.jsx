import "../../styles/AcercaDe.css";
import { Container, Row, Col } from "react-bootstrap";
import imagen1 from "../../img/banner1.png";
import imagen2 from "../../img/error404.png";

const AcercaDe = () => {
  return (
    <>
      <section className="bg-dark">
        <Container className="text-center">
          <article>
            <h2 className="fw-bold text-light">Sobre nosotros</h2>
            <p className="text-secondary">
              {" "}
              Vitbite es una tienda online dedicada a videojuegos retro,
              consolas clásicas y nostalgia gamer
            </p>
          </article>
          <article>
            <Row className="mt-4 justify-content-center">
              <Col className="mb-3">
                <img
                  src={imagen1}
                  alt=""
                  width={100}
                  className="img-fluid rounded"
                />
                <img
                  src={imagen2}
                  alt=""
                  width={100}
                  className="img-fluid rounded"
                />
              </Col>
            </Row>
          </article>
        </Container>
      </section>
      <section>
        <Container className="py-5">
          
        </Container>
      </section>
    </>
  );
};

export default AcercaDe;
