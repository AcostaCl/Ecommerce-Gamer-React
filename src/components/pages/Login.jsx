import "../../styles/Login.css";
import { useForm } from "react-hook-form";
import { Button, Form, Card, InputGroup } from "react-bootstrap";
import { IoIosMail } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";
import { login } from "../helpers/queries";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function Login({ setUsuarioLogueado }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    if (login(usuario)) {
      setUsuarioLogueado(usuario.email);
      await Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente",
        icon: "success",
      });

      navegacion("/administrador");
    } else {
      Swal.fire({
        title: "Error",
        text: "Email o contraseña incorrecta",
        icon: "error",
      });
    }
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
                  placeholder="Ej: pizza123@gmail.com"
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
                  placeholder="Ej: pizza123"
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
              Iniciar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
