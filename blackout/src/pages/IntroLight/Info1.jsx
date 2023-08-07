import React, { useEffect } from "react";
import './Light.css';
import { Link } from "react-router-dom";
import Next from '../../components/arrow.svg' //Arrow Svg

const LightIntro = () => {
    
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
              WE HAVE ONLY HAD 1 DAY OF NO LOADSHEDDING THIS YEAR
            </span>
          </p>
        </div>
          <Link to="/Map" id='arrow-container'>
                <img id='next-arrow'
                src={Next}
                alt='Next'
                />
            </Link>
        </div>  
      );

}



export default LightIntro
