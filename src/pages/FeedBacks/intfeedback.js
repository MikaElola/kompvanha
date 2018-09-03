import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import RadarChart from '../../components/Charts/RadarChart.js';
import RadarTextChart from '../../components/Charts/RadarTextChart.js';
import { FilterData } from '../../components/Modules/Support';
import ChartTest from '../../components/Charts/Chart';

class Intfeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataSet: [],
      Data: FilterData(this.props.CallAnswers(),0)
    }
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  Print() {
    window.print();
  }

	render() {
		return ( 
        <div  id="survey" className="well well-sm">
            <Grid container spacing={23} alignItems="center" justify="center">
              <Grid item xs={12} >
              <h2>Yleisten kompetenssien palaute</h2>
              <button onClick={this.Print}>Tulosta</button>     
              </Grid>
                <Grid item xs={12}>
                  {/*Rikkinäinen komponentti  <RadarChart data={this.state.Data.radar}/>*/}
                  <ChartTest></ChartTest> //saada liikutettua radarcharttiin toi filterdata ja parsattua fiksusti//
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <Grid item xs={12}>
                      <RadarTextChart data={this.state.Data.questions}/>
                    </Grid>
                  </div>
                </Grid>
                <button onClick={this.props.CompleteStep}>Jatka</button>
            </Grid>
        </div>
		)
	}
}

export default Intfeedback;