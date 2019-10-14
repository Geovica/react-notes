import React, { Component } from 'react'
import { UserConsumer } from './userContext'


class ComponentE extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {

                    name => {
                    return <h1>Hello Geo{name}</h1>
                    }
                }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentE
