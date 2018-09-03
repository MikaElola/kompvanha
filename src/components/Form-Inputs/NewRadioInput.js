import React from 'react';
import { withFormsy } from 'formsy-react';
import Grid from 'material-ui/Grid';

class MyRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.Options;
        this.state = {  };
      }

    componentDidMount() {
        const value = this.props.value;
        this.props.setValue(value);
        this.setState({ value });
    }

    changeValue = (value) => {
        this.props.setValue(value);
        this.setState({ value });
    }


    

    render() {
        const errorMessage = this.props.getErrorMessage();

        const { name, title, items, options } = this.props;
        return (
            <div className="questionbase-div">
            <p className='Error_1'>{errorMessage}</p>
                {items.map((item, i) => (
                        <label key={i} htmlFor={name + i} className="radio">
                        <input
                            type="radio"
                            name={name}
                            id={name + i}
                            onChange={this.changeValue.bind(this, item)}
                            checked = {this.state.value === item}
                            value = {item[i]}
                            
                        />
                            <span className="radio-label"></span>
                            <span className="numbering">{items[i]}.</span>
                            <span className="noselect">{options[i]}</span>
                        </label>
                ))
                }
                
            </div>
        );
    }
}

export default withFormsy(MyRadioGroup);