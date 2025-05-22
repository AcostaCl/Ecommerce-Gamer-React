import { Button } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { borrarProductoAPI, listarProductosAPI } from "../../helpers/queries";

const ItemProducto = ({ producto, setListaJuegos }) => {
  const borrarProducto = async () => {
    const respuesta = await borrarProductoAPI(producto.id);
    if (respuesta.status === 200) {
      const respuestaListaJuegos = await listarProductosAPI();
      if (respuestaListaJuegos.status === 200) {
        const datos = await respuestaListaJuegos.json();
        setListaJuegos(datos);
      }
      alert("El producto fue eliminado correctamente");
    } else {
      alert("Ocurrió un error, intente esta operación en unos minutos");
    }
  };

  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td className="text-end">{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="w-50"
          alt={producto.nombreProducto}
        />
      </td>
      <td>{producto.desarrollador}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <BsPencilSquare />
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          <FaRegTrashAlt />
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
