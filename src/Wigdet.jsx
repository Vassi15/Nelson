import React, { useEffect } from 'react';

const Wigdet = () => {
  useEffect(() => {
    // Evitamos cargar el script múltiples veces
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section style={{ padding: '2rem 0', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
        Galeria de eventos realizados
      </h2>
      <div 
        className="elfsight-app-dc676b2d-afac-4812-b382-909ee5b12d8b" 
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export default Wigdet;