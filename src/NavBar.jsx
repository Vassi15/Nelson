import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="py-3 shadow fondo">
      <Container>
        {/* Logo con texto blanco y el JKA en amarillo */}
        <Navbar.Brand href="#" className="fs-5">
          <span className="JKA">JKA </span> 
          <span className="CANARIAS">CANARIAS</span> 
        </Navbar.Brand>

        {/* Botón hamburguesa para móvil */}
        <Navbar.Toggle aria-controls="nav-jka" />

        <Navbar.Collapse id="nav-jka">
          <Nav className="ms-auto align-items-center">
            
            {/* Grupo 1: Cultura */}
            <NavDropdown title="Conócenos" id="dropdown-cultura" className="text-white">
              <NavDropdown.Item href="#shotokan">Shotokan</NavDropdown.Item>
              <NavDropdown.Item href="#filosofia">Filosofía</NavDropdown.Item>
              <NavDropdown.Item href="#dojokun">Dojo-Kun</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#maestros">Nuestros Maestros</NavDropdown.Item>
            </NavDropdown>

            {/* Grupo 2: Práctica */}
            <NavDropdown title="Entrenamiento" id="dropdown-practica">
              <NavDropdown.Item href="#katas">Katas</NavDropdown.Item>
              <NavDropdown.Item href="#horario">Horarios</NavDropdown.Item>
              <NavDropdown.Item href="#dojos">Dojos (Sedes)</NavDropdown.Item>
              <NavDropdown.Item 
                href="/img/Documentos/Nuevo programa de examen JKA.pdf" 
                target="_blank"
              >
                Programa de Examen
              </NavDropdown.Item>
            </NavDropdown>

            {/* Enlaces Directos */}
            <Nav.Link href="#galeria" className="text-white">Galería</Nav.Link>
            <Nav.Link href="#actividades" className="text-white">Calendario</Nav.Link>
            
            {/* Botón de contacto resaltado */}
            <Nav.Link href="#contacto" className="btn btn-outline-warning ms-lg-3 px-4 text-white">
              Contacto
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;