const express= require('express');
const app = express();
const hbs= require('hbs');

//importar archivos hbs
require('./hbs/helper.js')

const host =process.env.host || '0.0.0.0';
const puerto = process.env.PORT  || 3000;

app.use(express.static( __dirname + '/public'));
// esto es hbs
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine','hbs');


app.get('/',(req,res)=>{
res.render('index',{
    nombre:'jAun pUjar',
});
});

app.get('/contactos',(req,res)=>{
    res.render('contactos',{
    });
    });



app.listen(puerto);