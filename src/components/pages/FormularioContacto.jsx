import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../styles/FormularioContacto.css";
const FormularioContacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Se envió su mensaje con éxito!",
      icon: "success",
    });
    reset();
  };

  return (
    <div>
      <section className="banner-form text-center py-5">
        <h2 className="titulo-custom-form">Contactanos</h2>
      </section>
      <section className="bg-form">
        <Container className="py-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={4} className="size-col">
              <Row>
                <Col md={6}>
                  <Card className="mb-3 p-3 text-center card-customi">
                    <Card.Body>
                      <h5>Teléfono</h5>
                      <p>47934243</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-3 p-3 text-center card-customi">
                    <Card.Body>
                      <h5>Email</h5>
                      <p>47934243</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-3 p-3 text-center card-customi">
                    <Card.Body>
                      <h5>Local</h5>
                      <p>47934243</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className=" mb-2 p-3 text-center card-customi">
                    <Card.Body>
                      <h5>Teléfono</h5>
                      <p>47934243</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <h3 className="text-light">Formulario de contacto</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Por ej: José Pérez"
                    {...register("name", {
                      required: "El nombre es requerido",
                      minLength: {
                        value: 3,
                        message: "El mínimo de caracteres es 3",
                      },
                      maxLength: {
                        value: 50,
                        message: "El máximo de caracteres permitido es 50",
                      },
                    })}
                    isInvalid={!!errors.name}
                    className="form-custom"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="por ej: felizhola@gmail.com"
                    {...register("email", {
                      required: "El email es requerido",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "El email ingresado es inválido",
                      },
                      minLength: {
                        value: 3,
                        message: "El mínimo de caracteres es 3",
                      },
                      maxLength: {
                        value: 50,
                        message: "El máximo de caracteres permitidos es 50",
                      },
                    })}
                    isInvalid={!!errors.email}
                    className="form-custom"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Escribe tu mensaje (máximo 200 caracteres)"
                    {...register("message", {
                      required: "El mensaje es requerido",
                      minLength: {
                        value: 3,
                        message: "El mínimo de caracteres permitidos es 3",
                      },
                      maxLength: {
                        value: 200,
                        message: "El máximo de caracteres permitidos es 200",
                      },
                    })}
                    isInvalid={!!errors.message}
                    className="form-custom"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="boton-formulario">
                  Enviar
                </Button>
              </Form>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FormularioContacto;
