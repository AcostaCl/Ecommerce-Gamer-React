import { Route, Routes } from "react-router";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/productos/FormularioProducto";
const RutasAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Administrador />} />
      <Route
        path="/crear"
        element={<FormularioProducto crearProducto={true} />}
      />
      <Route
        path="/editar/:id"
        element={<FormularioProducto crearProducto={false} />}
      />
    </Routes>
  );
};

export default RutasAdmin;
