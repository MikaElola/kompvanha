import React, { Component } from 'react';

class QuestionSection extends Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
            <div className="questionSection">
                <div className="contextTitle">
                    <h3>{this.props.section}</h3>
                </div>
                <div className="questionInput">
                        {this.props.children}
                </div>
            </div>
		)
	}
}

export default QuestionSection;