import React, { useEffect, useRef } from "react";

function LivesCanvas({
  SCREEN_WIDTH, SCREEN_HEIGHT,
  BLOCK_WIDTH, BLOCK_HEIGHT, imageRef,octopusNumber,lostLive,
  livesCount
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

  },[lostLive])




  const pacMan = {
    x:BLOCK_WIDTH * octopusNumber,
    y:BLOCK_HEIGHT*20.1,
    w:BLOCK_WIDTH*(14/20),
    h:BLOCK_HEIGHT*(14/20),
  }

  pacManRef.current = pacMan

  const drawPacMan = (x) => {
    let pacManImg = new Image();
    pacManImg.src = imageRef.current;
    pacManImg.onload = function(){
      contextRef.current.drawImage(pacManImg,BLOCK_WIDTH*x,BLOCK_HEIGHT*20.1,BLOCK_WIDTH*(14/20),BLOCK_HEIGHT*(14/20))

    }
  }

  const update = () => {
    drawlives(livesCount)
  }

  function drawlives(refObject){

  if(refObject.current + 1 ===3){
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
    drawPacMan(0)
    drawPacMan(1)
    drawPacMan(2)
    
  }else if(refObject.current + 1 ===2){
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
    drawPacMan(0)
    drawPacMan(1)
  }
  else if (refObject.current + 1 ===1){
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
    drawPacMan(0)
  }
  else if (refObject.current + 1 ===0){
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
    return false;
  }
  }

  return (
   <canvas
   ref = {canvasRef}
   />
  )
}

export default LivesCanvas;