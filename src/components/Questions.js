import React, { Component } from 'react'
import Question from './Question'
import SurveyRadio from '../components/Form-Inputs/RadioInput.js';
import MyRadioGroup from '../components/Form-Inputs/NewRadioInput';
import SelectInput from '../components/Form-Inputs/SelectInput'
import QuestionSection from './QuestionSection';
import { CheckRadioInput } from '../components/Modules/Support';

class Questions extends Component {

    render() {
        const { d, topicText } = this.props
        var arr = []
        Object.keys(d).forEach(function (key) {
            if (typeof d[key] === 'object') {
                arr.push(d[key])
            }
        })
        let questions;
        var name;
        if (topicText === 'Yleinen') {
            name = d.category + '.' + d.text // tähän tilalle d.category topicTextin tilalle
        } else {
            name = topicText + '.' + d.text
        }
        //console.log(name)
        if (typeof d === "string") {
            return null;
        }

        if (d.type == "select" && d.category == "Yleisettiedot") {
           name = topicText + '.'+d.category + '.' + d.text;
            console.log(name);
            questions = (
                <div>
                    <QuestionSection section={d.text}>
                        {/*nameen tarvitaan parent noden nimi eli tyyliin HR jotta formsy osaa muodostaa rakenteen*/}
                        <SelectInput name={name} options={arr[0]} required

                            validations={{
                                myCustomIsFiveValidation: function (values, value) {
                                    values; // Other current values in form {foo: 'bar', 'number': 5}
                                    value; // 5
                                    return value != undefined ? true : 'Kenttään ei ole vastattu!'; // You can return an error
                                }
                            }}
                        />
                    </QuestionSection>
                </div>
            )
        }
        else {
            console.log(name);
            questions = (
                <div>
                    <QuestionSection section={d.text}>
                        {/*nameen tarvitaan parent noden nimi eli tyyliin HR jotta formsy osaa muodostaa rakenteen*/}
                        <MyRadioGroup name={name} required items={["1", "3", "5"]}
                            validations={{
                                myCustomIsFiveValidation: function (values, value) {
                                    values; // Other current values in form {foo: 'bar', 'number': 5}
                                    value; // 5
                                    return value != undefined && CheckRadioInput(value) ? true : 'Kenttään ei ole vastattu!'; // You can return an error
                                }
                            }}
                            options={arr.map(question => <Question ques={question} />)} />
                    </QuestionSection>
                </div>
            )
        }

        return (
            <div>
                {questions}
            </div>
        )
    }
}

export default Questions