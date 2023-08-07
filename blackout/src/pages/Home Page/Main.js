import React, { useEffect, useState } from 'react'
import Piechart_class from '../../components/Piechart/PieChart'
import LineGraph from '../../components/Chart/Chart';
import DonationService from '../../services/Donation.service';

export default function Main(props) {

    const piechart = new Piechart_class(80);
  return (
    <div className='main_container'>
        <div className='upper_channel'>
            <div className='left_header'>
            	Places We Are Busy With
                <LineGraph></LineGraph>
            </div>
            
            <div className='upper'>
                <div className='upper_header'>
                    Percentage people helped
                </div>
                {piechart.render()}
            </div>
        </div>
        <div className='lower_channel'>
            <div className='info_card'>
                <div className='info_card_header'>
                	Donations you've made
                </div>
                <div className='info_card_desc'>
                    {props.donations} donations
                </div>
            </div>
        </div>
    </div>
  )
}
