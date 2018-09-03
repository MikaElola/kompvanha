import React, { Component } from 'react';
import * as d3 from "d3";
import { generateArray } from './ArrayPros.js';


/**
 * Class: VerticalBarChart
 * Description: This class renders a Horizontal BarChart from given data set.
 * Variables:
 * ArrayList Data
 */

class VerticalBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

/**
 * We draw chart after component has mounted.
 * In following function we utilise d3.js library to do so.
 */
  componentDidMount() {
    console.log(this.props.data);
    
    this.props.data.sort(function (a, b){
      return b.value - a.value;
    });


    const scale = d3.scaleLinear()
      .domain([0, d3.max(this.props.data, x => x.value)])
      .range([0, window.innerWidth*0.3]);

    const chart = d3.select(this.chartRef)
      .attr('height', 40 * this.props.data.length)
      .attr('width', window.innerWidth*0.6);

    const bar = chart.selectAll('g')
      .data(this.props.data)
      .enter()
        .append('g')
        .attr('transform', (el, i) => `translate(0, ${i * 40})`);

    bar.append('rect')
      .attr("width", (x) => scale(x.value))
      .attr("height", 15)
      .attr("fill", "steelblue");

    bar.append('text')
      .attr('x', (x) => scale(x.value)+13)
      .attr('y', 13)
      .attr('dy', '0')
      .text((x) => `${"  "+x.label}  ${x.value}`);
  }

  render() {
    return (
      <div className = "">
        <svg className="bar-chart--basic" ref={(r) => this.chartRef = r}></svg>
      </div>
    );
  }
}

export default VerticalBarChart;