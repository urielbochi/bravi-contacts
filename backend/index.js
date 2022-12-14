require('dotenv').config()
const express = require("express");
const contactRoutes = require('./routes/contact')

const cors = require('cors');
const root = require('./routes/root');

const app = express();

app.use(express.json())

app.use(cors())
app.use('/', root); 

app.listen(3001, () => console.log("Conectado na porta 3001"))