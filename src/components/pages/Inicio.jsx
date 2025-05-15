import { Carousel, Form, Button } from "react-bootstrap";
import banner from "../../img/banner1.png";
import banner2 from "../../img/banner2.png";
import "../../styles/Inicio.css";
import { FaSearch } from "react-icons/fa";
const Inicio = () => {
  return (
    <div>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 image-custom"
            src={banner2}
            alt="Banner único"
          />
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="titulo-custom">VitBite</h1>
            <h2 className="text-light mb-4">¡Encuentra tu consola favorita!</h2>
            <Form className="d-flex w-75 form-custom">
              <input
                type="search"
                placeholder="Buscar consolas, juegos..."
                className="me-2 bg-transparent text-light neon-input"
              />
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Inicio;
