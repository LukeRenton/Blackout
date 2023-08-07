import React, { useEffect, useState } from 'react';
import './encrypt.css'; // Import the CSS file with your styles
import '../../pages/IntroLight/Light.css'

const originalText = ["ELECTRICAL", "ECONOMIC", "EDUCATIONAL"];
const animationDuration = 75; // Time in milliseconds for each hacker animation cycle
const realWordDuration = 5000; // Time in milliseconds to display the real word before and after the animation

const Encrypt = () => {
  const [scrambledText, setScrambledText] = useState(originalText[0]);
  const [showActualWord, setShowActualWord] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timeoutId;

    const scrambleText = () => {
      const currentWord = originalText[counter];
      let newScrambledText = '';

      for (let i = 0; i < currentWord.length; i++) {
        if (Math.random() < 0.5) {
          newScrambledText += String.fromCharCode(Math.random() * 94 + 33);
        } else {
          newScrambledText += currentWord[i];
        }
      }

      setScrambledText(newScrambledText);

      timeoutId = setTimeout(() => {
        setShowActualWord(false);

        let animationCounter = 0;

        const runAnimation = () => {
          timeoutId = setTimeout(() => {
            setShowActualWord((prev) => !prev); // Toggle the showActualWord state
            animationCounter++;

            if (animationCounter < 5) {
              scrambleText(); // Rescramble the text before each animation cycle
              runAnimation();
            } else {
              // After the animation is done 5 times, move to the next word
              setCounter((prevCounter) => (prevCounter + 1) % originalText.length);
              setShowActualWord(true);
              scrambleText(); // Rescramble the text before starting the next word
            }
          }, animationDuration);
        };

        runAnimation();
      }, realWordDuration);
    };

    scrambleText();

    return () => clearTimeout(timeoutId);
  }, [counter]);

  return (
    <div className="hacker-text-container">
      <span id="hackerText">{showActualWord ? originalText[counter] : scrambledText}</span>
    </div>
  );
};

export default Encrypt;
