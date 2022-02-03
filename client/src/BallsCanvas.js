import React, { useEffect, useRef } from "react";

function BallsCanvas({notawallRef,pacManRef}){

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
    canvas.style.position = "absolute";
    canvas.style.left = `${window.innerWidth*(5/20)}px`;
    canvas.style.top = `${window.innerHeight*(2/20)}px`;
    canvas.style['z-index'] = 2;
 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

  


    const update = () => {
      boundariesForBalls(pacManRef,notawallRef)
      requestAnimationFrame(update)
    }
 
    update()

  },[])

    function boundariesForBalls(refObject,refObject2){
      console.log(refObject2)
      console.log(refObject.current.h)
  
      for (let key in refObject2.current){
          // console.log(refObject2.current[key])
          // console.log(refObject.current.x+refObject.current.w>refObject2.current[key].x)
          // console.log( refObject.current.x<refObject2.current[key].x+refObject2.current[key].w)
          if
          (refObject.current.x+refObject.current.w>refObject2.current[key].x
          &&
          refObject.current.x<refObject2.current[key].x+refObject2.current[key].w
          &&
          refObject.current.y+refObject.current.h>refObject2.current[key].y
          &&
          refObject.current.y<refObject2.current[key].y+refObject2.current[key].h)
          
          {
            contextRef.current.beginPath();
            contextRef.current.rect(refObject2.current[key].x, refObject2.current[key].y, refObject2.current[key].w, refObject2.current[key].h);
            contextRef.current.fillStyle = "white"
            contextRef.current.fill();
          }else{
            console.log("no")
          }
          }
        }

  
  return (
   <canvas
   ref = {canvasRef}
   />
  )
}

export default BallsCanvas;