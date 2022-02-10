import React, { useEffect, useRef } from "react";

function WinningCanvas({
   score, scoreChange, octopusHit,totalScoreRef, SCREEN_WIDTH, SCREEN_HEIGHT,
   BLOCK_WIDTH, BLOCK_HEIGHT, pacManRef
}){

  // console.log(pacManRef.current.speedx)
  // console.log(pacManRef.current.speedy)
  console.log(pacManRef.current.x)
  console.log(pacManRef.current.y)

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH}px`
    canvas.style.height = `${SCREEN_HEIGHT}px`
    canvas.style.backgroundColor = "Yellow";
    canvas.style.position = "absolute";
    canvas.style.left = `0px`;
    canvas.style.top = `0px`;
    canvas.style['z-index'] = 25;

 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    drawText1()

    //this makes it so pacman can not be hit by the ghost while you wait for the user to chose if they want to play again or not.

  pacManRef.current.speedx = 0
  pacManRef.current.speedy= 0
  pacManRef.current.x= 0
  pacManRef.current.y= 0

  },[scoreChange])

  const drawText1 = () => {
    contextRef.current.font = "small-caps bold 60px/1 'Press Start 2P', cursive"
    contextRef.current.lineWidth = 1
    contextRef.current.fillStyle = 'red'
    contextRef.current.fillText(`Nice Job!`,BLOCK_WIDTH*7, BLOCK_HEIGHT*8)
    contextRef.current.font = "small-caps bold 40px/1 'Press Start 2P', cursive"
    contextRef.current.fillText(`SCORE:${totalScoreRef.current}`,BLOCK_WIDTH*7.1, BLOCK_HEIGHT*10)
    contextRef.current.fillText(`click clickwhere to try again!`,BLOCK_WIDTH*5.0, BLOCK_HEIGHT*12)
  }

  
  
  const shootToLink = (e) => {
    // starterSound()

      window.location.href = "/"
   
    

  }


  return (
    <canvas
       tabIndex = "0"
       onClick ={shootToLink}
      ref = {canvasRef}>
   </canvas>
  )
}

export default WinningCanvas;