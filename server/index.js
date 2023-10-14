const express = require('express');
const database=require('./db');
port = process.env.PORT || 3000;
const app =express()

app.listen(port,(err)=>{
    if (!err) console.log(`the server is running on port ${port}`);
    else console.log(err)
})