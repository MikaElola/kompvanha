// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';
import Grid from 'material-ui/Grid';
class SelectInput extends React.Component {
    changeValue = (event) => {
        this.props.setValue(event.currentTarget.value);
      }
    
      render() {
        const errorMessage = this.props.getErrorMessage();
    
        const options = this.props.options.map((option, i) => (
          <option key={option+i} value={option}>
            {option}
          </option>
        ));
    
        return (
          <div className="questionbase-div">
          <p className='Error_1'>{errorMessage}</p>
            <select name={this.props.name} onChange={this.changeValue} value={this.props.getValue()}>
             <option value="" disabled selected>Valitse painamalla tästä..</option>
              {options}
            </select>
          </div>
        );
      }
    }

export default withFormsy(SelectInput);