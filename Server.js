const exp = require('express');
const mon = require('mongoose');
const mo = require('method-overide');

const app = exp();

app.set('view engine', 'ejs');
app.use(exp.static('resources'));
app.use(exp.urlencoded({extended: true}));
app.use(mo('_mo'));