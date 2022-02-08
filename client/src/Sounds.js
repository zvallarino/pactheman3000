import React, { useEffect, useRef } from "react";
import munch from './sounds/munch_1.wav';
import useSound from 'use-sound';


function Sounds({
  ifPlaying
}){

  const [eatDot] = useSound(munch)

  return (
    <>
   {ifPlaying?eatDot():null}
    </>
  )
}

export default Sounds;