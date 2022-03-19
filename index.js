const express = require('express');
const res = require('express/lib/response');
const app = express();
app.get('/', (req, res) => {
    res.json({mensagem: 'ola, mundo'})
});
app.listen(8080, () =>{
    let data = new Date();
    console.log("Server rodando, iniciado em :"+data)
})