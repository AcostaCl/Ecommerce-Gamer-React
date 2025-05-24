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
            src="https://www.recetasnestle.com.ar/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/1a0f7933a325ec4a0a8c5d6e5777c8d5.jpg?itok=ohvxOYhV"
            fluid
            rounded
            className="object-fit-cover w-100"
          />
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0">
          <h5 className="text-uppercase fw-bold text-light">Celestial Rift</h5>
          <div className="mb-2 text-light">
            Desarrollado por: NovaCore Studios
          </div>
          <div className="text-info mb-3 fw-bold">Aventura</div>
          <h3 className="fw-bold mb-4 text-light">$5999</h3>
          <Button size="lg" className="btn btn-info d-block mb-4 ">
            Añadir al carrito
          </Button>
          <div>
            <p className="mt-4 text-light">
              Explora un vasto mundo lleno de misterios y magia en Celestial
              Rift, un RPG de mundo abierto con mecánicas únicas de combate y
              una narrativa envolvente. Enfréntate a criaturas mitológicas,
              domina los elementos y descubre los secretos de una civilización
              perdida. Ideal para fans de Skyrim y Zelda: BOTW.
            </p>
          </div>
          <div>
            <h6 className="mt-4 text-info">DETALLES DEL JUEGO</h6>
            <ul>
              <li className="text-light">
                Género: RPG / Mundo abierto / Aventura
              </li>
              <li className="text-light">Desarrollador: NovaCore Studios</li>
            </ul>
          </div>
          <div>
            <h6 className="mt-4 text-info">REQUISITOS DEL SISTEMA</h6>
            <div className="d-flex flex-wrap gap-3 mt-2 mb-3">
              <div className="text-light">Windows 10</div>
            </div>
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
