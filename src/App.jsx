import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import AcercaDe from "./components/pages/AcercaDe";
import FormularioContacto from "./components/pages/FormularioContacto";
import BotonArrepentimiento from "./components/pages/BotonArrepentimiento";
import Error404 from "./components/pages/Error404";
import Carrito from "./components/pages/Carrito.jsx";
import Login from "./components/pages/Login.jsx";
import FormularioProducto from "./components/pages/productos/FormularioProducto.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/formulariocontacto" element={<FormularioContacto />} />
          <Route
            path="/botonarrepentimiento"
            element={<BotonArrepentimiento />}
          />
          <Route path="/carrito" element={<Carrito />} />
          <Route
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
          />
          <Route
            path="/administrador/crear"
            element={<FormularioProducto crearProducto={true} />}
          />
          <Route
            path="/administrador/editar/:id"
            element={<FormularioProducto crearProducto={false} />}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
