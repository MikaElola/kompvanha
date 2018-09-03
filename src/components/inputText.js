import { withFormsy } from 'formsy-react';
import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Grid from 'material-ui/Grid';

class SurveyText extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.state = { id: 1 };
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  componentWillMount() {
    //Randomising identification numbers to each 
    console.log(this.props.name);
    console.log(this.state.id);
  }
  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div className="questionbase-div">
        <label className="text-label" for={this.props.name + this.props.id + 1}>
            <span>{this.props.name}</span>
          <input className="text-input" id={this.props.name + this.props.id + 1}
            onChange={this.changeValue} name="{this.props.name}" type="text"/>
        </label>
      </div>

    );
  }
}

export default withFormsy(SurveyText);