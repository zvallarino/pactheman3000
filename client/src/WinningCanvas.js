import React, { useEffect, useRef } from "react";

function WinningCanvas({
   score, scoreChange, octopusHit,totalScoreRef
}){



  useEffect(()=>{

  },[scoreChange])

  
  const shootToLink = (e) => {
    // starterSound()

      window.location.href = "/"
   
    

  }


  return (
    <div className ="winningScreen">
      <div className = "winningspaceingBox"></div>
        <div className = "winningInnerBox">
          <p>
            NICE JOB! 
            </p>
            SCORE:{totalScoreRef.current}
            <button onClick = {shootToLink}>Try Again?</button>
        </div> 
   </div>
  )
}

export default WinningCanvas;