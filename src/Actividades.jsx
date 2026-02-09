import React, { useState } from 'react'; // Importamos useState
import { Container, Modal } from 'react-bootstrap'; // Añadimos Modal
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Actividades.css';

const Actividades = () => {
  // Estados para controlar el Modal
  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setSelectedImg(img);
    setShow(true);
  };

  const actividades = [
    { img: "/img/Actividades/actividad marzo.jpg", title: "MARZO 2025" },
    { img: "/img/Actividades/actividad mayo-junio.jpg", title: "MAYO-JUNIO 2025" },
    { img: "/img/Actividades/actividad junio.jpg", title: "JUNIO 2025" },
    { img: "/img/Actividades/actividad julio.jpg", title: "JULIO 2025" },
    { img: "/img/Actividades/actividad octubre.jpg", title: "OCTUBRE 2025" },
    { img: "/img/Actividades/actividad noviembre.jpg", title: "NOVIEMBRE 2025" },
  ];

  return (
    <section id="actividades" className="py-1 py-lg-5 bg-white my-1 my-lg-5">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-uppercase">Actividades 2025</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-5"
        >
          {actividades.map((act, index) => (
            <SwiperSlide key={index}>
              {/* Añadimos onClick para abrir el modal */}
              <div className="actividad-card" onClick={() => handleShow(act.img)} style={{ cursor: 'pointer' }}>
                <img 
                  src={act.img} 
                  alt={act.title} 
                  className="img-fluid rounded shadow-sm hover-zoom" 
                />
                <div className="actividad-info">
                  <h5 className="mt-3 text-center fw-bold">{act.title}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* --- MODAL PARA VER LA IMAGEN --- */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="p-0 text-center">
          <img 
            src={selectedImg} 
            alt="Actividad ampliada" 
            className="img-fluid rounded-bottom" 
            style={{ maxHeight: '85vh' }}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Actividades;