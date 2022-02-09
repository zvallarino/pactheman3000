import React, {useEffect,useRef} from "react";
import OctopusCanvas from "./OctopusCanvas";
import LivesCanvas from "./LivesCanvas";

function Lives ({
  SCREEN_WIDTH, SCREEN_HEIGHT,
  BLOCK_WIDTH, BLOCK_HEIGHT, imageRef,
  livesCount, lostLive
}){

const newArrayRef = useRef([])


useEffect(()=>{


},[lostLive])

let times = livesCount.current;
let newArray = []



if(livesCount.current + 1 ===3){

  newArrayRef.current = [0,1]
}else if(livesCount.current + 1 ===2){
  newArrayRef.current = [0]
}
else if (livesCount.current + 1 ===1){
  newArrayRef.current = []
}
else if (livesCount.current + 1 ===0){
  return false;
}


// let Lives = 
// newArrayRef.current.map((octopusNumber,i)=><LivesCanvas 
// octopusNumber={octopusNumber}

// SCREEN_WIDTH = {SCREEN_WIDTH}
// SCREEN_HEIGHT = {SCREEN_HEIGHT}
// livesCount = {livesCount}
// imageRef = {imageRef}
// lostLive = {lostLive}
// key = {i++}

// BLOCK_WIDTH= {BLOCK_WIDTH}
// BLOCK_HEIGHT= {BLOCK_HEIGHT}
// />)



  return (
    <>
 <LivesCanvas 

SCREEN_WIDTH = {SCREEN_WIDTH}
SCREEN_HEIGHT = {SCREEN_HEIGHT}
livesCount = {livesCount}
imageRef = {imageRef}
lostLive = {lostLive}

BLOCK_WIDTH= {BLOCK_WIDTH}
BLOCK_HEIGHT= {BLOCK_HEIGHT}
/>
    </>

  )
}

export default Lives;