// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';
import Grid from 'material-ui/Grid';
class SurveyRadio extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.Options;
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
    this.setState({id: this.state.id += this.props.Options.length})
    //console.log(this.props.name);
    //console.log(this.state.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.name !== this.props.name);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div className="questionbase-div">
      <p>{errorMessage}</p><br/>
      {/*<label htmlFor={this.props.name + this.props.id + 1} className="radio">*/}
      { this.props.zero != null
      ? <label for={this.props.name + this.props.id + 0} className="radio">
        <input id={this.props.name + this.props.id + 0}
         onChange={this.changeValue} name={this.props.name} type="radio" value={0} />
        <span className="radio-label"></span>
        <span className="numbering">0.</span>
        <span className="noselect">{this.props.zero}</span>
      </label>
      : null
      }

      <label for={this.props.name + this.props.id + 1} className="radio">
        <input id={this.props.name + this.props.id + 1}
         onChange={this.changeValue} name={this.props.name} type="radio" value={1} />
        <span className="radio-label"></span>
        <span className="numbering">1.</span>
        <span className="noselect">{this.props.Options[0]}</span>
      </label>
      <label for={this.props.name + this.props.id + 2} className="radio">
        <input id={this.props.name + this.props.id + 2}
         onChange={this.changeValue} name={this.props.name} type="radio" value={3} />
        <span className="radio-label"></span>
        <span className="numbering">3.</span>
        <span className="noselect">{this.props.Options[1]}</span>
      </label>
      <label htmlFor={this.props.name + this.props.id + 3} className="radio">
        <input id={this.props.name + this.props.id + 3}
         onChange={this.changeValue} name={this.props.name} type="radio" value={5} />
        <span className="radio-label"></span>
        <span className="numbering">5.</span>
        <span className="noselect">{this.props.Options[2]}</span>
      </label>
      </div>

    );
  }
}

export default withFormsy(SurveyRadio);