import React, { Component } from 'react'

class Option extends Component {

    render() {
        const { val } = this.props
        return(
            <div>
                {val.text ? <li>{val.text}</li> : ''}
            </div>
        )
    }
}

export default Option