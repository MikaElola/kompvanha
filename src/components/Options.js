import React, { Component } from 'react'
import Option from './Option'

class Options extends Component {

    render() {
        const { o } = this.props
        var arr = []
        Object.keys(o).forEach(function(key){
            arr.push(o[key])
        })
        return(
            <div>
                <ul>
                {arr.map(op => <Option val={op}/>)}
                </ul>
            </div>
        )
    }
}

export default Options