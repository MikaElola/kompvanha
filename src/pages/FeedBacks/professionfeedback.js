import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import VerticalBarChart from '../../components/Charts/VerticalBarChart.js';
import {FilterBar} from '../../components/Modules/Support'

class Professionfeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : FilterBar(this.props.CallAnswers(),1),
    }
  }

  Print() {
    window.print();
  }

  componentWillMount(){
    console.log("Mounting:");
    console.log(this.state.data);
    this.state.data.map((obj) => {
      console.log("Obj "+ obj.Profession)
    })
    
  }
//{this.state.data.map((obj) => {(<VerticalBarChart/>)})}
	render() {
    console.log(this.state.data)
		return ( <div>
          <Grid container spacing={23} alignItems="center" justify="center">
            <Grid item xs={12} >
            <h2>Asiantuntijan osaamisen palaute</h2>
            {/*BarChart component that is used to generate charts for each profession*/} 
            <button onClick={this.Print}>Tulosta</button>         
            </Grid>
            <Grid item xs={12} >
              {this.state.data.map((obj,index) => (<div className = "barchart" ><h1>{obj.Topic}</h1><VerticalBarChart key = {index} data = {obj.Answers}/></div>))}
            </Grid>
            <Grid>
              <button onClick={this.props.CompleteStep}>Jatka</button>
            </Grid>
          </Grid>
        </div>
		)
	}
}

export default Professionfeedback;