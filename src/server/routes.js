const cors = require('cors');

module.exports = (app) => {
  app.get('/db/:name', cors(), (req, res)=>{
    // const name = req.params.name;
    res.send({name:"bob", role:"admin", active:true, groups:'', rating:5})
  })
  
}