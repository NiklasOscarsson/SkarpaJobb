import axios from 'axios'


export default  {
  login(context, logincreds){
    axios
    .post('/localhost:3000/login', logincreds)
    .then(response => (console.log(response)))
  }
}