//Declaracion de variables 
var it1 = it2 = it3 = it4 = 0;
const fonts = ["'Courier New'","Arial","Georgia","Helvetica", "monospace","sans-serif"];
const colors = ["#A6C1EE","#FF9A9E","#E6DCE8","#D494F7","#F6D365","white"];
const colors2 = ["#FBC2EB","#FAD0C4","#FDCBF1","#F16FD3","#FDA085","whitesmoke"];
const sizes = ["0.7rem","1.2rem","1.8rem","1.0rem"]

//Declaracion de funciones

function colorChanger(valor){
document.body.style.backgroundImage = 'linear-gradient(to bottom right,'+ colors[it1]+','+colors2[it1]+')';
it1++;
if(it1 == colors.length){
it1 = 0;
    }
}

function fontChanger(){
    document.getElementById("estilo4").style.fontFamily = fonts[it2];
    document.getElementById("estilo-btn1").style.fontFamily = fonts[it2];
    document.getElementById("estilo-btn4").style.fontFamily = fonts[it2];
    document.getElementById("estilo-btn3").style.fontFamily = fonts[it2];
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
document.getElementById("estilo-btn1").style.fontSize = sizes[it4];
document.getElementById("estilo-btn4").style.fontSize = sizes[it4];
document.getElementById("estilo-btn3").style.fontSize = sizes[it4];
it4++;
if(it4 == sizes.length){
    it4 = 0;
}
}
