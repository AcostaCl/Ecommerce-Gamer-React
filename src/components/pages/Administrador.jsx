import { Link } from "react-router";
import { Table } from "react-bootstrap";
import { FaFileCirclePlus } from "react-icons/fa6";

const Administrador = () => {
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
          <Table striped bordered hover className="shadow-sm">
            <thead className="thead-dark">
              <tr className="text-center">
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Imagen</th>
                <th>Desarrollador</th>
                <th>Editar | Borrar</th>
              </tr>
            </thead>
          </Table>
        </article>
      </section>
    </div>
  );
};

export default Administrador;
