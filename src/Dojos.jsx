import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const dojosData = [
  {
    nombre: "Dojo Principal (Kihaku)",
    instructor: "Nelson Rivas 4º Dan J.K.A",
    ubicacion: "Santa Cruz de Tenerife",
    email: "dojokihakushotokan@gmail.com",
    telefono: "+34-674-852-874",
    imagen: "/img/nelsonRivas.jpg" // Asegúrate de que la ruta sea correcta
  },
  {
    nombre: "Club Naka Tatsuya",
    instructor: "Angelo Giordano 4º Dan",
    ubicacion: "Tenerife Sur",
    email: "giordano@diag.it",
    telefono: "+34-603-296-963",
    imagen: "/img/giordano.jpg"
  },
  {
    nombre: "Club Tora",
    instructor: "Alessandro Soviero 3º Dan",
    ubicacion: "Tenerife Sur",
    email: "alesov2004@gmail.com",
    telefono: "+34-642-389-086",
    imagen: "/img/alessandro.jpg"
  },
  {
    nombre: "Dojo Shotokan Karate Do Canarias",
    instructor: "Luigui Santillo 1º Dan J.K.A",
    ubicacion: "Costa del silencio Sur Tenerife",
    email: "shotokankaratedocanarias@gmail.com",
    telefono: "+34-602-515-593",
    imagen: "/img/luigui.jpg"
  }
];

const Dojos = () => {
  return (
    <section className="py-5 bg-light" id="dojos">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Dojos Afiliados</h2>
          <div className="mx-auto" style={{width: '60px', height: '4px', backgroundColor: 'red'}}></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-5 px-2"
        >
          {dojosData.map((dojo, index) => (
            <SwiperSlide key={index}>
              <div className="card h-100 shadow-sm border-0 p-4 text-center" style={{ borderRadius: '15px' }}>
                <div className="card-body">
                  {/* Contenedor de la Imagen Circular */}
                  <div className="mb-4 d-inline-block position-relative">
                    <img 
                      src={dojo.imagen} 
                      alt={dojo.instructor}
                      className="rounded-circle shadow"
                      style={{ 
                        width: '130px', 
                        height: '130px', 
                        objectFit: 'cover',
                        border: '4px solid #fff',
                        outline: '2px solid #dc3545' // Un borde rojo fino exterior
                      }}
                    />
                  </div>
                  
                  <h3 className="h5 fw-bold mb-1">{dojo.nombre}</h3>
                  <p className="text-danger fw-bold small mb-3">{dojo.instructor}</p>
                  
                  <hr className="w-25 mx-auto mb-4" />
                  
                  <div className="text-start" style={{ fontSize: '0.9rem' }}>
                    <p className="mb-2 text-muted">
                      <i className="fas fa-map-marker-alt me-2 text-danger"></i> {dojo.ubicacion}
                    </p>
                    <p className="mb-2 text-muted text-truncate">
                      <i className="fas fa-envelope me-2 text-danger"></i> {dojo.email}
                    </p>
                    <p className="mb-0 text-muted">
                      <i className="fas fa-phone me-2 text-danger"></i> {dojo.telefono}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Dojos;