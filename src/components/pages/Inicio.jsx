import { Carousel, Form, Container, Row, Col, Card } from "react-bootstrap";
import banner from "../../img/banner1.png";
import "../../styles/Inicio.css";
import CardProducto from "./productos/CardProducto";
import { useEffect, useState } from "react";
import { listarProductosAPI } from "../helpers/queries";
import { IoMdPricetags } from "react-icons/io";
import { MdLaptopChromebook } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router";

const Inicio = () => {
  const [listaJuegos, setListaJuegos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaJuegos(datos);
      setResultadosFiltrados(datos);
    } else {
      alert("Ocurrió un error, intenta esta operación en unos minutos");
    }
  };

  const handleBusqueda = (e) => {
    const valor = e.target.value;
    setFiltro(valor);

    const filtroLower = valor.toLowerCase();

    const filtrados = listaJuegos.filter((producto) => {
      const nombre = producto.nombreProducto?.toLowerCase() || "";
      const categoria = producto.categoria?.toLowerCase() || "";
      return nombre.includes(filtroLower) || categoria.includes(filtroLower);
    });

    setResultadosFiltrados(filtrados);
  };

  return (
    <div>
      <section className="bg-inicio">
        <article>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 image-custom"
                src={banner}
                alt="Banner retro"
              />
              <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="titulo-custom">VitBite</h1>
                <h2 className="text-light mb-4 subtitulo-custom">
                  Tu mundo gamer retro
                </h2>
                <Form className="d-flex w-75 form-custom">
                  <input
                    type="search"
                    placeholder="Buscar categorias, juegos..."
                    className="me-2 bg-transparent  neon-input"
                    value={filtro}
                    onChange={handleBusqueda}
                  />
                </Form>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </article>
        <article>
          <Container className="mt-5">
            <h2 className="display-6 h2-inicio">Nuestros Productos</h2>
            <hr className="h2-inicio" />
            <Row>
              {resultadosFiltrados.length > 0 ? (
                resultadosFiltrados.map((producto) => (
                  <CardProducto key={producto.id} producto={producto} />
                ))
              ) : (
                <p className="text-white text-center">
                  No se encontraron productos.
                </p>
              )}
            </Row>

            <hr className="h2-inicio" />
            <article className="bg-inicio text-white py-4 mt-5">
              <Row className="text-center">
                <Col md={4}>
                  <MdLaptopChromebook size={30} className="mb-2 text-purpura" />
                  <h6 className="fw-bold">Catálogo en expansión</h6>
                  <p className="mb-0">Agregamos nuevos clásicos cada semana.</p>
                </Col>
                <Col md={4}>
                  <IoMdPricetags size={30} className="mb-2 text-purpura" />
                  <h6 className="fw-bold">Descuentos</h6>
                  <p className="mb-0">
                    Ahorrá un 25% pagando por transferencia bancaria.
                    ¡Aprovechalo!
                  </p>
                </Col>
                <Col md={4}>
                  <FaGamepad size={30} className="mb-2 text-purpura" />
                  <h6 className="fw-bold">Compatible</h6>
                  <p className="mb-0">
                    Juegos listos para correr en tu PC o en tu emulador
                    favorito. Fácil de instalar y jugar.
                  </p>
                </Col>
              </Row>
            </article>
            <h2 className="display-6 h2-inicio">Categorías</h2>
            <hr className="h2-inicio" />
            <Row>
              <Col md={3}>
                <Link to="/categoria/Arcade" className="text-decoration-none">
                  <div className="category-card mb-4">
                    <img
                      src="https://dameesos5.wordpress.com/wp-content/uploads/2016/01/25-mejores-juegos-arcade-80.jpg?w=800&h=463&crop=1"
                      alt="Arcade"
                      className="category-card-img"
                    />
                    <div className="category-card-overlay">
                      <h5>Arcade</h5>
                      <p>Máquinas retro clásicas</p>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col md={3}>
                <Link
                  to="/categoria/Plataformas"
                  className="text-decoration-none"
                >
                  <div className="category-card mb-4">
                    <img
                      src="https://pressover.news/wp-content/uploads/2021/05/Foto-1-5.jpg"
                      alt="Plataformas"
                      className="category-card-img"
                    />
                    <div className="category-card-overlay">
                      <h5>Plataformas</h5>
                      <p>Saltos y aventuras pixeladas</p>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col md={3}>
                <Link to="/categoria/Aventura" className="text-decoration-none">
                  <div className="category-card mb-4">
                    <img
                      src="https://i.blogs.es/20d2f6/supermariobros/650_1200.jpg"
                      alt="Aventura"
                      className="category-card-img"
                    />
                    <div className="category-card-overlay">
                      <h5>Aventura</h5>
                      <p>Historias para explorar</p>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col md={3}>
                <Link to="/categoria/Lucha" className="text-decoration-none">
                  <div className="category-card mb-4">
                    <img
                      src="https://omniretro.com/wp-content/uploads/2019/03/clasicos-arcade.jpg"
                      alt="Lucha"
                      className="category-card-img"
                    />
                    <div className="category-card-overlay">
                      <h5>Lucha</h5>
                      <p>1v1 clásicos y combos retro</p>
                    </div>
                  </div>
                </Link>
              </Col>
              <article className="consulta-bar mt-4 ">
                <Container className="text-center">
                  <p className="consultar-bar text-light mb-4">
                    Por cualquier consulta o sugerencia dirigirse al formulario
                    de contacto
                  </p>
                  <Link to={"/FormularioContacto"} className="boton-bar">
                    Ir al formulario
                  </Link>
                </Container>
              </article>
            </Row>
          </Container>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
