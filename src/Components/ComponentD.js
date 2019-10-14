import React, { Component } from 'react'

import ComponentE from './ComponentE'
import UserContext from './userContext'
class ComponentD extends Component {
    render() {
        return (
            <div>
              <h2>Component D content {this.context} </h2>
                <ComponentE />
            </div>
        )
    }
}

ComponentD.contextType = UserContext

export default ComponentD
