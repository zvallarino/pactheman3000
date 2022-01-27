import React, { useState, useEffect, useRef } from "react";

function BlocksForGameBoard(){

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
    canvas.style.backgroundColor = "yellow";
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(2/20)}px`;
    canvas.style['z-index'] = 1;

    const context = canvas.getContext("2d");
    context.scale(2,2); 
    contextRef.current = context

    const update = () => {
      createBoard(4)
      // drawRectangle()

    }

    update()

  },[])


  class TimeMap{
    constructor(x,y,color)
    {
    this.x = x;
    this.y = y;
    this.color = color;
    }
  }

  

  const createBoard = (numberZ) =>{
    let i = 0
    while(numberZ>0){
      drawRectangle(i)
      console.log(numberZ)
      numberZ--
      i++
    }
    
  }

  const drawRectangle = (numberZ) => {
    console.log(numberZ)
    contextRef.current.beginPath();
    // contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    contextRef.current.rect((numberZ*SCREEN_WIDTH * (5/20)), 0, SCREEN_WIDTH * (5/20), SCREEN_HEIGHT * (5/20));
    contextRef.current.fillStyle = "green"
    contextRef.current.fill();
  }

  const vertical

  return (
   <canvas
  //  tabIndex = "0"
   ref = {canvasRef}
   />
  )
}

export default BlocksForGameBoard;