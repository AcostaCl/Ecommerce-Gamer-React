import { Link } from "react-router";
import "../../styles/Error.css";
import imagenError from "../../img/error404.png";
const Error404 = () => {
  return (
    <>
      <div className="text-center bg-error d-flex flex-column align-items-center justify-content-center ">
        <img
          className="w-50 mb-2"
          src={imagenError}
          alt="Fondo error404 Mario Bros"
        />
        <Link className="btn btn-custom mb-4" to={"/"} variant="primary ">
          Volver al inicio
        </Link>
      </div>
    </>
  );
};

export default Error404;
