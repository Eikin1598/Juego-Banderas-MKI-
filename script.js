let banderas = ["ar.webp", "pa.webp", "ad.webp", "gb.webp", "bo.webp"];

let correcta = [0, 1, 0, 2, 1];

let opciones = [];

opciones.push(["ARGENTINA", "ITALIA", "USA"]);
opciones.push(["CHILE", "PANAMA", "ESPAÑA"]);
opciones.push(["ANDORRA", "MEXICO", "CHINA"]);
opciones.push(["BRASIL", "ECUADOR", "REINO UNIDO"]);
opciones.push(["CUBA", "BOLIVIA", "ALEMANIA"]);

let posAcual = 0;

let cantidaAcertadas = 0;

function comenzarJuego() {

    posAcual = 0;
    cantidaAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

function cargarBandera() {

    if (banderas.length <= posAcual) {
        terminarJuego();
    } else {

        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posAcual];
        document.getElementById("n0").innerHTML = opciones[posAcual][0];
        document.getElementById("n1").innerHTML = opciones[posAcual][1];
        document.getElementById("n2").innerHTML = opciones[posAcual][2];

    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre"
    document.getElementById("n1").className = "nombre"
    document.getElementById("n2").className = "nombre"

    document.getElementById("l0").className = "letra"
    document.getElementById("l1").className = "letra"
    document.getElementById("l2").className = "letra"
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posAcual]) {
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidaAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posAcual]).className = "nombre nombreAcertada"
        document.getElementById("l" + correcta[posAcual]).className = "letra letraAcertada"
    }
    posAcual++;

    setTimeout(cargarBandera,1000)
}
function terminarJuego() {

    document.getElementById("pantalla-juego").style.display ="none";
    document.getElementById("pantalla-final").style.display ="block";

    document.getElementById("numCorrectas").innerHTML = cantidaAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidaAcertadas;
}

function volverAlInicio(){

    document.getElementById("pantalla-final").style.display ="none";
    document.getElementById("pantalla-inicial").style.display ="block";
    document.getElementById("pantalla-juego").style.display ="none";
}