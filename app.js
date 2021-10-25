const express = require('express')
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const app = express()
const port = 3000;
const cors = require('cors');

connectDB();

//Middleware
app.use(express.json({extended: false}));
app.use(cors());
//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/dist'));
  
  app.get('*', (req, res) => {
    res.sendFile(parth.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}


app.listen(port, () => {
  console.log(`started on http://localhost:${port}`)
})