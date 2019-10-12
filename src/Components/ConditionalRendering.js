import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    
    render() {

        //  if (this.state.isLoggedIn) {
        //     return <div> Welcome User </div>    
        //  }else {
        //     return <div> Welcome  Guest </div>    
        //  }

        return ( 

            //tenery condition
             
                 this.state.isLoggedIn ? <h4>Welcome User</h4> : <h4>Welcome Guest</h4> 
    
        )

       
    }
}

export default ConditionalRendering
