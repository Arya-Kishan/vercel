const express = require('express')
const PORT = process.env.PORT ||8080
const server = express()

server.get("/",(req,res)=>{
    res.send("HII THERE ITS DEPLOYED")
})

server.listen(PORT)