import React, {Component} from 'react'

class Welcome extends Component {

    render () {
        const {name} = this.props
        return (
            <div>
                <h1> Hello {name} this a class </h1>
            </div>
        )
    }
}

export default Welcome