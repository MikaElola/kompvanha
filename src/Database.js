import React, { Component } from 'react';
import fire from './fire';

class Database extends Component {
    constructor(props) {
        super(props);
        this.state = { topic: null };
    }

    componentWillMount(){
        let DatabaseRef = fire.database().ref('topics');
        DatabaseRef.on('child_added', snapshot => {
            this.setState({topic: snapshot.val()})
        })
        var subtopics = Object.getOwnPropertyNames(this.state.topic)

      }
}

export default Database;