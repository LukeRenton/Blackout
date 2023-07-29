import React, { useEffect } from "react";
import './Light.css';

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
        <div className="text-container">
          <p>
            <span className="animated-text">
              WE HAVE HAD 209 DAYS OF LOADSHEDDING SO FAR
            </span>
          </p>
        </div>
      );

}



export default LightIntro
