import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import fire from '../fire';
import Formsy from 'formsy-react';
import Subtopic from '../components/Subtopic'

class Survey_g extends Component {

  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this)
    this.state = {
      key:null, 
      option:"0", 
      topics: [], 
      refs: [],
      subtopic:[], 
      canSubmit: false, 
      FormAns: [], 
      checked: false,
      ErrorMsg: ""
      
    
    };
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.ShowErrorMessage = this.ShowErrorMessage.bind(this);

  }


ShowErrorMessage() {
  console.log("fire");
  this.setState({ErrorMsg: "Kaikkiin kenttiin ei ole vastattu!"})
}
  

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
  getRef(){
    return fire.database().ref('topics').child('T1');
  }

  disableButton() {
    this.setState({ canSubmit: false });
    this.setState({ErrorMsg: "Kaikkiin kenttiin ei ole vastattu!"})
  }
  //Enables form submit button
  enableButton() {
    this.setState({ canSubmit: true });
    this.setState({ErrorMsg: ""})
  }
  //Function that handles submitted data.
  submit(model) {
    console.log("wtf");
    console.log(model);
    this.state.FormAns = model;
    this.props.PassAnswers(this.state.FormAns);
    this.props.addA();
    this.props.CompleteStep();
  }
  
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
    document.getElementById("survey").scrollIntoView();
  };

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

	render() {
    // topicissa keyt arrayna, refissä objektit arrayna
    console.log(this.state.topics);
    const { questions } = this.props
    const FormErrorMSG = this.state.ErrorMsg;
    return (
    <div>
      <div id="survey" className="well well-sm"> 
      
        <div className="container">
          <Formsy  onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <Grid container spacing={23} alignItems="center" justify="center">
              <Grid item xs={12} >
                {questions.map( subtopic => <div id={subtopic.key} key={subtopic.key}><Subtopic data={subtopic} /></div>)}
              </Grid>
              <Grid container spacing={23} alignItems="center" justify="center">
              <p className = "Error_1">{FormErrorMSG}</p>
              </Grid>
              <button type="submit" disabled={!this.state.canSubmit}>Jatka</button>
              </Grid>
            </Formsy>
      
        </div>
       </div>
    </div>
		)
	}

}

export default Survey_g;