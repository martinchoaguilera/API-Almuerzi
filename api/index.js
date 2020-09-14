const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );
process.env.MONGO_URI = 'mongodb+srv://tincho:tincho@cluster0.x1xeh.mongodb.net/tincho-db?retryWrites=true&w=majority';
mongoose.connect( process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

app.get('*', ( req , res )=> {
    res.send('Hola !')
})

app.listen( 3000 , ()=>console.log('PUERTO CORRIENDO'));

 mongoose.exports = app;





