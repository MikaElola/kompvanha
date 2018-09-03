import React, { Component } from 'react';
import Radar from 'react-d3-radar';


class SpiderRadar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: this.props.data,
      };
    }
  
    componentDidMount() {
      console.log(this.state.data);


    }

    render() {

      const style = {
        font: 21,
      }
      return (
        <div>
         <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={5}
            highlighted={null}
            data={this.state.data}
         />
        </div>
      );
    }
  }
  
  export default SpiderRadar;


