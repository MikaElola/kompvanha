import { withFormsy } from 'formsy-react';
import React from 'react';

function contains(container, item, cmp) {
    for (const it of container) {
      if (cmp(it, item)) {
        return true;
      }
    }
    return false;
  }

class ProfessionInput extends React.Component {
  
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.Options;
        this.state = { value: [], cmp: (a, b) => a === b  };
      }

    componentDidMount() {
      const value = this.props.value || [];
      this.props.setValue(value);
      this.setState({ value: value, cmp: this.props.cmp || this.state.cmp });
    }
  
    changeValue = (value, event) => {
      const checked = event.currentTarget.checked;
  
      let newValue = [];
      if (checked) {
        newValue = this.state.value.concat(value);
      } else {
        newValue = this.state.value.filter(it => !this.state.cmp(it, value));
      }
  
      this.props.setValue(newValue);
      this.setState({ value: newValue });
    }
  
    render() {
      const className = 'form-group' + (this.props.className || ' ') +
        (this.props.showRequired() ? 'required' : this.props.showError() ? 'error' : '');
      const errorMessage = this.props.getErrorMessage();
  
      const { name, title, items } = this.props;
      return (
        <div className="profession-checkbox">
          {this.props.Options.map((item, i) => (
            <div key={i}>
              <input
                type="checkbox"
                name={this.props.name}
                id={item}
                value={item}
                onChange={this.changeValue.bind(this, item)}
                checked={contains(this.state.value, item, this.state.cmp)}
              />
              <label for={item} >{item}</label>
            </div>
          ))
          }
          <span className='validation-error'>{errorMessage}</span>
        </div>
      );
    }
  }
  
  export default withFormsy(ProfessionInput);