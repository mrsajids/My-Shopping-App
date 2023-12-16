const express = require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send('<h1>app working properly..</h1>')
})

app.listen(4000,()=>{
    console.log('server running');
})
