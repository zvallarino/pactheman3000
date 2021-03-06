import React, { useEffect, useRef } from "react";

function BallsCanvas({
  notawallRef, pacManRef, canEatOctopusRef,
  SCREEN_WIDTH, SCREEN_HEIGHT, score, setScoreChange, setterOfVictory
}
){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const arrayOfWhiteXY = useRef([])




  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH*(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(18/20)}px`
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 3;
 
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
            contextRef.current.fillStyle = "black"
            contextRef.current.fill();  

            ArrayXYBuilder(refObject2.current[key].x,refObject2.current[key].y,arrayOfWhiteXY)

            //So its just covering each ball with a black rectangle so in order to count the score correctly.
            //created an array of unique squares related to the new covered
            // That arrays length times ten is the score at any given time!
            
            score.current =(arrayOfWhiteXY.current.length)*10
            setScoreChange(whales => !whales)

            speedBallChecker(refObject2.current[key])
    
            WinGame(refObject2)

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

        function WinGame (refObject2){
          if((Object.keys(refObject2.current).length)===arrayOfWhiteXY.current.length){
            setterOfVictory(true)
            console.log('you won')
          }
        }

        function speedBallChecker(refObject){
          if(refObject.color === "purple"){
            pacManRef.current.speedx = 15
            pacManRef.current.speedy = 15
            refObject.color = "white"
            canEatOctopusRef.current = true
            setTimeout(() => {
              canEatOctopusRef.current = false
              pacManRef.current.speedx = 5
              pacManRef.current.speedy = 5
            }, 2000);
          }
        }

  
  return (
    <>
   <canvas
   ref = {canvasRef}
   />
   </>
  )
}

export default BallsCanvas;