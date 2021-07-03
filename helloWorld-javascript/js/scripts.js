const text = "Hello World!"; //Variável que recebe o texto base
const txt2 = text.toUpperCase(); // Coloca todos os caracteres em Caps Lock
const txt3 = text.toLowerCase(); // Desativa o Caps Lock de todos os caracteres
const txt4 = text.split(''); // Separa os caracteres colocando vírgulas entre eles
const txt5 = text.split('').reverse().join(''); //Separa os caractreres, e os junta novamente numa frase inversa
const txt6 = text.split("").reverse().join('').split(" ").reverse().join(" "); // Inverte os caracteres e depois inverte a ordem das palavras na frase
const txt7 = text.split('').join(`<br>`); // Separa os caracteres e adiciona quebra de linha
const txt8 = text.split("").reverse().join(`<br>`); // Separa os caraceters invertidos com quebra de linha 
const txt9 = text.fontcolor("red"); // Coloca uma cor vermelha no texto
const txt10 = `<p style='background-color:#6988d1'>${text}</p>`; // Altera a cor de background do texto
const txt11 = `<p style='background-color:#bf982e'>${text.fontcolor("white")}</p>`; // Altera a cor de background e a cor da fonte do texto

const txtarray = [txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11]; //Armazena todos os textos num array

//"Ouvidor" de eventos que executará uma função quando a DOM for carregada
document.addEventListener("DOMContentLoaded", ()=>{

    var showtext = document.getElementById('textjs'); //Atribui o parágrafo com id "textjs" à variável showtext

    //Insere ao final da variável showtext, o mapeamento de todos os elementos do Array
    showtext.insertAdjacentHTML('afterend', txtarray.map(word => { return (`<p>${word}</p>`) }).join("") );  
});