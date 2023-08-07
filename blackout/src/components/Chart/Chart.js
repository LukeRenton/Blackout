import React, { useEffect } from 'react';
import './chart.css'

const LineGraph = () => {
  return (
    <div className='line_graph'>
		<div class="wrapper">
    		 	<h2 id = 'wrapper-sub'>Gauteng</h2>
    		<div class="line line1">90%</div>
    			<h2 id = 'wrapper-sub'>Free State</h2>
    		<div class="line line2">80%</div>
    			<h2 id = 'wrapper-sub'>Western Cape</h2>
    		<div class="line line3">75%</div>
    			<h2 id = 'wrapper-sub'>North West</h2>
    		<div class="line line4">70%</div>
		</div>
	</div>
  );
};

export default LineGraph;
