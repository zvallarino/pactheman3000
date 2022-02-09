import React, { useEffect, useRef, useState } from "react";
import munch from './sounds/munch_1.wav';
import useSound from 'use-sound';


function Sounds({
  ifPlaying
}){

  const [play] = useSound(munch);
  const [isPlaying,setIsPlaying] = useState(true);

  function setterOfIsPlaying(e){
    setIsPlaying(true)
  }

  const BoopButton = () => {
    if(isPlaying === true)
    {setInterval(play,300)}
    }
    // BoopButton()
   


  return (
    <>
  <button onClick={BoopButton}>Boop!</button>
    </>
  )
}

export default Sounds;