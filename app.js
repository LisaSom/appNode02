const path = require('path')
const express = require('express');
const app= express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const birds = require('./routes/birds')
const dogs = require('./routes/dogs')
const users = require('./routes/users')
const port=8088;

app.set('views', __dirname + '/vues');
app.set('view engine', 'ejs');

app.use("/birds", birds)
app.use("/dogs", dogs)
app.use("/users", users)


app.listen(port,()=> console.log(port))

//localhost:8088/birds/
//localhost:8088/birds/about
//npm install express --save    pour installer les modules (package.json...)
// ""    ""   ejs --save