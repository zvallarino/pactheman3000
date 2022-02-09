import React, { useEffect, useRef } from "react";

function ScoreBoard({
   score, scoreChange, octopusHit,totalScoreRef
}){

totalScoreRef.current = score.current +(octopusHit.current*200) 


  useEffect(()=>{

  },[scoreChange])


  return (
    <div className ="overallBoxforScoreBoard">
  <div className = "spaceingBox"></div>
   <div className = "scoreboard">
   SCORE:{totalScoreRef.current}
   </div> 
   </div>
  )
}

export default ScoreBoard;