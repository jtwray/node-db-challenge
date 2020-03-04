// const server = require(`./api/server.js`)


const express = require("express")
const router=require('express').Router()

const server=express();
// const port = process.env.PORT || 5000;
// server.listen(port, () =>console.log(`\n** this here server is a running on port${port} boss**\n`))




server.use(express.json());
server.use(function(req,res,next){
    req.name="John Doe";
})

server.get("/",(req,res)=>{
    res.json({name:req.name});
})

const PORT=8000
server.listen(PORT)