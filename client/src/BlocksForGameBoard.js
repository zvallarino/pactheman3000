import React, { useState, useEffect, useRef } from "react";

function BlocksForGameBoard({wallRef}){

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
      // drawRectangle()

    }

    update()

  },[])

  let gameBoard = [
    [1,1,1,1,1,1],
    [1,0,0,0,0,1],
    [1,0,1,1,0,1],
    [1,1,1,1,0,1],
    [1,1,0,0,0,1],
    [1,1,1,1,1,1]
  ]

  let gdWidth = gameBoard[0].length
  let gbHeight = gameBoard.length

  const drawRectangle = (xposition,yposition,colorZ,counter) => {

    // console.log(wallRef.current)
    // // console.log(numberZ)
    if(!counter){
    contextRef.current.beginPath();
    contextRef.current.rect(xposition, yposition, SCREEN_WIDTH/gdWidth, SCREEN_HEIGHT/gbHeight);
    contextRef.current.fillStyle = colorZ
    contextRef.current.fill();}

    if(counter){
      contextRef.current.beginPath();
      contextRef.current.rect(xposition, yposition, SCREEN_WIDTH/gdWidth, SCREEN_HEIGHT/gbHeight);
      contextRef.current.fillStyle = colorZ
      contextRef.current.fill();
      wallRef.current[`x${counter}`] = xposition
      wallRef.current[`y${counter}`] = yposition}
  }

  const gameBoardLoop = (arrayZ) =>{
    let WallCounter = 0;

    wallRef.current.width = SCREEN_WIDTH/gdWidth
    wallRef.current.height = SCREEN_HEIGHT/gbHeight

    for(let i = 0; i<arrayZ.length;i++){
      let yStartPosition = (i/arrayZ.length)* SCREEN_HEIGHT;
      for(let j = 0; j<arrayZ[i].length;j++){
        let xStartPosition = (j/arrayZ[i].length)* SCREEN_WIDTH;
        if(arrayZ[i][j]===0){
          drawRectangle(xStartPosition,yStartPosition,"yellow",)}
        if(arrayZ[i][j]===1){
          WallCounter += 1;
          drawRectangle(xStartPosition,yStartPosition,"blue",WallCounter)}
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