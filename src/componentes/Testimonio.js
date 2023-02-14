import React from "react";
import '../styles/Testimonio.css'

export function Testimonio()
{
  return (
    <div className='contenedor-testimonio'>
        <img
         className='imagen-testimonio'
         src={require('../imagenes/testimonio-1.png')}
         alt='Foto 1'/>
         <div className="contenedor-text-testimonio">
          <p className="nombre-testimonio">Chupamela en Suecia</p>
          <p className="cargo-testimonio">Ingeniero de software en PorHub</p>
          <p className="texto-testimonio">Soy el mas pro en esta profesion jajajajjajaja</p>
         </div>
    </div>
  );
}

// export default Testimonio; Se puede exportar asi o tambien colocando export arriba