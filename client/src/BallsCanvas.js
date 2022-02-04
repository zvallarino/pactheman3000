import React, { useEffect, useRef } from "react";

function BallsCanvas({notawallRef,pacManRef}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const whiteBlocksRef = useRef({})
  const arrayOfWhiteXY = useRef([])

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
      boundariesForBalls(pacManRef,notawallRef,whiteBlocksRef)
      requestAnimationFrame(update)
    }
 
    update()

  },[])

    function boundariesForBalls(refObject,refObject2,refObject3){
      for (let key in refObject2.current){
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

            ArrayXYBuilder(refObject2.current[key].x,refObject2.current[key].y,arrayOfWhiteXY)
     
            if((Object.keys(refObject2.current).length)===arrayOfWhiteXY.current.length){
              console.log("you won")
            }

          }else{
          }
          }
        }



        function ArrayXYBuilder (x,y,arrayOfXY){

        if(arrayOfXY.current.length===0){
          return arrayOfXY.current.push([x,y])
        }
          for(let key of arrayOfXY.current){
            if(key[0]===x&&key[1]===y)
            {return true}
          } 

          return arrayOfXY.current.push([x,y])
        }


  
  return (
   <canvas
   ref = {canvasRef}
   />
  )
}

export default BallsCanvas;