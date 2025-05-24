import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router";
import "../../styles/DetalleProducto.css";

const DetalleProducto = () => {
  return (
    <Container fluid className="py-5 px-4 detalleproducto-fondo">
      <Row>
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src="https://www.gadgetscuina.com/blog/cache/resize_800/2013/11/3648799674.jpeg"
            fluid
            rounded
            className="object-fit-cover w-50"
          />
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0">
          <h5 className="text-uppercase fw-bold">Celestial Rift</h5>
          <div className="text-muted mb-2">
            Desarrollado por: NovaCore Studios
          </div>
          <div className="text-info mb-3 fw-bold">Aventura</div>
          <h3 className="fw-bold mb-4">$5999</h3>
          <Button variant="dark" size="lg" className="d-block mb-4">
            Añadir al carrito
          </Button>
          <p className="mt-4">
            Explora un vasto mundo lleno de misterios y magia en Celestial Rift,
            un RPG de mundo abierto con mecánicas únicas de combate y una
            narrativa envolvente. Enfréntate a criaturas mitológicas, domina los
            elementos y descubre los secretos de una civilización perdida. Ideal
            para fans de Skyrim y Zelda: BOTW.
          </p>
          <h6 className="mt-4">DETALLES DEL JUEGO</h6>
          <ul>
            <li>Género: RPG / Mundo abierto / Aventura</li>
            <li>Desarrollador: NovaCore Studios</li>
          </ul>
          <h6 className="mt-4">REQUISITOS DEL SISTEMA</h6>
          <div className="d-flex flex-wrap gap-3 mt-2 mb-3">
            <div className="text-muted">Windows 10</div>
          </div>
          <Link to="/" className="text-decoration-none">
            ← Volver a la tienda
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
