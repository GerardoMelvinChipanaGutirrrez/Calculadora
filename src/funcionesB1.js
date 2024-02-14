let operacionA
let operacionB

function init(){
    let resultado=document.getElementById("resultado");
    let reset=document.getElementById("reset");
    let suma=document.getElementById("suma");
    let resta=document.getElementById("resta");
    let multiplicacion=document.getElementById("multiplicacion");
    let division=document.getElementById("division");
    let igual=document.getElementById("igual");
    let uno=document.getElementById("uno");
    let dos=document.getElementById("dos");
    let tres=document.getElementById("tres");
    let cuatro=document.getElementById("cuatro");
    let cinco=document.getElementById("cinco");
    let seis=document.getElementById("seis");
    let siete=document.getElementById("siete");
    let ocho=document.getElementById("ocho");
    let nueve=document.getElementById("nueve");
    let cero=document.getElementById("cero");
    let punto=document.getElementById("punto");
// numeros
    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1";
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2";
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3";
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4";
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5";
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6";
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7";
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8";
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9";
    }
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0";
    }
    punto.onclick=function(e){
        resultado.textContent=resultado.textContent+".";
    }
//  OPERACIOM
    reset.onclick=function(e){
        restear();
    }

    suma.onclick=function(e){
        operacionA=resultado.textContent;
        operacion="+";
        limpiar();
    }
    resta.onclick=function(e){
        operacionA=resultado.textContent;
        operacion="-";
        limpiar();
    }
    multiplicacion.onclick=function(e){
        operacionA=resultado.textContent;
        operacion="*";
        limpiar();
    }
    division.onclick=function(e){
        operacionA=resultado.textContent;
        operacion="/";
        limpiar();
    }

    igual.onclick=function(e){
        operacionB=resultado.textContent;
        resolver();
    }
}
function limpiar(){
    resultado.textContent="";
}

function restear(){
    resultado.textContent="";
    operacionA=0;
    operacionB=0;
    operacion="";
}

function resolver(){
    let res = 0;
    switch (operacion) {
        case "+":
            res=parseFloat(operacionA)+parseFloat(operacionB);
            break;
        case "-":
            res=parseFloat(operacionA)-parseFloat(operacionB);
            break;
        case "*":
            res=parseFloat(operacionA)*parseFloat(operacionB);
            break;
        case "/":
            res=parseFloat(operacionA)*parseFloat(operacionB);
            break;
    }
    restear();
    resultado.textContent=res;
}