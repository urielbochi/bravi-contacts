require('dotenv').config()
const express = require("express");
const contactRoutes = require('./routes/contactRoutes')

const cors = require('cors')

const app = express();

app.use(express.json())

app.use(cors())
app.use('/', contactRoutes); 

app.listen(3000, () => console.log("Conectado"))