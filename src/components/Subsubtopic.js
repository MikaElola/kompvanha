import React, { Component } from 'react'
import Questions from './Questions'
import Grid from 'material-ui/Grid'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from 'material-ui/ExpansionPanel';
  import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

class Subsubtopic extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.aihe !== this.props.aihe)
    }

    render() {
        const { aihe, topicText } = this.props
        var arr = [];
        Object.keys(aihe).forEach(function(key){
            arr.push(aihe[key])
        })
        const infotext = () =>{
            if(aihe.text == "Yleiset tiedot"){
                return "Vastaa kysymyksiin painalla vetolaatikkoa."
            }else{
                return "Valitse seuraavissa kompetensseissa YKSI  PARHAITEN  osaamistasi kuvaava taso: 1 = perustaso, 3 = hyvä taso tai 5 = erinomainen taso."
            }
        }

        

      
        return(
            <div>
                <Grid item xs={12}>
                <ExpansionPanel className="expansionPanel">
                    <ExpansionPanelSummary className="expansionSummary" expandIcon={<ExpandMoreIcon />}>
                        <Typography className="progress_icon"><img href="./img/checkmark-64.png" alt=""></img></Typography>
                        <Typography className="accordionHeader">{aihe.text}</Typography>
                    </ExpansionPanelSummary>
                <ExpansionPanelDetails className="noflex nopadding">
                    <h4 className="textmargin">
                        {infotext()}
                    </h4>         
                    <Grid item xs={12}>
                        {arr.map(q => <Questions d={q} topicText={topicText}/>)}
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </div>
        )
    }
}

export default Subsubtopic