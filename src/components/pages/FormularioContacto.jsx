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
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <Card className="mb-3 p-3 text-center">
              <Card.Body>
                <h5>Teléfono</h5>
                <p>47934243</p>
              </Card.Body>
            </Card>
            <Card className="mb-3 p-3 text-center">
              <Card.Body>
                <h5>Whatsapp</h5>
                <p>+54 9 381 333-3333</p>
              </Card.Body>
            </Card>
            <Card className="mb-3 p-3 text-center">
              <Card.Body>
                <h5>Email</h5>
                <p>vitbitesupport@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h3>Get In Touch</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
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
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
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
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
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
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="warning" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormularioContacto;
