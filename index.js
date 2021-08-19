const express = require('express')

const server = express();

server.get('/curso', (req, res) =>{
    return res.json({curso: "NODE JS",quantidade: '7'})
})

server.listen(3000);