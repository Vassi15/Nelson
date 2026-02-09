import React from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import './Horario.css';

const Horarios = () => {
  return (
    <section id="horarios" className="py-5 bg-white">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center fw-bold display-5">HORARIOS</h2>
            <hr className="divider mx-auto" />
            <p className="text-center text-muted">Consulta nuestras clases por categorías</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="table-responsive shadow-sm rounded">
              <Table bordered hover className="text-center mb-0 custom-table">
                <thead className="table-dark">
                  <tr>
                    <th>Categoría</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-infantil">
                    <td className="fw-bold category-name">Infantil</td>
                    <td>17:30 - 18:30</td>
                    <td>17:00 - 18:00</td>
                    <td>17:30 - 18:30</td>
                    <td>17:00 - 18:00</td>
                    <td>17:30 - 18:30</td>
                    <td>10:00 - 11:00</td>
                  </tr>
                  <tr className="table-jovenes">
                    <td className="fw-bold category-name">Jóvenes</td>
                    <td>18:30 - 19:30</td>
                    <td className="no-class">-</td>
                    <td>18:30 - 19:30</td>
                    <td className="no-class">-</td>
                    <td>18:30 - 19:30</td>
                    <td className="no-class">-</td>
                  </tr>
                  <tr className="table-adultos">
                    <td className="fw-bold category-name">Adultos</td>
                    <td>19:30 - 20:30</td>
                    <td className="no-class">-</td>
                    <td>19:30 - 20:30</td>
                    <td className="no-class">-</td>
                    <td>19:30 - 20:30</td>
                    <td className="no-class">-</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <p className="mt-3 small text-muted text-center">
              * Los horarios pueden estar sujetos a cambios según festividades.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Horarios;