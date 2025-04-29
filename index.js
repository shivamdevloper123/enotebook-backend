const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors') 
require('dotenv').config()

connectToMongo();
const app = express()
const port = process.env.PORT||8000

app.use(cors({
    origin:process.env.BASE_URL,
    credentials:true,
    methods:["GET","PUT","PATCH","DELETE","OPTIONS","POST"],
    allowedHeaders:"*"
  }
));
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})