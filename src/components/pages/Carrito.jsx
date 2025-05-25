import { Container, Table, Button } from "react-bootstrap";
import "../../styles/Carrito.css";

const Carrito = () => {
  return (
    <section className="fondo-carrito">
      <div>
        <h2 className="text-center py-4">Tu carrito</h2>
      </div>
      <Container className="mt-5">
        <h2 className="text-light mb-4">Carrito de Compras</h2>
        <p className="text-light">El carrito está vacío.</p>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://imag.bonviveur.com/cupcakes.jpg"
                  alt="cupcake"
                />
              </td>
              <td></td>
              <td>$</td>
              <td>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <h4 className="text-light text-end">Total: </h4>)
      </Container>
    </section>
  );
};

export default Carrito;
