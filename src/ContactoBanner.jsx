import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ContactoBanner.css';

const ContactoBanner = () => {
  return (
    <section id="contacto" className="contacto-banner py-5">
      <Container className="bg-dark text-white rounded-4 shadow-lg p-5">
        <Row className="align-items-center text-center text-md-start">
          {/* Frase de Motivación */}
          <Col md={8} className="mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">¿Listo para empezar?</h2>
            <p className="lead mb-0">
              Únete a nuestra plantilla e inicia tu aprendizaje de defensa personal con <strong className="text-danger">JKA Canarias</strong>. 
              La primera clase es totalmente gratuita. ¡Te esperamos en el tatami!
            </p>
          </Col>

          {/* Botones de Acción Directa */}
          <Col md={4} className="text-center">
            <div className="d-grid gap-3">
              <Button 
                variant="danger" 
                size="lg" 
                href="mailto:dojokihakushotokan@gmail.com"
                className="fw-bold py-3 shadow"
              >
                <i className="bi bi-envelope-fill me-2"></i> CONTACTAR POR EMAIL
              </Button>
              
              <div className="contact-info mt-2">
                <p className="mb-1 small text-secondary">O llámanos directamente:</p>
                <h5 className="fw-bold">+34 674 85 28 74</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactoBanner;