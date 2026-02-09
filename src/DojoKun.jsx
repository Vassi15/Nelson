import React from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import './DojoKun.css';

const DojoKun = () => {
  return (
    <section id="dojokun" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h2 className="fw-bold display-5">DOJO KUN</h2>
              <p className="text-muted italic">"Las reglas del Dojo y guías para la vida"</p>
            </div>

            <Accordion defaultActiveKey="0" flush className="shadow-sm rounded overflow-hidden">
              {/* PRINCIPIO 1 */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="kun-number">1</span>
                  <strong>Jinkaku kansei ni tsutomuru koto</strong>
                </Accordion.Header>
                <Accordion.Body className="lh-lg">
                  <h5 className="text-danger fw-bold">Buscar la perfección del carácter</h5>
                  Este es el objetivo final del karate. Nos dice lo que significa buscar la perfección del carácter de adentro hacia afuera. 
                  Significa que nunca debemos dejar de aprender. El entrenamiento de Karate, como la vida misma, es un proceso continuo 
                  de crecimiento y educación personal que dura toda la vida.
                </Accordion.Body>
              </Accordion.Item>

              {/* PRINCIPIO 2 */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="kun-number">2</span>
                  <strong>Makoto no michi o mamoru koto</strong>
                </Accordion.Header>
                <Accordion.Body className="lh-lg">
                  <h5 className="text-danger fw-bold">Ser fiel y sincero</h5>
                  Ser fiel significa ser sincero en todo lo que haces, haciendo un esfuerzo total todo el tiempo. 
                  Tienes que ser fiel a otras personas y obligaciones, pero sobre todo fiel a ti mismo. 
                  Cuando eres fiel a ti mismo, los demás tendrán fe en ti y se crea confianza mutua.
                </Accordion.Body>
              </Accordion.Item>

              {/* PRINCIPIO 3 */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="kun-number">3</span>
                  <strong>Doryoku no seishin o yashinau koto</strong>
                </Accordion.Header>
                <Accordion.Body className="lh-lg">
                  <h5 className="text-danger fw-bold">Esforzarse por superarse</h5>
                  Esfuérzate en todo lo que hagas. No importa lo que estés haciendo, ya sea entrenando, trabajando o en una relación, 
                  da el cien por cien. Hacer cualquier otra cosa es engañarte a ti mismo y a los demás. 
                  Si no te esfuerzas, no estás tratando de buscar la perfección de carácter.
                </Accordion.Body>
              </Accordion.Item>

              {/* PRINCIPIO 4 */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span className="kun-number">4</span>
                  <strong>Reigi o omonzuru koto</strong>
                </Accordion.Header>
                <Accordion.Body className="lh-lg">
                  <h5 className="text-danger fw-bold">Respetar a los demás</h5>
                  Un verdadero artista marcial siempre muestra respeto. Mostrar respeto es un signo de humildad, 
                  y la humildad es necesaria para una mente abierta, indispensable para aprender y crecer. 
                  Si respetas a todos, verás más claramente las cosas por lo que son.
                </Accordion.Body>
              </Accordion.Item>

              {/* PRINCIPIO 5 */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span className="kun-number">5</span>
                  <strong>Keki no yu o imashimuru koto</strong>
                </Accordion.Header>
                <Accordion.Body className="lh-lg">
                  <h5 className="text-danger fw-bold">Abstenerse de conductas violentas</h5>
                  Es un recordatorio para mantener la calma interior. Contrólate en todo momento desde dentro. 
                  Un artista marcial siempre debe tener el control, y eso comienza con una paz mental. 
                  Usar la técnica de karate para protegerte será siempre tu reacción de último recurso.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DojoKun;