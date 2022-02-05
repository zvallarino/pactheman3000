import React, {  useEffect, useRef } from "react";

function BlocksForGameBoard({
  wallRef, notawallRef, wallCounter,
  ballCounter, SCREEN_WIDTH, SCREEN_HEIGHT,
  gameBoard,BLOCK_WIDTH, BLOCK_HEIGHT
  }){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH *(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(18/20)}px`
    canvas.style.backgroundColor = "yellow";
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 2;

    const context = canvas.getContext("2d");
    context.scale(2,2); 
    contextRef.current = context

    const update = () => {
      gameBoardLoop(gameBoard)
    }

    update()

  },[])

  const drawRectangle = (xposition,yposition,colorZ,counter) => {

    if(counter === ballCounter){
    contextRef.current.beginPath();
    contextRef.current.rect(xposition, yposition, BLOCK_WIDTH, BLOCK_HEIGHT);
    contextRef.current.fillStyle = colorZ
    contextRef.current.fill();
    notawallRef.current[`ball${ballCounter.current}`]={}
    notawallRef.current[`ball${ballCounter.current}`].x=xposition
    notawallRef.current[`ball${ballCounter.current}`].y=yposition
    notawallRef.current[`ball${ballCounter.current}`].w=BLOCK_WIDTH
    notawallRef.current[`ball${ballCounter.current}`].h=BLOCK_HEIGHT
    notawallRef.current[`ball${ballCounter.current}`].color = colorZ 
  }

    if(counter === wallCounter){
      contextRef.current.beginPath();
      contextRef.current.rect(xposition, yposition, BLOCK_WIDTH, BLOCK_HEIGHT);
      contextRef.current.fillStyle = colorZ
      contextRef.current.fill();
      wallRef.current[`wall${wallCounter.current}`]={}
      wallRef.current[`wall${wallCounter.current}`].x=xposition
      wallRef.current[`wall${wallCounter.current}`].y=yposition
      wallRef.current[`wall${wallCounter.current}`].w=BLOCK_WIDTH
      wallRef.current[`wall${wallCounter.current}`].h=BLOCK_HEIGHT
      wallRef.current[`wall${wallCounter.current}`].color = colorZ
    }  
  }

  const gameBoardLoop = (arrayZ) =>{


    for(let i = 0; i<arrayZ.length;i++){
        let yStartPosition = (i/arrayZ.length)* SCREEN_HEIGHT;
          for(let j = 0; j<arrayZ[i].length;j++){
            let xStartPosition = (j/arrayZ[i].length)* SCREEN_WIDTH;
            // console.log(arrayZ[i][j])
              if(arrayZ[i][j]===0){
        
                drawRectangle(xStartPosition,yStartPosition,"green",ballCounter)
                ballCounter.current += 1
              }

              if(arrayZ[i][j]===1){
          
                drawRectangle(xStartPosition,yStartPosition,"blue",wallCounter)
                wallCounter.current += 1;
              }

              if(arrayZ[i][j]===2){
                drawRectangle(xStartPosition,yStartPosition,"purple",ballCounter)
                ballCounter.current += 1;
              }
               
          }
        }
  }


  return (
   <canvas

   ref = {canvasRef}
   />
  )
}

export default BlocksForGameBoard;