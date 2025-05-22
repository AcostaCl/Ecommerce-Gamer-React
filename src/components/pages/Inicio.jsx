import { Carousel, Form, Container, Row, Col } from "react-bootstrap";
import banner from "../../img/banner1.png";
import "../../styles/Inicio.css";
import CardProducto from "./productos/CardProducto";
import { useEffect, useState } from "react";
import { listarProductosAPI } from "../helpers/queries";
import { IoMdPricetags } from "react-icons/io";
import { MdLaptopChromebook } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";

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
      <section className="bg-inicio">
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
            <h2 className="display-5 h2-inicio">Nuestros Productos</h2>
            <hr className="h2-inicio" />
            <Row>
              {listaJuegos.map((producto) => (
                <CardProducto
                  key={producto.id}
                  producto={producto}
                ></CardProducto>
              ))}
            </Row>
            <article className="bg-inicio text-white py-4 mt-5">
              <Row className="text-center">
                <Col md={4}>
                  <MdLaptopChromebook size={30} className="mb-2" />
                  <h6 className="fw-bold">Catálogo en expansión</h6>
                  <p className="mb-0">Agregamos nuevos clásicos cada semana.</p>
                </Col>
                <Col md={4}>
                  <IoMdPricetags size={30} className="mb-2" />
                  <h6 className="fw-bold">Descuentos</h6>
                  <p className="mb-0">
                    Ahorrá un 25% pagando por transferencia bancaria.
                    ¡Aprovechalo!
                  </p>
                </Col>
                <Col md={4}>
                  <FaGamepad size={30} className="mb-2" />
                  <h6 className="fw-bold">Compatible</h6>
                  <p className="mb-0">
                    Juegos listos para correr en tu PC o en tu emulador
                    favorito. Fácil de instalar y jugar.
                  </p>
                </Col>
              </Row>
            </article>
          </Container>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
