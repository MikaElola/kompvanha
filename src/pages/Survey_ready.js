import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Formsy from 'formsy-react';
import TextAreaInput, { withFormsy } from '../components/Form-Inputs/TextAreaInput'
import Grid from 'material-ui/Grid';
class SurveyReady extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = {
            FormAns: [],
            WasFormSubmitted: false,
            canSubmit: false 
        }
    }

    submit(model) {
        this.state.FormAns = model;
        this.props.PassAnswers(this.state.FormAns);
        this.props.addA();
        this.props.CompleteStep();
        this.setState({
            WasFormSubmitted: true
        })
      }

      disableButton() {
        this.setState({ canSubmit: false });
      }
      //Enables form submit button
      enableButton() {
        this.setState({ canSubmit: true });
      }

    render() {

        const palaute = () => {
            if(this.state.WasFormSubmitted == false){
                return (

                    <div className="frontpage_txt">
                        <p>
                            Onnittelut kartoituksen tekemisestä! Kompetenssikartoituksen avulla olet arvioinut omia vahvuuksiasi ja kehittymiskohteita tämän päivän työelämässä.<br/><br/>
                            <b>Yleisiä kompetensseja</b> kuten itsensä johtamista, vuorovaikutus- ja ongelmanratkaisutaitoja voit kehittää työssä, mutta ammattikorkeakoulut, yliopistot ja kaupalliset toimijat tarjoavat monimuotoista opetusta näidenkin taitojen kehittämiseen.<br/><br/>
                            <b>Urahallintaan ja uuden uran suunnitteluun</b> löytyy työkaluja ja valmennusta netistä esimerkiksi korkeakoulusta valmistuville, jotka soveltuvat hyvin myös työssäkäyvien urapohdintojen avuksi. Työviranomaisten tarjonnan lisäksi modernia työnhakua voi kehittää eri liittojen ja yhdistysten sekä korkeakoulujen uravalmennuksen tukemana.<br/><br/>
                            <b>Asiantuntijuuden kehittämiseksi</b> Ylemmät AMK-tutkinnot keskittyvät viimeisimpiin osaamisvaatimuksiin ja yliopistojen tutkinnot pätevyystason nostamiseen. Kaikissa korkeakouluissa on tarjolla myös avoimen korkeakoulun kursseja, usein netissä.<br/><br/>
                            Omaa asiantuntijuutta voi kehittää myös <b>työssä oppimalla</b> esimerkiksi hakeutumalla vaativiin projekteihin, pyrkimällä uusiin tehtäviin ja osallistumalla työnantajan tai vaikkapa yhteistyökumppaneiden tilaisuuksiin. Työttömyyden sattuessa kannattaa selvittää voimassa olevat aikuiskoulutuksen tukimuodot.<br/><br/>
                            Kompetenssikartoituksen palautteen avulla pystyt myös markkinoimaan omaa osaamistasi ja kertomaan muille, millaisia työelämätaitoja sinulla on. Verkostoituminen muiden asiantuntijoiden kanssa auttaa kehittymään uralla ja viihtymään työssäsi entistä paremmin.<br/><br/>
						</p>
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <TextAreaInput
                    title = "Halutessasi voit lähettää viestiä tämän työkalun kehittämiseksi. Miten työkalu toimi ja miten sisältö vastasi odotuksiasi? Muita ideoita?"
                    name = "Palaute"
                    />
                    <br/><br/>
                    <button type="submit" disabled={!this.state.canSubmit}>Lähetä palaute</button>
                    </Formsy>
                    </div>
                )
            }
            if(this.state.WasFormSubmitted) {
                return(<div className="frontpage_txt"><p>Kiitoksia palautteestasi!</p><br/><br/> Kompetenssityökalu on toteutettu osana Taidot Työhön –hanketta, jota on rahoittanut Strategisen tutkimuksen neuvoston vuosina 2016-2019.<br/><br/></div>)
            }  
        }

        return (
            <div>
                <Grid container spacing={23} alignItems="center" justify="center">
                    <Grid item xs={12} >
                        <h2>OSAAMISEN KEHITTÄMINEN</h2>
                    </Grid>
                            {palaute()}
                </Grid>
            </div>
        )
    }
}

export default SurveyReady;