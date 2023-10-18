const express = require('express');

const app = express();
let Port= 4000

app.get("/",(req,res)=>{
    res.status(200).send({
        statu:true,
        message: "App connected"
    })
})

app.get("/api",(req,res)=>{
    res.status(200).send({
        statu:true,
        message: "App API is connected"
    })
})


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})