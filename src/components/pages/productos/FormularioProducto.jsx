import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearProductoAPI, obtenerProductoAPI } from "../../helpers/queries";
import { useParams } from "react-router";
import { useEffect } from "react";
const FormularioProducto = ({ crearProducto }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  useEffect(() => {
    if (crearProducto === false) {
      cargarProducto();
    }
  }, []);

  const cargarProducto = async () => {
    const respuesta = await obtenerProductoAPI(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      setValue("nombreProducto", datos.nombreProducto);
      setValue("precio", datos.precio);
      setValue("imagen", datos.imagen);
      setValue("categoria", datos.categoria);
      setValue("descripcion_breve", datos.descripcion_breve);
      setValue("descripcion_amplia", datos.descripcion_amplia);
      setValue("desarrollador", datos.desarrollador);
      setValue("requisitos_minimos", datos.requisitos_minimos);
    }
  };

  const onSubmit = async (juego) => {
    if (crearProducto) {
      console.log(juego);
      const respuesta = await crearProductoAPI(juego);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Se agregó el juego correctamente!",
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title:
            "Ocurrió un error, volve a intentar esta operación en unos minutos",
        });
      }
    } else {
      console.log("aqui tengo que editar");
    }
  };
  return (
    <div className="bg-purpura">
      <section className="container py-4 min-vh-100 ">
        <h2 className="display-4 mt-5 text-primary">Administrar producto</h2>
        <hr className="my-4 text-light" />
        <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3 text-light" controlId="formNombreJuego">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: The Legend Of Zelda"
              {...register("nombreProducto", {
                required: "El nombre del producto es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como minimo 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como maximo 50 caracteres inclusive",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 text-light" controlId="formPrecio">
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 500"
              {...register("precio", {
                required: "El precio es un valor obligatorio",
                min: {
                  value: 50,
                  message: "El precio minimo debe ser de $50 en adelante",
                },
                max: {
                  value: "20000",
                  message: "El precio maximo debe ser $20000",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 text-light" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/10186375/pexels-photo-10186375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              {...register("imagen", {
                required: "La url de la imagen debe ser obligatoria",
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                  message:
                    "Debe ingresar una url de imagen valida, los formatos admitidos son (jpg|jpeg|gif|png) ",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 text-light" controlId="formCategoria">
            <Form.Label>Categoría*</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="Aventura">Aventura</option>
              <option value="Plataformas">Plataformas</option>
              <option value="Acción">Acción</option>
              <option value="Lucha">Lucha</option>
              <option value="JRPG">JRPG</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Arcade">Arcade</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3 text-light"
            controlId="formDescripcionBreve"
          >
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Es un juego de acción y aventura donde controlas a Link."
              as="textarea"
              {...register("descripcion_breve", {
                required: "La descripcion breve es obligatoria",
                minLength: {
                  value: 5,
                  message:
                    "Debe ingresar como minimo una descripcion de 5 caracteres",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo una descripcion de 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3 text-light"
            controlId="formDescripcionAmplia"
          >
            <Form.Label>Descripción Amplia*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Es un clasico juego de aventura que combina exploración, combate y resolución de acertijos en un vasto mundo abierto. El jugador controla a Link, un joven heroe que debe encontrar piezas de la Trifuerza, rescatar a la princesa Zelda y derrotar al malvado Ganon para salvar el reino de Hyrule."
              as="textarea"
              {...register("descripcion_amplia", {
                required: "La descripcion amplia es obligatoria",
                minLength: {
                  value: 10,
                  message:
                    "Debe ingresar como minimo una descripcion de 10 caracteres",
                },
                maxLength: {
                  value: 250,
                  message:
                    "Debe ingresar como maximo una descripcion de 250 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 text-light" controlId="formDesarrollador">
            <Form.Label>Desarrollador*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Nintendo."
              {...register("desarrollador", {
                required: "El desarrollador es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como minimo 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como maximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 text-light" controlId="formRequisitos">
            <Form.Label>Requisitos del sistema*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Windows 7 o posterior. Procesador: Intel Core i3-560 3.3 GHz / AMD Phenom II X4 805. Memoria: 4 GB de RAM."
              {...register("requisitos_minimos", {
                required: "Los requisitos son obligatorios",
                minLength: {
                  value: 5,
                  message: "Debe ingresar como minimo 5 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "Debe ingresar como maximo 500 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          </Form.Group>
          <Button type="submit" variant="primary">
            Guardar
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default FormularioProducto;
