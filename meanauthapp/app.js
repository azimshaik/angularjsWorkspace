const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport  = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',() => {
    console.log('Connected to database'+config.database);
});
mongoose.connection.on('error',() => {
    console.log('Database error'+err);   
});
const app = express();

const users = require('./routes/users');
const port = 3002;
//Cors middle wear to enable run server and client on same port
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

//Body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index route
app.get('/', (req,res) =>{
    res.send('Invalid end point');
});

//Start server
app.listen(port, () => {
    console.log('Server started on port'+port);
});