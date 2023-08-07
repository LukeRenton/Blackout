import React, { useState, useEffect } from 'react';
import './Dash.css';
import Money from './money.svg'

const Dash = () => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimationCompleted(true);
    }, 2500); // Adjust the timeout according to your animation duration

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className='about_us'>
      <div className="Heading">
        <h1 id="header" className={isAnimationCompleted ? 'animate' : ''}>What do we do?</h1>
        <h3 id="content" className={isAnimationCompleted ? 'animate' : ''}>
          Your donations help us create renewable power solutions for those in need.
        </h3>
        {isAnimationCompleted && (
          <img src={Money} alt='Recieving Money' />
        )}
        <h3 id='underline'> We have been able to help:</h3>
        <h2 id= 'content2'>300 000+ people.</h2>
        <h2 id= 'content2'>50+ rural communities.</h2>
        <h2 id= 'content2'>Set up over 1000 SqM of Solar Panels</h2>
        <h2 id= 'content2'>Raised over R1 000 000</h2>
      </div>
    </div>
  );
};

export default Dash;
