import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import AcercaDe from "./components/pages/AcercaDe";
import FormularioContacto from "./components/pages/FormularioContacto";
import BotonArrepentimiento from "./components/pages/BotonArrepentimiento";
import Error404 from "./components/pages/Error404";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
          <Route path="/FormularioContacto" element={<FormularioContacto />} />
          <Route
            path="/BotonArrepentimiento"
            element={<BotonArrepentimiento />}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
