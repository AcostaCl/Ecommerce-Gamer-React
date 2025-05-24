import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { obtenerProductosPorCategoriaAPI } from "../helpers/queries";
import CardProducto from "./productos/CardProducto";
import { Container, Row } from "react-bootstrap";

const Categorias = () => {
  const { categoriaNombre } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const respuesta = await obtenerProductosPorCategoriaAPI(categoriaNombre);
      if (respuesta && respuesta.ok) {
        const datos = await respuesta.json();
        setProductos(datos);
      } else {
        console.error("Error al cargar productos por categoría");
      }
    };

    cargarProductos();
  }, [categoriaNombre]);

  return (
    <div className="detalleproducto-fondo">
      <Container>
        <h2 className="display-6 text-info py-3">
          Categoría: {categoriaNombre}
        </h2>
        <hr className="text-info" />
        <Row>
          {productos.length > 0 ? (
            productos.map((producto) => (
              <CardProducto key={producto.id} producto={producto} />
            ))
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Categorias;
