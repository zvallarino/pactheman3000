import React, {useEffect,useRef} from "react";
import OctopusCanvas from "./OctopusCanvas";
import LivesCanvas from "./LivesCanvas";

function Lives ({
  SCREEN_WIDTH, SCREEN_HEIGHT,
  BLOCK_WIDTH, BLOCK_HEIGHT, imageRef,
  livesCount, lostLive
}){

useEffect(()=>{


},[lostLive])

let times = livesCount.current;
let newArray = []

const ArrayConverter = () => {
  for(let i = 0; i < times; i++){
  newArray.push(i)}
  return newArray
}



let Lives = 
ArrayConverter().map((octopusNumber,i)=><LivesCanvas 
octopus={octopusNumber}
SCREEN_WIDTH = {SCREEN_WIDTH}
SCREEN_HEIGHT = {SCREEN_HEIGHT}
livesCount = {livesCount}
imageRef = {imageRef}
lostLive = {lostLive}
key = {i++}

BLOCK_WIDTH= {BLOCK_WIDTH}
BLOCK_HEIGHT= {BLOCK_HEIGHT}
/>)

  return (
    <>
  {Lives}
    </>

  )
}

export default Lives;