import React, { useState } from 'react'; // 1. Importamos useState
import { Carousel, Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  // 2. Definimos el estado inicial del formulario
  const [datos, setDatos] = useState({
    nombre: '',
    telefono: '',
    email: '',
    categoria: 'No especificada'
  });

  // 3. Función para actualizar el estado cada vez que escriben
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // 4. Función de envío mejorada
  const handleWhatsApp = (e) => {
    e.preventDefault(); // Evita que la página se recargue al dar click
    
    const numDojo = "34668513694";
    const mensaje = `Hola JKA Canarias! Me gustaría reservar mi clase gratis.%0A%0A` + 
                    `*Nombre:* ${datos.nombre}%0A` +
                    `*Teléfono:* ${datos.telefono}%0A` +
                    `*Categoría:* ${datos.categoria}%0A` +
                    `*Email:* ${datos.email || 'No proporcionado'}`;
    
    const url = `https://wa.me/${numDojo}?text=${mensaje}`;
    window.open(url, '_blank');
  };

  return (
    <section className="hero-master">
      <div className="hero-bg-wrapper">
        <Carousel fade interval={3000} controls={false} indicators={false} pause={false}>
          <Carousel.Item>
            <img className="hero-img-bg" src="/img/shotokaneditado.jpg" alt="Fondo 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="hero-img-bg" src="/img/logo - copia.jpeg" alt="Fondo 2" />
          </Carousel.Item>
        </Carousel>
        <div className="hero-overlay-dark"></div>
      </div>

      <div className="hero-absolute-content">
        <Container>
          <Row className="align-items-center">
<Col lg={7} className="text-dark mb-5 mb-lg-0">
  {/* Añadimos este div para el fondo translúcido */}
  <div className="hero-text-box p-4 p-md-5 rounded-4 shadow-sm">
  <h1 className="display-2 mb-3">JKA CANARIAS</h1>
  <p className="fs-4 mb-4">
    Escuela de Karate tradicional. Disciplina y valores.
  </p>

  <div className="d-flex flex-wrap gap-2 align-items-center">
    <div className="badge bg-danger p-2 px-3">Dojo Certificado</div>
    <div className="badge bg-dark border p-2 px-3 shadow-sm">Inscripciones Abiertas</div>
    
    {/* Enlace al PDF del Programa Técnico */}
    <a 
      href="/docs/programa-examen-jka.pdf" // Ruta a tu archivo PDF
      target="_blank" 
      rel="noopener noreferrer"
      className="btn btn-dark btn-sm ms-lg-2 px-3 border-white btn-programa"
      style={{ borderRadius: '4px', fontSize: '0.85rem' }}
    >
      <i className="bi bi-journal-text me-2"></i>
      PROGRAMA TÉCNICO PDF
    </a>
  </div>
</div>
</Col>

            <Col lg={5}>
              <div className="hero-form-box border-0 shadow-lg">
                <h3 className="text-dark fw-bold mb-2">Solicita tu clase gratis</h3>
                <p className="text-muted small mb-4">Recibirás la confirmación por WhatsApp.</p>
                
                {/* 5. Usamos onSubmit en el Form */}
                <Form onSubmit={handleWhatsApp}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      name="nombre" 
                      type="text" 
                      placeholder="Nombre completo" 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0">
                        <i className="bi bi-whatsapp text-success"></i>
                      </InputGroup.Text>
                      <Form.Control 
                        name="telefono"
                        type="tel" 
                        placeholder="Teléfono" 
                        className="border-start-0"
                        onChange={handleChange}
                        required 
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control 
                      name="email" 
                      type="email" 
                      placeholder="Correo electrónico (opcional)" 
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Select name="categoria" onChange={handleChange}>
                      <option value="No especificada">Selecciona Categoría</option>
                      <option value="Karate Infantil">Karate Infantil</option>
                      <option value="Karate Jóvenes/Adultos">Karate Jóvenes/Adultos</option>
                    </Form.Select>
                  </Form.Group>

                  <Button type="submit" variant="danger" className="w-100 fw-bold py-3 shadow">
                    RESERVAR CLASE POR WHATSAPP
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Hero;