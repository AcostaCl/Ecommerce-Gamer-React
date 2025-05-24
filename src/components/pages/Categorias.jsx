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
    <Container className="mt-5">
      <h2 className="display-6">Categoría: {categoriaNombre}</h2>
      <hr />
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
  );
};

export default Categorias;
