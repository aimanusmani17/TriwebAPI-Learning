const express = require('express');

const app= express();

app.get('/', (req,res)=> {
    res.send("I am the response");
});

app.listen(3000);