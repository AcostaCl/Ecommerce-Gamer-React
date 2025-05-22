import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";
import "../../../styles/CardProducto.css";
const CardProducto = ({ producto }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
      <div className="container-producto w-100">
        <div className="product h-100 d-flex flex-column">
          <div className="image-producto">
            <img src={producto.imagen} alt={producto.nombreProducto} />
          </div>
          <div className="namePrice">
            <h3>{producto.nombreProducto}</h3>
            <span>${producto.precio}</span>
          </div>
          <p>{producto.descripcion_breve}</p>
          <div className="detalle">
            <button>Ver más</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardProducto;
