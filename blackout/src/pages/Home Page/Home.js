import React from 'react'
import './Home.css'
import lamp_back from '../../img/lamp_back.jpg'
import Articles from '../../components/WebScraper/articles'
import Leaderboard from '../Leadboard/Leaderboard'
import Main from './Main'

export default function Home(props) {
  return (
    <div className='home_root'>
        <div className='home_container'>
          <div className='home_main'>
            {/* <img src={lamp_back}></img> */}
            <Main donations={props.donations} user={props.user}></Main>
          </div>
          <div className='side_channel'>
            <div className='leaderboard'>
              <Leaderboard listLength={3} summary={true}></Leaderboard>
            </div>
            <div className='feed'>
              <Articles></Articles>
            </div>
          </div>
        </div>
    </div>
  )
}
