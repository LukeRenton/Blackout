import React, { useState } from 'react'
import './Slider.css'

export default function Slider(props) {

  const [pos, setPos] = useState('L');

  function changePos() {
    if (pos === 'L') {
        setPos('R');
        props.changePage();
        console.log(pos);
    } else {
        setPos('L');
        console.log(pos);
        props.changePage();
    }
  }

  return (
    <div className={pos == 'L' ? 'slider_back left_display' : 'slider_back right_display'} onClick={() => changePos()}>
      <div className={pos == 'L' ? 'slider_block left' : 'slider_block right' } >

      </div>
    </div>
  )
}
