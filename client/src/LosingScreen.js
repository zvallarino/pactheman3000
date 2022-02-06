import React, { useEffect, useRef } from "react";

function LosingScreen({
  SCREEN_WIDTH, SCREEN_HEIGHT,
  BLOCK_WIDTH, BLOCK_HEIGHT
}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH*(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(18/20)}px`
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 11;

 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    drawText1()
    setTimeout(shootToLink,2000)
    

  },[])

  const drawText1 = () => {
    contextRef.current.font = "small-caps bold 40px/1 sans-serif"
    contextRef.current.lineWidth = 1
    contextRef.current.fillStyle = 'red'
    contextRef.current.fillText("GAME OVER",BLOCK_WIDTH*4.6, BLOCK_HEIGHT*7.5)
  }

  
  const shootToLink = (e) => {
    window.location.href = "/"
  }

  return (
   <canvas
  //  tabIndex = "0"
   ref = {canvasRef}
   />
  )
}

export default LosingScreen;