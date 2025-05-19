import { Link } from "react-router";
const Administrador = () => {
  return (
    <div>
      <h2>Página de administrador</h2>
      <Link className="btn btn-primary" to={"/administrador/crear"}></Link>
    </div>
  );
};

export default Administrador;
