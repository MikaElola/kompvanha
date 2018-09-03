import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fire from '../fire';
import Survey_p from '../pages/Survey_professional';
import Survey_g from '../pages/Survey_general';
import Intfeedback from '../pages/FeedBacks/intfeedback.js';
import Professionfeedback from '../pages/FeedBacks/professionfeedback.js';
import FrontPage from '../pages/Survey_front.js';
import Professioncheck from '../pages/survey_professioncheck.js';
import { DatabaseRef } from '../fire'
import SurveyReady from '../pages/Survey_ready';
import {ReturnDate} from '../components/Modules/Support'

class Survey extends Component {

  constructor(props) {
    super(props);
    this.CompleteStep = this.CompleteStep.bind(this);
    this.CompleteStepTesting = this.CompleteStepTesting.bind(this); //TESTING: Skip-button function
    this.addAnswers = this.addAnswers.bind(this);
    this.addProfession = this.addProfession.bind(this)
    this.state = {
      professionArray: [],
      topics: [],
      refs: [],
      SurveyAnswers: [],
      SurveyState: 0,
      Professions: [],
      states: {
        FRONT: 0,
        GENERAL: 1,
        INTFEEDBACK: 2,
        PROFESSIONCHECK: 3,
        PROFESSIONAL: 4,
        PROFESSIONFEEDBACK: 5,
        DONE: 6,

      }
    };
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  fetchQuestions() {
    let db = DatabaseRef
    var topics = []
    db.on('child_added', snapshot => {
      topics.push(snapshot.val())
      this.setState({ refs: topics })
    })
  }

  componentWillMount() {
    this.fetchQuestions()
    //setTimeout (()=> {this.setState({topics: Object.getOwnPropertyNames(json), refs: Topic})}, 1500)
  }

  PassAnswers = (data) => {
    //console.log("CALLBACK");
    //console.log(data);
    this.state.SurveyAnswers.push(data);

    console.log("result");
    console.log(this.state.SurveyAnswers);
  }

  addProfession(data) {
    console.log(data)
    this.setState({ professionArray: data })
    console.log(this.state.professionArray)
  }

  CallAnswers = () => {
    return this.state.SurveyAnswers;
  }
  //This functions is called in Survey_General.
  //Survey_general passes a variable to the parameter.
  //TODO: Pass survey answers into parameter.
  CompleteStep() {
    if ((this.state.SurveyState + 1) == this.state.states.DONE) {
      this.props.sComplete();
      this.setState({
        SurveyState: this.state.SurveyState + 1,
      })
      this.sendAnswers()

    }
    if (this.state.SurveyState == this.state.states.DONE) {
      this.sendAnswers()
      this.props.sComplete();
    }
    else {
      this.props.sDone();

      this.setState({
        SurveyState: this.state.SurveyState + 1,
      })
      this.sendAnswers()
    }

  }

  //TESTING: Step completion without sending the answers
  CompleteStepTesting() {
    this.props.sDone();
    this.setState({
      SurveyState: this.state.SurveyState + 1,
    })
  }
  //Sends answers into firebase database
  sendAnswers() {

    let object = {date:"",Answers:[]};
    object.Answers = this.state.SurveyAnswers;
    object.date = ReturnDate();

    if (this.state.key == null) {
      var key = fire.database().ref().child('answers').push(object);
      this.setState({ key: key.key })
    } else {
      var key = fire.database().ref('answers').child(this.state.key).set(object);
      


    }
  }
  //Each Survey component calls this method to add their answers into state.
  addAnswers(answerlist) {

  }

  PassProfessions = (data) => {
    this.state.Professions = data;
  }

  render() {
    var topic = this.state.topics
    var ref = this.state.refs
    var general = ref.filter(topic => topic.category === 'yleinen')
    var professional = ref.filter(topic => topic.category === 'ammatti')
    var language = ref.filter(topic => topic.category === 'kielitaito')
    var subtopics = []
    Object.keys(professional).forEach(function (key) {
      if (typeof professional[key] === 'object') {
        subtopics.push(professional[key])
      }
    })
    switch (this.state.SurveyState) {
      case this.state.states.FRONT: {
        return (<FrontPage CompleteStep={this.CompleteStep} />)
      }
      case this.state.states.GENERAL: {
        return (<Survey_g questions={general} CompleteStep={this.CompleteStep} addA={this.addAnswers} PassAnswers={this.PassAnswers} CompleteStepTesting={this.CompleteStepTesting} />)
      }
      case this.state.states.INTFEEDBACK: {
        return (<Intfeedback CompleteStep={this.CompleteStep} CallAnswers={this.CallAnswers} />)
      }
      case this.state.states.PROFESSIONCHECK: {
        return (<Professioncheck questions={subtopics} addProfession={this.addProfession} CompleteStep={this.CompleteStep} addA={this.addAnswers} PassProfessions={this.PassProfessions} PassAnswers={this.PassAnswers} CompleteStepTesting={this.CompleteStepTesting} />)
      }
      case this.state.states.PROFESSIONAL: {
        return (<Survey_p questions={professional} professionArray={this.state.professionArray} CompleteStep={this.CompleteStep} CompleteStepTesting={this.CompleteStepTesting} addA={this.addAnswers} PassAnswers={this.PassAnswers} onRef={ref => (this.Survey_p = ref)} />);
      }
      case this.state.states.PROFESSIONFEEDBACK: {
        console.log(this.state.SurveyAnswers)
        return (<Professionfeedback CompleteStep={this.CompleteStep} CallAnswers={this.CallAnswers} />)
      }
      case this.state.states.DONE: {
        return (<SurveyReady CompleteStep={this.CompleteStep} addA={this.addAnswers} PassAnswers={this.PassAnswers} CompleteStepTesting={this.CompleteStepTesting} />)
      }
    }
  }
}

export default Survey;