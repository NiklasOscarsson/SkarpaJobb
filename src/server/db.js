const mon = require("mongoose");

mon.connect('mongodb://localhost:27017/skarpa', {useNewUrlParser:true, useUnifiedTopology:true});

const user = new mon.Schema({
  userName: String,
  password: String,
  role: String,
  rating: Number,
  groups: Array,
  active: Boolean
});

const User = mon.model('users', user);

// User.create({
//   userName: 'Admin',
//   password: 'pass',
//   role: 'Administrator',
//   rating: 0,
//   groups: [],
//   active: true
// })

module.exports={
  User
}