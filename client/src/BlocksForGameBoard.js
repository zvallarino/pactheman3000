import React, { useState, useEffect, useRef } from "react";

function BlocksForGameBoard({wallRef, notawallRef, wallCounter, ballCounter}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  
  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;


  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight *2;
    canvas.style.width = `${ SCREEN_WIDTH *(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(16/20)}px`
    canvas.style.backgroundColor = "yellow";
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(2/20)}px`;
    canvas.style['z-index'] = 1;

    const context = canvas.getContext("2d");
    context.scale(2,2); 
    contextRef.current = context

    const update = () => {
      gameBoardLoop(gameBoard)
    }

    update()

  },[])

  let gameBoard = [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
  ]

  let gdWidth = gameBoard[0].length
  let gbHeight = gameBoard.length

  const drawRectangle = (xposition,yposition,colorZ,counter) => {

    if(counter === ballCounter){
    contextRef.current.beginPath();
    contextRef.current.rect(xposition, yposition, SCREEN_WIDTH/gdWidth, SCREEN_HEIGHT/gbHeight);
    contextRef.current.fillStyle = colorZ
    contextRef.current.fill();
    notawallRef.current[`ball${ballCounter.current}`]={}
    notawallRef.current[`ball${ballCounter.current}`].x=xposition
    notawallRef.current[`ball${ballCounter.current}`].y=yposition
    notawallRef.current[`ball${ballCounter.current}`].h=SCREEN_HEIGHT/gbHeight
    notawallRef.current[`ball${ballCounter.current}`].w=SCREEN_WIDTH/gdWidth
    notawallRef.current[`ball${ballCounter.current}`].color = colorZ 
  }

    if(counter === wallCounter){
      contextRef.current.beginPath();
      contextRef.current.rect(xposition, yposition, SCREEN_WIDTH/gdWidth, SCREEN_HEIGHT/gbHeight);
      contextRef.current.fillStyle = colorZ
      contextRef.current.fill();
      wallRef.current[`wall${wallCounter.current}`]={}
      wallRef.current[`wall${wallCounter.current}`].x=xposition
      wallRef.current[`wall${wallCounter.current}`].y=yposition
      wallRef.current[`wall${wallCounter.current}`].h=SCREEN_HEIGHT/gbHeight
      wallRef.current[`wall${wallCounter.current}`].w=SCREEN_WIDTH/gdWidth
      wallRef.current[`wall${wallCounter.current}`].color = colorZ
    }  
  }

  console.log(wallRef)
  console.log(notawallRef)

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
               
          }
        }
  }




  class TimeMap{
    constructor(x,y,color)
    {
    this.x = x;
    this.y = y;
    this.color = color;
    }
  }


  return (
   <canvas
  //  tabIndex = "0"
   ref = {canvasRef}
   />
  )
}

export default BlocksForGameBoard;