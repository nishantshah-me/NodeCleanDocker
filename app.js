const express = require('express')
const app = express()
const comment = require('./data/entites/comment')

app.get('/',(req,res)=> res.send(comment.one()));
app.get('/heartbeat',(req,res) => res.send("Everything is working fine!"));


app.listen(3000,()=>{
  console.log("REST API Server running");
})
