// Pom --------------------------------------------
function tocasomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto
for (let contador =0; contador < listaDeTeclas.length; contador++) {

    const tecla =listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    console.log(instrumento)

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocasomPom(idAudio)
    }

    tecla.onkeydown = function (evento) {

        if(evento.code === 'Space' || evento.code === 'Enter'){
           tecla.classList.add('ativa')}
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}

