module.exports = (app) => {
  app.get('/db/:name', (req, res)=>{
    const name = req.params.name;
    res.send(name)
  })
}