import React, { Component } from 'react'
import Child from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
        super(props)
        this.state = {
        parentName: 'Parent'
        }
     }

    
    greetParent = (childName) =>  {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <Child  greet={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
