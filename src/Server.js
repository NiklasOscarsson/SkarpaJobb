const exp = require('express');
const cors = require('cors');


const app = exp();



app.set('view engine', 'ejs');
app.use(exp.static('resources'));
app.use(exp.urlencoded({extended: true}));
app.use(cors());

// const test = require('./server/db.js')
// require('./server/routes.js')(app);

app.post('/login', (req, res)=>{
  res.send({name:"bob", role:"admin", active:true, groups:'', rating:5})
})

app.listen(3000, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('connected');
  }
})