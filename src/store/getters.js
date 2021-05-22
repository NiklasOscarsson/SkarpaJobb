export default  {
  loggedInState(state){
    if(state.loggedIn){
      return true
    }else{
      return false
    }
  },
  getUser(state){
    return state.user
  },
}