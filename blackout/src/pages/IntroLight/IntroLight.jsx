import React, { useEffect } from "react";
import './Light.css';
import Next from '../../components/arrow.svg' //Arrow Svg
import { Link } from "react-router-dom";


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

    return(
        <div>
            <div>
            <p>
                <span class="animated-text">WE ARE IN A CRISIS</span>
            </p>
            </div>
            <Link to="/info1" id='arrow-container'>
                <img id='next-arrow'
                src={Next}
                alt='Next'
                />
            </Link>
            
            
        </div>
    )

}



export default LightIntro
