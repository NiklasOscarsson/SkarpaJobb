const mon = require("mongoose");

mon.connect('mongodb://localhost:27017/skarpa', {useNewUrlParser:true, useUnifiedTopology:true});

const test = new mon.Schema({
  Name: String,
});

const test2 = mon.model('testing', test);

module.exports={
  test2
}