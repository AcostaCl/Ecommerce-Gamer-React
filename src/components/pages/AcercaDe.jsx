import "../../styles/AcercaDe.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoMdPerson, IoIosCodeWorking } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import imagenAcercaDe from "../../img/imagen-acercade.png";

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
      <section className="bg-purpura">
        <Container className="py-5">
          <Row className="mb-5 align-items-center">
            <Col className={6}>
              <h3 className="fw-bold"></h3>{" "}
              <p className="text-light">
                Vitbite es una tienda online especializada en videojuegos retro,
                creada con nostalgia, pasión y mucho cuidado por los clásicos.
                Aquí encontrarás consolas, juegos y accesorios que marcaron
                época, seleccionados para los verdaderos amantes del gaming de
                antaño.
              </p>
            </Col>
            <Col md={6}>
              <p className="text-light">
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
              <img src={imagenAcercaDe} width={200} className="img-fluid" />
              <Card className="mt-3 shadow-sm card-acercade">
                <Card.Body>
                  <blockquote className="blockquote  mb-0">
                    <p className="text-light">Celina Acosta</p>
                    <footer className="blockquote-footer text-light">
                      Desarrolladora web
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <article className="px-2">
                <h4 className="fw-bold text-light mt-3">Acerca de mi</h4>
                <p className="text-light">
                  Disfruto trabajar de forma independiente, asumir nuevos retos
                  y construir experiencias digitales que conecten con las
                  personas. Además de programar, me interesa el diseño
                  funcional, la usabilidad y todo lo relacionado con el mundo
                  digital y visual.
                </p>
                <blockquote className="blockquote text-purpura border-start border-4 ps-3">
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
      <section className="text-center py-5 bg-purpura">
        <hr className="text-light my-4" />
        <article>
          <h3 className="fw-bold text-light">Unite al equipo</h3>
          <p className="text-light mb-5">
            Si te gusta emprender, construir desde cero y aportar ideas que
            marquen la diferencia, este puede ser tu lugar.
          </p>
        </article>
        <article>
          <Row>
            <Col md={4} className="mb-4">
              <IoMdPerson size={40} className="text-purpura mb-3" />
              <h5 className="fw-bold text-light">Horario</h5>
              <p className="text-light">
                Flexibilidad horaria y trabajo remoto
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <IoIosCodeWorking size={40} className="text-purpura mb-3" />
              <h5 className="fw-bold text-light">Creatividad</h5>
              <p className="text-light">
                Libertad creativa para proponer y construir
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <MdOutlineWork size={40} className="text-purpura mb-3" />
              <h5 className="fw-bold text-light">Personal</h5>
              <p className="text-light">
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
