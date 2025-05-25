import { Container, Table, Button } from "react-bootstrap";
import "../../styles/Carrito.css";

const Carrito = () => {
  return (
    <section className="fondo-carrito p-3">
      <div className="banner-carrito">
        <h2 className="text-center py-4 text-carrito">Tu carrito</h2>
      </div>
      <Container className="mt-5">
        <h2 className="mb-4 text-info">Carrito de Compras</h2>
        <hr className="text-info" />
        <p className="text-light">El carrito está vacío.</p>
        <Table responsive className="tabla-carrito">
          <thead>
            <tr>
              <th className="text-info">Imagen</th>
              <th className="text-info">Nombre</th>
              <th className="text-info">Precio</th>
              <th className="text-info"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://imag.bonviveur.com/cupcakes.jpg"
                  alt="cupcake"
                  className="imagen-carrito"
                />
              </td>
              <td>Nombre del producto</td>
              <td>$99</td>
              <td>
                <div>
                  <Button className="boton-carrito" size="sm">
                    Eliminar del carrito
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-light">Total: </h3>
          <Button size="sm">Proceder al pago</Button>
        </div>
      </Container>
    </section>
  );
};

export default Carrito;
