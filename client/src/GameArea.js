import React, { useState, useEffect, useRef } from "react";

function GameArea(){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  
  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;


  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight *2;
    canvas.style.width = `${window.innerWidth*(10/20)}px`
    canvas.style.height = `${window.innerHeight*(16/20)}px`
    canvas.style.backgroundColor = "green";
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(2/20)}px`;
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