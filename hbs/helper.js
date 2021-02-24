
const hbs= require('hbs');
hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('mayusculas', (texto)=>{
let frase = texto.split(' ');
frase.forEach((palabra , index) =>{
    frase[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
});
return frase.join(' ');
});
