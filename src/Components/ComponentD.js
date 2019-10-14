import React, { Component } from 'react'

import ComponentE from './ComponentE'
import UserContext from './userContext'
class ComponentD extends Component {

    //only works with class components
    static contextType= UserContext
    render() {
        return (
            <div>
              <h2>Component D contains {this.context} </h2>
                <ComponentE />
            </div>
        )
    }
}

// ComponentD.contextType = UserContext

export default ComponentD
