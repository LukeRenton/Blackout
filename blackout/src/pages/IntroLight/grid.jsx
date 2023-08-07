import React, { useState, useEffect } from "react";
import './Grid.css';
import './Light.css';
import { Link } from "react-router-dom";
import Next from '../../components/arrow.svg' //Arrow Svg

const Text = () => {

    useEffect(() => {
        function wrapLettersWithSpan(element){
            const text = element.innerText;
            const letters = text.split('');
    
            const wrappedText = letters.map(letter => {
                return `<span>${letter}</span>`;
            }).join('');
    
            element.innerHTML = wrappedText;
        }
    
        const animatedSpan = document.querySelector('.animated-text');
    
        wrapLettersWithSpan(animatedSpan);
    
        const letterSpans = animatedSpan.querySelectorAll('span');
    
        function animateLetters() {
            letterSpans.forEach((span, index) => {
              const randomDelay = Math.random() * 100 +1;
              span.style.animationDelay = `${index * randomDelay}ms`;
              span.classList.add('animate');
            });
          }
        
        animateLetters();
        
    }, []);

  return (

    <div className="introlight">
      <div className="text-container">
          <p>
            <span className="animated-text" id="backlight">
              HOW MUCH MORE OF THIS?
            </span>
          </p>
        </div>
        
      <Link to= "/Login" id = 'button'>
      <img id='next-arrow'  
                src={Next}
                alt='Next'
                />
      </Link>
    </div>
  );
}


const Grid = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setShowText(true);
    };

    const gridContainer = document.querySelector(".grid-container");

    gridContainer.addEventListener("animationend", handleAnimationEnd);

    return () => {
      gridContainer.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const [hideElements, setHideElements] = useState(false);

  useEffect(() => {
    if (showText) {
      const timer = setTimeout(() => {
        setHideElements(true);
      }, 0.0001);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showText]);

  return (
    <div className="intro_grid">
      {/* Show the grid container and individual grids */}
      {!hideElements && (
        <div className="grid-container">
          <div id="jan" className="month">January</div>
          <div id="feb" className="month">February</div>
          <div id="mar" className="month">March</div>
          <div id="apr" className="month">April</div>
          <div id="may" className="month">May</div>
          <div id="jun" className="month">June</div>
          <div id="jul" className="month">July</div>
          <div id="aug" className="month">August</div>
          <div id="sep" className="month">September</div>
          <div id="oct" className="month">October</div>
          <div id="nov" className="month">November</div>
          <div id="dec" className="month">December</div>
        </div>
      )}


      {showText && <Text />}
    </div>
  );
};

export default Grid;
