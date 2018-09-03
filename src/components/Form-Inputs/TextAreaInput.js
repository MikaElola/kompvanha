import React from 'react';
import { propTypes, withFormsy } from 'formsy-react';

class TextAreaInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    this.props.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  }

  render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message

    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <br/><br/>
        <textarea rows="8" cols="50"
          onChange={this.changeValue}
          name={this.props.name}
          type={this.props.type || 'text'}
          value={this.props.getValue() || ''}
        />
      </div>
    );
  }
}

export default withFormsy(TextAreaInput);
