import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase'
import { signOut } from 'firebase/auth';

export default function Navbar(props) {

  function signUserOut() {
    signOut(auth);
    navigate('/');
  }

  function navigateToHome() {
    props.updateDonations();
    navigate('/home');
  }

  const navigate = useNavigate();
  return (
    <div className='navbar_main'>
      <div className='nav_icons_container'>
        <div className='nav_item' onClick={() => {navigateToHome()}}>
          <i class="bi bi-lightbulb"></i>
          <label>Home</label>
        </div>
        <div className='nav_item' onClick={() => {navigate('/donations')}}>
            <i className="bi bi-cash-coin"></i>
            <label>Donate</label>
        </div>
        <div className='nav_item' onClick={() => {navigate('/leaderboard')}}>
            <i class="bi bi-award-fill"></i>
            <label>Board</label>
        </div>
        <div className='nav_item' onClick={() => {navigate('/aboutus')}}>
            <i class="bi bi-person-circle"></i>
            <label>About us</label>
        </div>
        <div className='nav_item' onClick={() => {signUserOut()}}>
          <i class="bi bi-door-closed"></i>
          <label>Logout</label>
        </div>
      </div>
   </div>
  )
}
