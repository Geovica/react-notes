import React, {Component} from 'react';


class EventBind extends Component {
    constructor(props) {
    super(props)
    this.state ={
        message: 'Bind an Event Handler'
    }
    // this.bindEvent= this.bindEvent.bind(this)
    // if you will not use arrow functions
  
    }

        // bindEvent() {
        //     this.setState({
        //         message: ' You binded an Event!'
        //     })
        // }


        bindEvent = () => {
            this.setState({
                message:' You bind an Event'
            })
        }

        //arrow function binding
    render() {
        return(
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick={this.bindEvent.bind(this)}>Click Here to Bind</button> */}
                {/* <button onClick={() => this.bindEvent()}>Click Here to Bind</button> */}
            
                <button onClick={this.bindEvent}>Click Here to Bind</button>
            </div>
        )
    }
}

export default EventBind