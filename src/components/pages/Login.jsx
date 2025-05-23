import "../../styles/Login.css";
import { useForm } from "react-hook-form";
import { Button, Form, Card, InputGroup } from "react-bootstrap";
import { IoIosMail } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos válidos:", data);
  };

  return (
    <div className="login-background">
      <Card className="login-card text-white">
        <Card.Body>
          <h2 className="text-center neon-titulo-login mb-4">Inicia sesión</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="text-light">Correo electrónico</Form.Label>
              <InputGroup>
                <InputGroup.Text className="custom-icon">
                  <IoIosMail />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  className="custom-input-control"
                  isInvalid={!!errors.email}
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Correo inválido",
                    },
                    minLength: {
                      value: 11,
                      message: "Debe ingresar como minimo 11 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "Debe ingresar como maximo 50 caracteres",
                    },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="text-light">Contraseña</Form.Label>
              <InputGroup>
                <InputGroup.Text className="custom-icon">
                  <TbLockPassword />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  className="custom-input-control"
                  isInvalid={!!errors.password}
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "Debe tener al menos 6 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "Debe ingresar como maximo 20 caracteres",
                    },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button type="submit" className="neon-button-login w-100">
              Iniciar sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
