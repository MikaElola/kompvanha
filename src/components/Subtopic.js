import React, { Component } from 'react'
import Subsubtopic from './Subsubtopic'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid';

class Subtopic extends Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        const { data } = this.props
        var arr = [];
        Object.keys(data).forEach(function(key){
            if (typeof data[key] === 'object') {
                arr.push(data[key])
            }
        })
        return(
            <div>
                <Grid item xs={12} >{arr.map(subsub => <Subsubtopic aihe={subsub} topicText={data.text} />)}</Grid>
            </div>
        )
    }
} 

Subtopic.propTypes = {
    data: PropTypes.object,
    ref: PropTypes.string
}

export default Subtopic;