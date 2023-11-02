const title = document.querySelector('.title-acerca-de');

title.onclick = () => {
  if(title.textContent == 'ACERCA DE MÍ') {
    title.textContent = '¡NO ME TOQUES :v!';
  } else {
    title.textContent = 'ACERCA DE MÍ';
  }
}
// EJEMPLO CON FUNCIÓN
// function changeTitle () {
//     if(title.textContent == 'ACERCA DE MÍ') {
//         title.textContent = '¡NO ME TOQUES :v!';
//     } else {
//         title.textContent = 'ACERCA DE MÍ';
//     }
// }

// title.addEventListener('click', changeTitle);

const form = document.getElementById("submit");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.textContent = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.textContent = warnings;
  } else {
    parrafo.textContent = "Enviado...";
  }
  return valido;
}

form.addEventListener("click", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

const rootcss = document.documentElement.style;
const modeDark = document.querySelector('#checkbox-modedark');
function chanceMode() {
  if(!modeDark.checked){
      //Section Day
      rootcss.setProperty('--background-color', '#f5f5dc');
      rootcss.setProperty('--title-color', '#274a6d');
      rootcss.setProperty('--white-letter-color', '#FFF');
      rootcss.setProperty('--black-letter-color', '#000');
      rootcss.setProperty('--firts-color', '#274a6d');
      rootcss.setProperty('--hover-letter-color', '#DDD');
      rootcss.setProperty('--title-color-fotter', '#EEE');
      rootcss.setProperty('--background-input', '#DEDEDE');
    } else{
      // Section night
      rootcss.setProperty('--background-color', '#222');
      rootcss.setProperty('--title-color', '#f5f5dc');
      rootcss.setProperty('--white-letter-color', '#000');
      rootcss.setProperty('--black-letter-color', '#FFF');
      rootcss.setProperty('--firts-color', '#f5f5dc');
      rootcss.setProperty('--hover-letter-color', '#333');
      rootcss.setProperty('--title-color-fotter', '#222');
      rootcss.setProperty('--background-input', '#DEDEDE');
    }
}

modeDark.addEventListener('click', chanceMode);