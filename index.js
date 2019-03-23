
const express = require('express')

const mongoose = require('mongoose')

const Joi = require('joi');
const uuid = require('uuid');

const app= express()
const db = require ('./config/keys').mongoURI

mongoose
.connect(db)
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.get('/', (req,res) => {
  res.send('<h1> Assessments </h1>')
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log ('Server on ${port} '))