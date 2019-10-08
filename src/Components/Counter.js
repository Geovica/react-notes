import React, {Component} from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state ={
            count: 0
        }
    }

    increament () {
        this.setState ({
            count: this.state.count +1
        });
    }
    decreament() {
        this.setState ({
            count: this.state.count -1
        })
        console.log(this.state.count)
    }

    render() {
        return(
            <div>
                <h1>
                    {this.state.count}
                </h1>

                <button onClick={() => this.increament()}> Increment</button>

                <button onClick={() => this.decreament()}>Decreament</button>
            </div>
        )
    }
}

export default Counter