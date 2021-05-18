import axios from 'axios'


export default  {
  login(context, logincreds){
    console.log(logincreds);
    axios
    .post('http://localhost:3000/login', logincreds)
    .then(response => (context.commit('login', response.data)))
  },
}