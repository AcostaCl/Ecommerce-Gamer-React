import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "./App.css";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
