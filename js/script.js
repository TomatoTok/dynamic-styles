//Declaracion de variables 
var it1 = it2 = it3 = it4 = 0;
const fonts = ["'Courier New'","Arial","Georgia","Helvetica", "monospace","sans-serif"];
const colors = ["#A6C1EE","#FF9A9E","#E6DCE8","#D494F7","#F6D365","white"];
const colors2 = ["#FBC2EB","#FAD0C4","#FDCBF1","#F16FD3","#FDA085","whitesmoke"];
const sizes = ["0.7rem","1.2rem","1.8rem","1.0rem"]
const frase = ["Buen dia c:","Aún no te rindas","No importa, lo hiciste muy bien hoy","Me alegro que estes aquí","Que bien lees",
"Gracias por pasarte","No todos los dias se ven bellezas como tú ;)","Sal a pasear, es bueno en muchos aspectos",":D","Quien fuera bizco para verte dos veces",
"Twice > generic kpop girl group","Me dicen Tomato","Bañate no seas otaku","Netflix está sobrevalorado","La tuya por si acaso"]

//Declaracion de funciones

function colorChanger(valor){
document.body.style.backgroundImage = 'linear-gradient(to bottom right,'+ colors[it1]+','+colors2[it1]+')';
it1++;
if(it1 == colors.length){
it1 = 0;
    }
}

function fontChanger(){
//primero se crea un array desde la seleccion de todos los "button" luego se mapea a cada uno
//de ellos y se le envia por parametro a una funcion que lo altera

    (Array.from(document.querySelectorAll("button")).map(function sizeCh(button) {
        button.style.fontFamily = fonts[it2];})); 

    document.getElementById("estilo2").style.fontFamily = fonts[it2];
    document.getElementById("estilo4").style.fontFamily = fonts[it2];

        it2++;

    if(it2 == fonts.length){
        it2 = 0;
    }
}

function colorChanger2(valor){
    document.getElementById("estilo2").style.backgroundImage = 'linear-gradient(to top left,'+ colors[it3]+','+colors2[it3]+')';
    it3++;
    if(it3 == colors.length){
    it3 = 0;
        }
}

function sizeFontChanger(){
document.body.style.fontSize = sizes[it4];
var botones = document.getElementsByTagName("button");
(Array.from(document.querySelectorAll("button")).map(function sizeCh(button) {
button.style.fontSize = sizes[it4];})); 
it4++;
if(it4 == sizes.length){
    it4 = 0;
    }
}



function nameChanger(){
    let = nombre = prompt("Ingrese un nombre");
    if(nombre.length > 20){
        alert("El nombre es muy largo, introduzca otro.")
    }else{
        document.getElementById("estilo-btn5").textContent = "Nombre: " + nombre;
    }
}

function beautifulText(){
    document.getElementById("frase").textContent = "\"" + frase[Math.floor(Math.random()*frase.length)]+ "\"";
}