import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import '../styles/App.css';
import fire from '../fire';
import Formsy from 'formsy-react';
import ProfessionInput from '../components/Form-Inputs/ProfessionInput.js';


class Profession_c extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { canSubmit: false,
    FormAns: [] };

    this.skip = this.skip.bind(this); //TESTING: Skip-button functionality
  }

  componentWillMount() {
    let DatabaseRef = fire.database().ref('topic').child('general');
    DatabaseRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ topic: [message].concat(this.state.topic) });
    })
  }
  //Disables submit button
  disableButton() {
    this.setState({ canSubmit: false });
  }
  //Enables form submit button
  enableButton() {
    this.setState({ canSubmit: true });
  }

  //Function that handles submitted data.
  submit(model) {
    this.state.FormAns = model;
    this.props.addProfession(this.state.FormAns.Ammatit);
    this.props.PassProfessions(this.state.FormAns);
    this.props.addA();
    this.props.CompleteStep();
    console.log(this.state.FormAns);
  }

  
  
  //TESTING: Skip answering
  skip() {
    this.props.CompleteStepTesting();
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    const { questions } = this.props
    var texts = questions.map(topic => topic.text)
    
    return (
      <div id="survey" className="well well-sm">
        <div className="container"><br />
          <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <Grid container spacing={23} alignItems="center" justify="center"> 
            <Grid item xs={12} >
                <h2>Asiantuntijan osaaminen</h2>
            </Grid>
              <div className="frontpage_txt">
                    <p>
                      Asiantuntijan osaaminen on kuvattu neljän tyypillisen liiketoiminnan suuntautumisen suhteen.<br/><br/>
                      <br />Kyselyyn on poimittu niitä osaamisia, 
                      joita ammattilaiselta odotetaan globaalissa ja ditalisoituvassa työelämässä asiantuntijan roolissa.<br/><br/>
                      Valitse yksi tai useampi seuraavista alueista:
                    </p>
              </div>
            </Grid>
            <Grid container spacing={23} alignItems="center" justify="center">
              <ProfessionInput name="Ammatit" required Options={texts} />
            </Grid>
            <button type="submit" disabled={!this.state.canSubmit}>Jatka</button>
          </Formsy>
        </div>
        <br />
      </div>
    )
  }
}

export default Profession_c;
