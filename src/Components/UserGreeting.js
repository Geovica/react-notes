import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }

    render() {


            return (
                this.state.isLogin ? 
                    <div>Welcome User</div> : <div> Welcome Guest</div> 
                
            )

        // let message 
        // if (this.state.isLogin) {
        //     message = <div>Hello User</div>
        // } else {
        //     message = <div>Hello Guest</div>
        // }

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )





        // if (this.state.isLogin) {
        //     return (
        //         <div>Hello User</div>
        //     )}
        // else {
        //     return (
        //         <div>Hellow Guest</div>
        //     )
        // }
    }
}

export default UserGreeting