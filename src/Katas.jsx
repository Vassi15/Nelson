import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Katas.css';

const Katas = () => {
  const listaKatas = [
    { id: "yEw51QSOxw0", titulo: "Heian Shodan" },
    { id: "FbZwV8MjP4I", titulo: "Heian Nidan" },
    { id: "gmN0AavKf_Q", titulo: "Heian Sandan" },
    { id: "2imTCq6lSt8", titulo: "Heian Yondan" },
    { id: "lH9T0u7LArU", titulo: "Heian Godan" },
  ];

  return (
    <section id="katas" className="py-5 text-white">
      <Container>
        <h2 className="text-center fw-bold mb-2 text-uppercase">Biblioteca de Katas</h2>
        <p className="text-center text-secondary mb-5">Estudia la técnica tradicional de JKA</p>
        
        <Row className="g-4">
          {listaKatas.map((kata, index) => (
            <Col key={index} md={6} lg={4}>
              <div className="kata-video-card">
                <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
                  <iframe 
                    src={`https://www.youtube.com/embed/${kata.id}`} 
                    title={kata.titulo}
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="mt-3 text-center text-danger fw-bold">{kata.titulo}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Katas;