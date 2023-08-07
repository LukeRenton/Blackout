import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import LightIntro from './pages/IntroLight/IntroLight'; // Landing Page
import LoginPage from './pages/Login Page/LoginPage'; //Login Page
import Info1 from './pages/IntroLight/Info1' //Second Landing Page
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from './firebase/Firebase'
import { onAuthStateChanged } from "firebase/auth";
import userinfo from './models/userinfo';
import UserInfoService from './services/Userinfo.service';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home Page/Home';
import Map from './pages/IntroLight/Map'
import Grid from './pages/IntroLight/grid'
import Leaderboard from './pages/Leadboard/Leaderboard';
import Articles from './components/WebScraper/articles';
import DonationPage from './pages/Donations/DonationPage';
import DonationService from './services/Donation.service';
import Dash from './pages/AboutUs/Dash'
import Encrypt from './components/encrypt/encrypt';

function App() {

  const [userDonations, setUserDonations] = useState();
  const [currUser, setCurrUser] = useState();
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const service = new UserInfoService;
      setCurrUser(user);
      setLoading(false);
      // ...
    } else {
      // User is signed out
      // ...
      setCurrUser();
      setLoading(false);
    }
  });

  async function updateDonationCount() {
    const count = await (new DonationService).getDonationCount(currUser)
    setUserDonations(count);
  }

  useEffect(() => {
    if (currUser) {
      updateDonationCount();
    }
  },currUser)


  return (
     <div className='container'>
      
        <div>
          <BrowserRouter>

            {/* Define each route inside Routes */}
        
            {loading ? 
              <div>
              </div>
            :
            <>
              {currUser ? 
                <>
                  <Routes>
                    <Route path="/aboutus" element={<Dash />} />
                    <Route path="/scraper" element={<Articles />} />
                    <Route path="/donations"  element={<DonationPage user={currUser}/>} />
                    <Route path="/home" element={<Home user={currUser} donations={userDonations} />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/" element={ <Navigate to="/home" /> } />

                  </Routes>
                  <Navbar updateDonations={updateDonationCount}></Navbar>
                </>
                :
                <Routes>
                  <Route path="/home" element={ <Navigate to="/" /> } />
                  <Route path="/" element={<LightIntro />} />
                  <Route path="/info1" element={<Info1 />} />
                  <Route path = "/Map" element={<Map />} /> 
                  <Route path = "/Grid" element={<Grid />} />
                  <Route path="/login" element={<LoginPage updateDonations={updateDonationCount} />} />
                </Routes>
                      
              }
            </>
          }
          </BrowserRouter>
      </div>
    </div>


  );
}

export default App;
