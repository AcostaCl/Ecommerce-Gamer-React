import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router";
import "../../styles/DetalleProducto.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { obtenerProductoAPI } from "../helpers/queries";
const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    const respuesta = await obtenerProductoAPI(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProducto(datos);
    } else {
      alert("Ocurrió un error, intente este paso en unos minutos");
    }
  };

  return (
    <Container fluid className="py-5 px-4 detalleproducto-fondo">
      <Row>
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src={producto.imagen}
            alt={producto.nombreProducto}
            fluid
            rounded
            className="object-fit-cover w-100 imagen-detalle"
          />
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0">
          <h5 className="text-uppercase fw-bold text-light">
            {producto.nombreProducto}
          </h5>
          <div className="mb-2 text-light">{producto.desarrollador}</div>
          <div className="text-info mb-3 fw-bold">{producto.categoria}</div>
          <h3 className="fw-bold mb-4 text-light">${producto.precio}</h3>
          <Button size="lg" className="btn btn-info d-block mb-4 ">
            Añadir al carrito
          </Button>
          <div>
            <p className="mt-4 text-light">{producto.descripcion_amplia}</p>
          </div>
          <div>
            <h6 className="mt-4 text-info">DETALLES DEL JUEGO</h6>
            <ul>
              <li className="text-light">Género: {producto.categoria}</li>
              <li className="text-light">
                Desarrollador: {producto.desarrollador}
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mt-4 text-info">REQUISITOS DEL SISTEMA</h6>
            <div className="d-flex flex-wrap gap-3 mt-2 mb-3">
              <div className="text-light">{producto.requisitos_minimos}</div>
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
