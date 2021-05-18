const exp = require('express');


const app = exp();

app.set('view engine', 'ejs');
app.use(exp.static('resources'));
app.use(exp.urlencoded({extended: true}));


const test = require('./server/db.js')
require('./server/routes.js')(app);

app.listen(3000, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('connected');
  }
})