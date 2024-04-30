
//  Ocultamos los elementos del cuerpo de la tarjeta para si no hat tarea
export const Mostra_ocultal = () => {
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".footer").style.display = 'none';
  
}
Mostra_ocultal();

// Se escucha el elemento
    window.addEventListener('keydown', (e)=>{
        if (e.keyCode === 13) {
         
            document.querySelector(".main").style.display = 'block';
            document.querySelector(".footer").style.display = 'block';
            Nueva_tarea();
      }
    });

// Crear nueva tarea
export const Nueva_tarea = () => {
    console.log('nueva tarea');
}