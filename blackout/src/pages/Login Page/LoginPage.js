import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import wave from '../../img/wave2.png';
import electricity from '../../img/electricity.svg'
import electricity2 from '../../img/electricity2.svg'
import bulb from '../../img/bulb.gif'
import './LoginPage.css';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Slider from '../../components/slider/Slider'
import UserInfoService from '../../services/Userinfo.service';

export default function Login(props) {

  const [page, setPage] = useState('Login');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [mousex, setMousex] = useState(0);
  const [mousey, setMousey] = useState(0);
  const [imgClass, setImgClass] = useState('img');
  const [loginClass, setLoginClass] = useState('login_items');
  const [wave1Class, setWave1Class] = useState('wave_img');
  const [wave2Class, setWave2Class] = useState('wave2_img');

  if (props.user) {
    props.updateDonations();
    loadOutScreen('/home');
  }

  async function loginUser(e) {
    e.preventDefault();

    if (page==='Login') {
      //Login user
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        loadOutScreen('/home');
        await props.updateDonations();
      } catch (err) {
        console.log(err);
      }
    } else {
      //Sign-up user
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        loadOutScreen('/home');
        const user = userCredential.user;
        const service = new UserInfoService;
        service.addUser(user, username);
        props.updateDonations();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });


    }
  }

  function moveMouse(event) {
    setMousex(0.015*event.clientX);
    setMousey(-0.015*event.clientY);
  }

  function loadOutScreen(route) {
    setImgClass('img img_load_out');
    setLoginClass('login_items login_load_out');
    setWave1Class('wave_img wave_load_out');
    setWave2Class('wave2_img wave_load_out');

    setTimeout(() => {
      navigate(route);
    }, 1200);  
  }

  function changePage() {
    if (page === 'Login') {
      setPage('Register')
    } else {
      setPage('Login');
    }
  }

  return (
    <div className={'login-page'} onMouseMove={moveMouse}>
        <img className={wave1Class} style={{transform: `translateX(${0.01*-mousex}px) translateY(${mousey}px) `}} src={wave} alt="" ></img>
        <img className={wave2Class} style={{transform: `translateX(${0.01*-mousex}px) translateY(${mousey}px) `}} src={wave} alt=""></img>
        <div className='login-container'>
          <div className={imgClass} style={{transform: `translateX(${-mousex}px) translateY(${mousey}px) `}}>
            <img className='mt-5 diet_img' src={electricity} alt="" ></img>
            <img className='workout_img' src={electricity2} alt="" ></img>
          </div>
          <div className={loginClass}>
      
              <div className='login-subcontainer'>
                
                <div class={page === 'Login' ? "login_card login_page_activated" : "login_card reg_page_activated"}>
                  <div className='avatar_holder'>
                    <img className="avatar" src={bulb} style={{transform: `translateX(${0.1*mousex}px) translateY(${0.1*mousey}px) `}} alt=""></img>
                  </div>
                  <Slider changePage={changePage}></Slider>
                  <h3>{page} to Blackout</h3>
                  <form name="LoginForm" action="/login" method="post">
                    <label for="Module_ID"> <font color="white"> Email </font> </label><br />
                    <input
                      type="text"
                      placeholder="Email"
                  required
                      onChange={(e) => {setEmail(e.target.value)}}
                    />
                      <div className={page === 'Login' ? 'username_hide' : 'username_show'}>
                        <label for="Module_ID"> <font color="white"> Username </font> </label><br />
                        <input
                          type="text"
                          placeholder="Username"
                      required
                          onChange={(e) => {setUsername(e.target.value)}}
                        />
                      </div>
                    <label for="Password"> <font color="white">Password </font> </label
                    ><br />
                    <input
                      type="Password"
                      id="Password"
                      name="Password"
                      placeholder="Password"
                  required
                  onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <input type="submit" value="Submit" onClick={(e) => {loginUser(e)}}/>
                  </form>
                </div>
              </div>

          </div>
        </div>
      </div>
  )
}