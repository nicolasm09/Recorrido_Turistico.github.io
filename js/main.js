document.addEventListener('DOMContentLoaded', () =>{
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel,{
    duration:50,
    dist: -120,
    shift: 5,
    padding: 5,
    numVisible:3, 
    indicators:true
  });
})

const ham = document.querySelector('.ham');
const enlaces = document.querySelector ('.enlaces-menu');
const titulo = document.querySelector ('.Titulo');
const span = document.querySelectorAll ('span');
const barras = document.querySelectorAll ('.ham span');
const princ = document.querySelector('.contenido-principal');

ham.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
  titulo.classList.toggle('activado');
  princ.classList.toggle('activado');
  span.forEach(child => {child.classList.toggle('activado')});
  barras.forEach(child => {child.classList.toggle('animado')});

});