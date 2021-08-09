export default  {
    login(state, payload){
        state.user = payload[0]
        state.loggedIn = true 
    },
}