import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <h1 className="text-center fw-bold mb-5 main-title">Asociación de Karate Shotokan</h1>
        
        <Row className="align-items-center">
          {/* Columna de la Imagen */}
          <Col lg={4} md={12} className="mb-4 mb-lg-0 text-center">
            <div className="about-img-container">
              <img 
                src="/img/About/Funakoshi1.jpg" 
                alt="Sensei Gichin Funakoshi" 
                className="img-fluid rounded shadow-lg border-bottom border-danger border-5"
              />
              <p className="mt-2 text-muted small">Sensei Gichin Funakoshi</p>
            </div>
          </Col>

          {/* Columna del Texto Histórico */}
          <Col lg={8} md={12} className="ps-lg-5">
            <div className="shotokan-text">
              <h2 className="shoto-title mb-4">SHOTOKAN</h2>
              <div className="txt-historia">
                <p>
                  <strong>Primer estilo de karate-Do japonés.</strong> El estilo Shotokan nace con el establecimiento del Dojo en Japón del maestro <strong>Gichin Funakoshi</strong> de parte de sus alumnos. 
                  Es una combinación de los dos estilos propios de Okinawa (Shorin Ryu y Shorei Ryu o Naha-te), además de las innovaciones desarrolladas por otros instructores como su hijo <strong>Yoshitaka</strong> y el maestro <strong>Masatoshi Nakayama</strong>.
                </p>
                <p>
                  Al maestro Gichin Funakoshi se le considera como el <strong>padre del Karate-Dō moderno</strong>. Logró que el karate formara parte de las artes marciales formativas japonesas o <em>gendai budō</em>. Mantuvo el movimiento corporal o <em>'tai sabaki'</em> aplicado en la defensa y contrataque, una de las principales diferencias con otras variantes.
                </p>
                <p>
                  Las características más notorias del karate shotokan actual, como las posturas amplias y bajas, las patadas altas y el énfasis en la distancia larga, fueron introducidas por Yoshitaka Funakoshi y divulgadas globalmente por la <strong>JKA</strong>.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;