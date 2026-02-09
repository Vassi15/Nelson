import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Filosocia.css';

const Filosofia = () => {
  const preceptos = [
    { id: 1, es: "Karate comienza con una reverencia y termina con una reverencia", jp: "Karate-do wa rei ni hajimari rei ni owaru koto a wasaru na" },
    { id: 2, es: "En karate, nunca ataques primero", jp: "Karate ni sente nashi" },
    { id: 3, es: "Quien practica karate debe seguir el camino de la justicia", jp: "Karate wa, gi no taske" },
    { id: 4, es: "Conócete a ti mismo primero, luego podrás conocer a los demás", jp: "Mazu onore o shire, shikashite ta o shire" },
    { id: 5, es: "El espíritu y la mente son más importantes que la técnica", jp: "gijitsu yori shinjitsu" },
    { id: 6, es: "Prepárate para liberar tu mente", jp: "Kokoro wa hanatan koto o yosu" },
    { id: 7, es: "La desgracia surge de la ociosidad", jp: "Waza wai wa ketai ni seizu" },
    { id: 8, es: "No pienses que lo que aprendes del karate no se puede usar fuera del dojo", jp: "Dojo nomino kárate a omou na" },
    { id: 9, es: "Te llevará toda la vida aprender karate", jp: "Karate-do no shugyo wa isssho de aru" },
    { id: 10, es: "Ponga el karate en su vida diaria; así verás su verdadera belleza", jp: "Ara yuru mono o karateka seyo; sokoni myomi ari" },
    { id: 11, es: "Karate es como agua caliente; si no le das calor continuo se enfria", jp: "Karate Wa Yu No Gotoku Taezu Netsu O Atae Zareba Motono Mizuni Kaeru" },
    { id: 12, es: "No pienses que tienes que ganar; Piensa, más bien, que no tienes que perder", jp: "katsu kangae wa motsuna; makenu kangae wa hitsuyo" },
    { id: 13, es: "Muévete según tu oponente", jp: "Tekki ni yotte tenka seyo" },
    { id: 14, es: "En el conflicto debes discernir los puntos vulnerables de los invulnerables", jp: "Tattakai wa kyo-jitsu no soju ikan ni ari" },
    { id: 15, es: "Considera las piernas y los brazos de tu oponente como lo harías con espadas letales", jp: "hola a no te-ashi wa ken a omoe" },
    { id: 16, es: "Sé consciente en todo momento de que tienes millones de oponentes potenciales", jp: "Danshi mon o izureba hyakuman no teki ari" },
    { id: 17, es: "Para una plena conciencia en la postura natural, debe practicar la posición lista como principiante", jp: "Kamae wa shoshinsha ni atowa shizentai" },
    { id: 18, es: "Practicar kata es una cosa; involucrarse en una pelea real es otra", jp: "Kata wa tadashiku, jisen wa betsumono" },
    { id: 19, es: "No olvides: (1) fuerza y debilidad; (2) contracción y expansión; (3) lentitud y velocidad", jp: "Chikara no kyojaku tai no shinshuku waza no kankyu" },
    { id: 20, es: "Siempre crea e idea", jp: "tsune ni shinen ku fu seyo" },
  ];

  // Dividimos el array en dos columnas
  const mitad = Math.ceil(preceptos.length / 2);
  const col1 = preceptos.slice(0, mitad);
  const col2 = preceptos.slice(mitad);

  return (
    <section id="filosofia" className="filosofia-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">NIJU KUN</h2>
          <p className="lead text-danger">Los 20 Preceptos del Maestro Gichin Funakoshi</p>
          <hr className="divider mx-auto" />
        </div>

        <Row>
          {[col1, col2].map((columna, idx) => (
            <Col lg={6} md={12} key={idx} className="mb-4">
              <ListGroup variant="flush" className="shadow-sm rounded">
                {columna.map((p) => (
                  <ListGroup.Item key={p.id} className="py-3 precepto-item">
                    <div className="d-flex align-items-start">
                      <span className="precepto-num me-3">{p.id}</span>
                      <div>
                        <div className="fw-bold precepto-es">{p.es}</div>
                        <div className="text-muted fst-italic small">{p.jp}</div>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Filosofia;