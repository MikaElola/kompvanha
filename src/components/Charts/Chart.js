import React, { Component } from 'react';
import Chart from 'chart.js';


class ChartTest extends Component {
  
    constructor(props){
        super(props);
        this.state={
            data : [1, 3, 1],
        };
    }

    componentDidMount(data){
    
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'radar', 
        data : {
            labels: ["Itsensä Johtaminen ja Ongelmanratkaisu", "Yleinen Digiosaaminen", "Uranhallinta", "Vuorovaikutus"],
            datasets: [{
                label: "TestiKayttaja",
                data:[1, 3, 5, 3], 
            backgroundColor: 'rgba(110, 42, 91, 0.7)',
            },
            {
                label: "Keskiarvo",
                data: [3, 2.8, 4.2, 3.7],
                backgroundColor: 'rgba(42, 91, 110, 0.4)', 
            }]
        },
        options : {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 5
                }
            },
            
        }
    });
    }
  
    render() {
    return (
      <div>
       <canvas id="myChart" width="100" height="60"></canvas> 


      </div>
    );
  }
}

export default ChartTest;
