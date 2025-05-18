import "../../styles/AcercaDe.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoMdPerson, IoIosCodeWorking } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";

const AcercaDe = () => {
  return (
    <>
      <section className="bg-estilos py-5">
        <Container className="text-center">
          <article>
            <h2 className="fw-bold titulo-estilos">Sobre nosotros</h2>
            <p className="text-light">
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
            <Col md={6}>
              <article className="px-2">
                <h4 className="fw-bold mt-3">Acerca de mi</h4>
                <p className="text-muted">
                  Disfruto trabajar de forma independiente, asumir nuevos retos
                  y construir experiencias digitales que conecten con las
                  personas. Además de programar, me interesa el diseño
                  funcional, la usabilidad y todo lo relacionado con el mundo
                  digital y visual.
                </p>
                <blockquote className="blockquote text-info border-start border-4 ps-3">
                  <p>
                    “Vitbite nació de la nostalgia y crece con cada persona que
                    vuelve a jugar como antes.”
                  </p>
                </blockquote>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
      <section className="text-center py-5">
        <article>
          <h3 className="fw-bold">Unite al equipo</h3>
          <p className="text-muted mb-5">
            Si te gusta emprender, construir desde cero y aportar ideas que
            marquen la diferencia, este puede ser tu lugar.
          </p>
        </article>
        <article>
          <Row>
            <Col md={4} className="mb-4">
              <IoMdPerson size={40} className="text-info mb-3" />
              <h5 className="fw-bold">Horario</h5>
              <p className="text-muted">
                Flexibilidad horaria y trabajo remoto
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <IoIosCodeWorking size={40} className="text-info mb-3" />
              <h5 className="fw-bold">Creatividad</h5>
              <p className="text-muted">
                Libertad creativa para proponer y construir
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <MdOutlineWork size={40} className="text-info mb-3" />
              <h5 className="fw-bold">Personal</h5>
              <p className="text-muted">
                Aprendizaje constante y ambiente sin jerarquías
              </p>
            </Col>
          </Row>
        </article>
      </section>
    </>
  );
};

export default AcercaDe;
