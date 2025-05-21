import { Carousel, Form, Container, Row } from "react-bootstrap";
import banner from "../../img/banner1.png";
import "../../styles/Inicio.css";
import CardProducto from "./productos/CardProducto";
import { useEffect, useState } from "react";
import { listarProductosAPI } from "../helpers/queries";
const Inicio = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaJuegos(datos);
    } else {
      alert("Ocurrió un error, intenta esta operacion en unos minutos");
    }
  };

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
            <Row>
              {listaJuegos.map((producto) => (
                <CardProducto
                  key={producto.id}
                  producto={producto}
                ></CardProducto>
              ))}
            </Row>
          </Container>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
