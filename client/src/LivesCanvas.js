import React, { useEffect, useRef } from "react";

function LivesCanvas({
  SCREEN_WIDTH, SCREEN_HEIGHT,
  BLOCK_WIDTH, BLOCK_HEIGHT, imageRef,octopus,lostLive
}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const pacManRef = useRef(null)

  


  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH*(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(19/20)}px`
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 0;

 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context


    update()

  },[])




  const pacMan = {
    x:BLOCK_WIDTH * octopus,
    y:BLOCK_HEIGHT*15.2,
    w:BLOCK_WIDTH*(14/20),
    h:BLOCK_HEIGHT*(14/20),
  }

  pacManRef.current = pacMan

  const drawPacMan = () => {
    let pacManImg = new Image();
    pacManImg.src = imageRef.current;
    pacManImg.onload = function(){
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
      contextRef.current.drawImage(pacManImg,pacManRef.current.x,pacManRef.current.y,pacManRef.current.w,pacManRef.current.h)

    }
  }

  const update = () => {
    drawPacMan()
    requestAnimationFrame(update)
  }


  return (
   <canvas
   ref = {canvasRef}
   />
  )
}

export default LivesCanvas;