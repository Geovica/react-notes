import React, {Component} from  'react'

class ExtendBind extends Component {

    constructor(props) {
     super(props)
     this.state ={
         message: "Hello"
     }
    }

    welcome () {
        this.setState({
            message:"Welcome"
        });
    }
    render() {
        return (
            <div>
                <h3>{this.state.message} This is an Event Binding</h3>
                <button onClick={() => this.welcome()}>Ok</button>
            </div>
        )
    }
}

export default ExtendBind