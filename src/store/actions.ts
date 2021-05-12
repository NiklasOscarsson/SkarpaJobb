import axios from 'axios'


export default  {
  login(context:object, logincreds:String){
    axios
    .post('/localhost:3000/login', logincreds)
    .then(response => ())
  }
}