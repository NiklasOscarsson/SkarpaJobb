const User = require('./db.js').User

module.exports = (app) => {
  app.post('/login', (req, res)=>{
    User.findOne({userName: req.body.userName, password: req.body.password},(err, data)=>{
      if(data === null){
        return res.send(false)
      }
      else{
        console.log(data);
        return res.send(data)
      }
    })
  })
}