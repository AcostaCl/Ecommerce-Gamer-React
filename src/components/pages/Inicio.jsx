import { Carousel, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import banner from "../../img/banner1.png";
import "../../styles/Inicio.css";
const Inicio = () => {
  return (
    <div>
      <section>
        <article>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 image-custom"
                src={banner}
                alt="Banner retro"
              />
              <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="titulo-custom">VitBite</h1>
                <h2 className="text-light mb-4 subtitulo-custom">
                  Tu mundo gamer retro
                </h2>
                <Form className="d-flex w-75 form-custom">
                  <input
                    type="search"
                    placeholder="Buscar consolas, juegos..."
                    className="me-2 bg-transparent  neon-input"
                  />
                </Form>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </article>
        <article>
          <Container className="mt-5">
            <h1 className="display-4">Nuestros Productos</h1>
            <hr />
          </Container>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
