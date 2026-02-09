import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const anioActual = new Date().getFullYear(); // Para que siempre esté al día

  return (
    <footer className="footer-custom py-5">
      <Container className="d-flex flex-column align-items-center">
        {/* Frase célebre */}
        <div className="footer-quote text-center mb-4">
          <p className="mb-1">"El karate es un arte defensivo de principio a fin"</p>
          <span className="text-danger fw-bold">— Gichin Funakoshi —</span>
        </div>

        {/* Redes Sociales */}
        <div className="social-links d-flex gap-4 mb-4">
          <a href="https://twitter.com/dojokihaku" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.facebook.com/dojokihaku" target="_blank" rel="noopener noreferrer" title="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/dojokihaku/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="mailto:dojokihakushotokan@gmail.com" title="Email">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>

        {/* Separador sutil */}
        <hr className="footer-divider" />

        {/* Créditos */}
        <div className="footer-credits text-center">
          <p className="mb-0">
            Derechos Reservados <strong>JKA Canarias</strong> ({anioActual}) ©
          </p>
          <p className="creator-tag mt-1">
            Diseñado con <i className="bi bi-heart-fill text-danger"></i> por Ozzy Dávila
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;