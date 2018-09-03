import React, { Component } from 'react'
import Options from './Options'

class Question extends Component {

    render() {
        const { ques } = this.props
        var arr = [];
        Object.keys(ques).forEach(function(key){
            arr.push(ques[key])
        })
        return(
            <div>
                <p>{ques.text}</p>
                {/*arr.map(option => <Options o={option} />)*/}
            </div>
        )
    }
}

export default Question