import React, { Component } from 'react';
import './styles/App.css';
import Paper from 'material-ui/Paper';
import HorizontalLabelPositionBelowStepper from './components/stepper.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Survey from './components/Survey.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.StepDone = this.StepDone.bind(this);
    this.AllStepsDone = this.AllStepsDone.bind(this);
    this.state = {
    };
  }

  StepDone(){
    this.HorizontalLabelPositionBelowStepper.handleNext();
  }

  AllStepsDone(){
    this.HorizontalLabelPositionBelowStepper.AllDone();
  }

  render() {    
    return (
      <div id="body">
        <Navbar />
        <Paper id="pap" zdepth={1}> 
         <HorizontalLabelPositionBelowStepper onRef={ref => (this.HorizontalLabelPositionBelowStepper = ref)}/> 
         <Survey sDone={this.StepDone} sComplete = {this.AllStepsDone} /> 
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default App;