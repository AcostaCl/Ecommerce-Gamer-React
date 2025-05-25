import { Container, Table, Button } from "react-bootstrap";
import "../../styles/Carrito.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(productosGuardados);
  }, []);

  const eliminarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    Swal.fire("Producto eliminado", "Se quitó del carrito", "success");
  };

  const total = carrito.reduce(
    (acc, producto) => acc + parseFloat(producto.precio),
    0
  );
  return (
    <section className="fondo-carrito p-3">
      <div className="banner-carrito">
        <h2 className="text-center py-4 text-carrito">Tu carrito</h2>
      </div>
      <Container className="mt-5">
        <h2 className="mb-4 text-info">Carrito de Compras</h2>
        <hr className="text-info" />
        {carrito.length === 0 ? (
          <p className="text-light">El carrito está vacío.</p>
        ) : (
          <>
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
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td>
                      <img
                        src={producto.imagen}
                        alt={producto.nombreProducto}
                        className="imagen-carrito"
                      />
                    </td>
                    <td>{producto.nombreProducto}</td>
                    <td>${producto.precio}</td>
                    <td>
                      <div>
                        <Button
                          className="boton-carrito"
                          size="sm"
                          onClick={() => eliminarDelCarrito(producto.id)}
                        >
                          Eliminar del carrito
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-light">Total: ${total.toFixed(2)}</h3>

              <Button size="sm">Proceder al pago</Button>
            </div>
          </>
        )}
        ;
      </Container>
    </section>
  );
};

export default Carrito;
