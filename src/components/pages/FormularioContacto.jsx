import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const FormularioContacto = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Se envió su mensaje con éxito!",
      icon: "success",
    });
  };

  return (
    <div>
      <div className="banner-form text-center py-5">
        <h1>Contactanos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat
          quod vero? Nihil repudiandae aliquid, cumque provident id rerum,
          facere odit cupiditate, itaque velit voluptatum! Illum numquam
          laudantium laboriosam voluptatem!
        </p>
      </div>
    </div>
  );
};

export default FormularioContacto;
