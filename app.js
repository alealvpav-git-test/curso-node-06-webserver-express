const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

// const puerto = 8080;
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// app.get('/', (req, res) => {

//     // res.send('Hello World');
//     let salida = {
//         nombre: 'Alejandro',
//         edad: 31,
//         url: req.url
//     }

//     res.send(salida);

// });



// app.get('/data', (req, res) => {

//     let salida = 'Hello Data';

//     res.send(salida);

// });


app.get('/', (req, res) => {

    res.render('home', {
        name: 'Alejandro'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});



app.listen(port);