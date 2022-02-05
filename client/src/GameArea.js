import React, { useState, useEffect, useRef } from "react";

function GameArea({SCREEN_WIDTH, SCREEN_HEIGHT}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  


  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH*(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(18/20)}px`
    canvas.style.backgroundColor = "green";
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 0;

 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    

  },[])

  return (
   <canvas
  //  tabIndex = "0"
   ref = {canvasRef}
   />
  )
}

export default GameArea;