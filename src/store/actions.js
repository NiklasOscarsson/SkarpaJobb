import axios from 'axios'


export default  {
  loginAction(context, logincreds){
    axios
    .post('http://localhost:3000/login', {userName:logincreds[0], password: logincreds[1]})
    .then(response => (context.commit('login', response.data)))
  },
}