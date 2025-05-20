import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  return (
    <section className="container">
      <h2 className="display-4 mt-5 text-primary">Administrar producto</h2>
      <hr />
      
    </section>
  );
};

export default FormularioProducto;
