import { Button } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";

const ItemProducto = ({ producto }) => {
  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td className="text-end">{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail w-50"
          alt={producto.nombreProducto}
        />
      </td>

      <td>{producto.descripcion_breve}</td>
      <td>{producto.desarrollador}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <BsPencilSquare />
        </Button>
        <Button variant="danger">
          <FaRegTrashAlt />
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
