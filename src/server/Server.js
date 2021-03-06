const exp = require('express');
const cors = require('cors');

require('dotenv').config()
const app = exp();

app.set('view engine', 'ejs');
app.use(exp.static('resources'));
app.use(exp.urlencoded({extended: true}));
app.use(exp.json())
app.use(cors());

require('./routes.js')(app);


app.listen(3000, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('connected');
  }
})