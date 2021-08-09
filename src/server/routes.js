const db = require('./db.js')

module.exports = (app) => {
  app.post('/login', (req, res)=>{
    console.log(req.body);
    db.query(
      `SELECT first_name, last_name, img, bio, roles.user_role
      FROM users
      JOIN role_relation ON users.id = role_relation.users_id
      JOIN roles ON role_relation.role_id = roles.id
      WHERE email = $1 AND password = $2
      
      `, [req.body.userName, req.body.password]

    )
    .then((r)=>{
      console.log(r.rows);
      res.json(r.rows)
    })
  })
}