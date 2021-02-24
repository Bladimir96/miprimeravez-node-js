const http= require('http');
http.createServer((req, res)=>{

    
    res.writeHead(200,{'Content-Type' : "application/json"});

    let alumno ={
        nombre: "Luis", apellido: "Uñug" , nivel:5,
        url:req.url
    };
    res.write(JSON.stringify(alumno));

    //res.write('Hola Mundo');
    res.end();

}).listen(8081);
console.log('ejecutandose por el puerto 8081')