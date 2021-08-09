export default  {
  loggedInState(state){
    if(state.loggedIn){
      return true
    }else{
      return false
    }
  },
  getUser(state){
    console.log(state.user);
    return state.user
  },
}