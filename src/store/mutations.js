export default  {
    login(state, payload){
        
        if(payload === false){
            return false
        }
        else{
            console.log('success');
            state.user = payload
            state.loggedIn = true
            return true
        }
        
    },
}