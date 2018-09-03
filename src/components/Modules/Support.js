/**
 * This file acts as support class that contains functions for handling survey data 
 * and running some mathematical calculations.
 */


/**
 * Description: This method handles json passed by the survey and returns array that is readable by d3.js library
 * Returns: ResultPerProfession arraylist.
 */
export const FilterBar = (data, surveyX) => {
    var listofkeys = [];
    var ResultPerProfession = [];
    console.log("koko data")
    console.log(data);
    for (var key in data[surveyX]) {
        listofkeys.push(key);
        console.log("avain data[1]: " + key); //HR,Taloushallinto,Myyntiosaaminen,digiosaaminen
        console.log("arvo data[1]: " + data[surveyX][key]);
        var topic = { "Topic": "", "Answers": [] }
        topic.Topic = key;

        for (var i = 0; i < listofkeys.length; i++) {
            console.log("listofkeys[i]:")
            console.log(listofkeys[i]);
            var data2 = data[surveyX][listofkeys[i]];
            var sum = 0;
            var count = 0;

            topic.Answers = [];
            for (var key2 in data2) {
                var answer = { "label": "", "value": 0 }
                console.log("key2");
                console.log(key2); //Strateginen johtaminen (HR {Strateginenjohtaminen:}) avain
                answer.label = key2;
                if (data2.hasOwnProperty(key2)) {
                    console.log("data2[key2]");
                    console.log(data2[key2]); //Strateginen johtaminen (HR {Strateginenjohtaminen: 1}) arvo
                    answer.value = data2[key2];
                }
                topic.Answers.push(answer);
                console.log(topic);
            }

        }
        ResultPerProfession.push(topic);
    }
    console.log("ResultPerProfession");
    console.log(ResultPerProfession);
    return ResultPerProfession;
}

export const FilterData = (data) => {
    console.log("check 25");
    console.log(data[0]);
    delete data[0].yleinen.Yleisettiedot;
    const returndata = {};
    var listofkeys = [];
    var array1 = [];
    var array2 = [];
    var obj = {};
    var listofkeys2 = [];
    var key;
    var i;
    var j;
    var key2;
    var storevalues = [];
    var counter
    var summary
    var names
    var tempObj

    

    for (key in data[0]) {

       
        counter = 0
        summary = 0
        listofkeys.push(key); // tänne tulee nyt ala-aiheisiin jaotellut kohdat ja niiden kysymykset
        //console.log(key);  // aiheen otsikko
        //console.log(data[0][key]); // objekti, jossa aiheeseen kuuluvien kohtien nimet ja arvot
        for (let value in data[0][key]) {
            // tässä loopataan objektin läpi
            if (parseInt(data[0][key][value]) === 5) { // korkeat ja matalat arvot laitetaan omiin arrayhin
                tempObj = { "question": value, "value": data[0][key][value] }
                array1.push(tempObj);
            } else if (parseInt(data[0][key][value]) === 1) {
                tempObj = { "question": value, "value": data[0][key][value] }
                array2.push(tempObj)
            }
            counter++ // lasketaan aihealueeseen kuuluvien kysymysten määrä keskiarvoa varten
            summary += parseInt(data[0][key][value]) // tässä pitäisi olla kysymyksen vastauksen arvo
            // HUOM YLHÄÄLLE PARSEINT
            console.log('summary')
            console.log(summary)
            console.log('counter')
            console.log(counter)

        }
        storevalues.push(Math.round((summary / counter) * 100) / 100);
    }
    //cut extra rows out.
    //storevalues = storevalues.slice(3,12);
    console.log(storevalues)

    const datahelper = {
        variables: [
            { key: 'itsensajohtaminen', label: 'Itsensä johtaminen' },
            { key: 'ongelmanratkaisu', label: 'Ongelmanratkaisu ja oppiminen' },
            { key: 'digiosaaminen', label: 'Digiosaaminen' },
            { key: 'tietoturva', label: 'Tietoturva ja tekijänoikeudet' },
            { key: 'arvot', label: 'Arvot ja urasuunnittelu' },
            { key: 'tyonhaku', label: 'Työnhaku ja verkostoituminen' },
            { key: 'neuvottelu', label: 'Neuvottelu- ja esiintymistaidot' },
            { key: 'tunnealy', label: 'Tiimityö ja tunneäly' },
        ],
        sets: [
            {
                key: 'me',
                label: 'My Scores',
                values: {
                    itsensajohtaminen: storevalues[0],
                    ongelmanratkaisu: storevalues[1],
                    digiosaaminen: storevalues[2],
                    tietoturva: storevalues[3],
                    arvot: storevalues[4],
                    tyonhaku: storevalues[5],
                    neuvottelu: storevalues[6],
                    tunnealy: storevalues[7],
                }
            },

        ],
    }
    obj.high = array1;
    obj.low = array2;
    returndata.radar = datahelper;
    returndata.questions = obj;

    console.log(returndata);

    return returndata;
}

export const CheckRadioInput = (value) => {
    if (value == 5)
        return true;
    if (value == 3)
        return true;
    if (value == 1)
        return true;
    else
        return false;
}

export const ReturnDate = () => {
    var date = new Date();
    return date.toLocaleDateString();
}