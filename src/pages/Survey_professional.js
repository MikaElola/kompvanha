import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import '../styles/App.css';
import Formsy from 'formsy-react';
import Subtopic from '../components/Subtopic'


class Survey_p extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { canSubmit: false,
    checked: [], FormAns: [], Professions: [], topics: [], refs: [], ErrorMsg: "" };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  //Disables submit button
  disableButton() {
    this.setState({ canSubmit: false });
    this.setState({ErrorMsg: "Kaikkiin kenttiin ei ole vastattu!"})
  }
  //Enables form submit button
  enableButton() {
    this.setState({ canSubmit: true });
    this.setState({ErrorMsg: ""})
  }

  CatchProfessions = (data) => {
    this.state.Professions = data;
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
    document.getElementById("survey").scrollIntoView();
  };

  //Function that handles submitted data.
  submit(model) {
    this.state.FormAns = model;
    this.props.PassAnswers(this.state.FormAns);
    this.props.addA();
    this.props.CompleteStep();
    console.log(this.state.FormAns);
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
        // topicissa keyt arrayna, refissä objektit arrayna
        const { questions } = this.props
        const { professionArray } = this.props
        const { expanded } = this.state;
        const FormErrorMSG = this.state.ErrorMsg;
        var checkedTopics = []
        for (let check in professionArray){
          const c = questions.filter(t => t.text === professionArray[check])
          checkedTopics.push(c[0])
        }

        return (
        <div>
          <div id="survey" className="well well-sm"> 
            <div className="container">
              <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <Grid container spacing={23} alignItems="center" justify="center">
                  <Grid item xs={12} >
                    {checkedTopics.map( subtopic => <div id={subtopic.key} key={subtopic.key}><Subtopic data={subtopic} /></div>)}
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

export default Survey_p;
