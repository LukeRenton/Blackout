import React from 'react';
import { PieChart } from "react-minimal-pie-chart";
import './Piechart.css'
import CountUp from 'react-countup';

export default class Piechart_class extends React.Component{
  constructor(pievalue) {
    super();
    this.pievalue = pievalue;
    this.other = 100-this.pievalue;
  }
  render() {
    let data = [
      { value: this.other, color: "black" },
      { value: this.pievalue, color: "#ffffff" },
    ];
    
    return (
        <div style={{backgroundColor:"none"}} className='piechart'>
            <div className='percent_number'>
              <CountUp duration={1} end={this.pievalue} />%
            </div>
            <div className='piechart_image'>
                <PieChart
                    animate
                    animationDuration={1000}
                    animationEasing="ease-in"
                    center={[50, 50]}
                    data={data}
                    lineWidth={10}
                    lengthAngle={360}
                    paddingAngle={0}
                    radius={30}
                    rounded
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                    labelStyle={{
                        fontSize: "6px",
                        fontColor: "FFFFFA",
                        fontWeight: "500",
                        fontFamily: "monospace"
                    
                    }}
                />
            </div>
      </div>
      
    );
  }
}