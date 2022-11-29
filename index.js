const input = document.querySelector('input');
const btnCalcular = document.querySelector('.calcular');
const btnLimpiar = document.querySelector('.limpiar');
const p = document.querySelector('.resultado');


function esPrimo (){
 numero = input.value;
 let acu = 0;
 for (let x=0;x<=numero;x++){
    if (numero%x == 0){
        acu = acu + 1;
    }else{
        acu = acu + 0;
    }
 }
 if (acu === 1 || acu === 2){
    p.innerText = "El " + input.value + " es primo";
 }else{
    p.innerText = "El " + input.value + " no es primo";
 }
};