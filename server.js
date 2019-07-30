const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

////// redireccionamiento 
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Pamela"
    });
});

app.get('/about', function(req, res) {
    res.render('about', {

    });
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port} jejeje`);
});