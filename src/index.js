const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();
/*const cors = require('cors');
 var corsOptions = {
    origin: '*',
    optionSuccesStatus: 200
} */

mongoose.connect('mongodb+srv://IdanielF10:Isaac_2018@cluster0.xdnub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));
//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors('cors'));
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/tasks', require('./routes/tasks'));
app.get("/ida",(req, res) => {
    res.send(__dirname +"/ida.vue");
  });

//Static files

//console.log(__dirname + '/public')
app.use(express.static(__dirname + '/public'))


//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

});