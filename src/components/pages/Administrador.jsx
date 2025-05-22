import { Link } from "react-router";
import { Table } from "react-bootstrap";
import { FaFileCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { listarProductosAPI } from "../helpers/queries";
import ItemProducto from "./productos/ItemProducto";
const Administrador = () => {
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
    <div className="bg-purpura">
      <section className="container py-4 min-vh-100">
        <article className="d-flex justify-content-between align-items-center mt-5 mb-4">
          <h2 className="display-4 font-bold text-primary">
            Juegos disponibles
          </h2>
          <Link
            className="btn btn-primary btn-lg shadow-sm"
            to={"/administrador/crear"}
          >
            <FaFileCirclePlus />
          </Link>
        </article>
        <hr className="my-4 text-light" />
        <article className="table-responsive">
          <Table responsive striped bordered hover className="shadow-sm">
            <thead className="thead-dark">
              <tr className="text-center">
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Imagen</th>
                <th>Desarrollador</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {listaJuegos.map((producto) => (
                <ItemProducto
                  key={producto.id}
                  producto={producto}
                  setListaJuegos={setListaJuegos}
                ></ItemProducto>
              ))}
            </tbody>
          </Table>
        </article>
      </section>
    </div>
  );
};

export default Administrador;
