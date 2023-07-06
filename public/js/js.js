/*INICIO-EFECTO DE ESCRITURA*/

const modal = document.getElementById('modal');
const body = document.body;

function cerrar_modal() {
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('opacity-0');
      body.style.overflowY = ''; // Deshabilitar el scroll en el body
    }, 300);
   
}

function abrir_modal() {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      body.style.overflowY = 'hidden'; // Deshabilitar el scroll en el body
    }, 0);
}



window.addEventListener('load', () =>{
    const contenedor_loader = document.querySelector('.contenedor_loader');
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');


boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})
 
function element() { 
    const menu = document.querySelector('#menu');
    console.log('click')
    menu.classList.toggle('hidden')
}

// window.addEventListener("load", function() {
//     window.addEventListener("scroll", function() {
//     const nav = document.querySelector('.nav-class');
//       if (window.scrollY > 200) {
//         // Cambiar el color de fondo a azul
//         nav.style.backgroundColor = "rgba(0, 0, 0, 0.696)";
//       } else {
//         // Cambiar el color de fondo a su valor original
//         nav.style.backgroundColor = "";
//       }
//     });
// });

var prevScrollpos = window.pageYOffset; // Almacenamos la posición inicial del scroll

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset; // Obtenemos la posición actual del scroll
  if (window.scrollY > 50) {
    document.getElementById("nav").style.top = "-100px"; // Si el scroll se mueve hacia arriba, mostramos el menú hacia abajo
  } else {
    document.getElementById("nav").style.top = "0"; // Si el scroll se mueve hacia abajo, ocultamos el menú hacia arriba
  }
  prevScrollpos = currentScrollPos;
}

/*INICIO-EFECTO DE ESCRITURA*/
const maquina = new Typed('.maquina', {
    strings: [
		'<i class="habilidades">JavaScript</i>',
        '<i class="habilidades">HTML</i>',
		'<i class="habilidades">PHP</i>',
		'<i class="habilidades">Laravel</i>',
		'<i class="habilidades">MySql</i>',
        '<i class="habilidades">CSS</i>',
        '<i class="habilidades">Ilustración</i>',
        '<i class="habilidades">Wordpress</i>',
        '<i class="habilidades">Photoshop</i>',
		'<i class="habilidades">Git</i>',
        '<i class="habilidades">Bootstrap</i>',
        '<i class="habilidades">Tailwind</i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 45, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
/*FINAL-EFECTO DE ESCRITURA*/

function toggleDarkMode() {
    const body = document.querySelector('body');
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
    
    body.classList.toggle('night-mode');
    
    if (body.classList.contains('night-mode')) {
        body.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out';
		img1.style.opacity = '0';
		img2.style.opacity = '1';
		img1.classList.add('transition-img');
		img2.classList.add('transition-img');
    } else {
        body.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out';
		img1.style.opacity = '1';
		img2.style.opacity = '0';
		img1.classList.add('transition-img');
		img2.classList.add('transition-img');
    }
}
