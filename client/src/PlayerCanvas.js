import React, { useState, useEffect, useRef } from "react";

function PlayerCanvas(){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const pacManRef = useRef(null)
  const imageRef = useRef("https://i.imgur.com/nz1gE0p.jpg")

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight *2;
    canvas.style.width = `${window.innerWidth*(10/20)}px`
    canvas.style.height = `${window.innerHeight*(16/20)}px`
    // canvas.style.backgroundColor = "blue";
    canvas.style.position = "absolute";
    canvas.style.left = `${window.innerWidth*(5/20)}px`;
    canvas.style.top = `${window.innerHeight*(2/20)}px`;
    canvas.style['z-index'] = 2;
 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    const pacMan = {
      x:100,
      y:100,
      w:SCREEN_WIDTH*(1.6/20),
      h:SCREEN_HEIGHT*(2/20),
      movex:0,
      movey:0,
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
      movePac()
      requestAnimationFrame(update)
    }

    update()

  },[])

  const moveRight = () => {
    pacManRef.current.movex = 10
    pacManRef.current.movey = 0
  }

  const moveLeft = () => {
    pacManRef.current.movex = -10
    pacManRef.current.movey = 0
  }

  const moveDown = () => {
    pacManRef.current.movey = 10
    pacManRef.current.movex = 0
  }

  const moveUp= () => {
    pacManRef.current.movey =  -10
    pacManRef.current.movex = 0
  }

  const movePac = () => {
    console.log(pacManRef.current.x)
    console.log(window.innerWidth*(5/20))
    pacManRef.current.x += pacManRef.current.movex
    pacManRef.current.y += pacManRef.current.movey

    boundaryLeft()
    boundaryUp()
    boundaryRight()
    boundaryDown()
  }

  const boundaryLeft = () => {
    console.log(pacManRef.current.x) 
    if(pacManRef.current.x < 0-pacManRef.current.w){
      pacManRef.current.x = SCREEN_WIDTH 
    }
  }

  const boundaryRight = () => {
    console.log(pacManRef.current.x) 
    if(pacManRef.current.x > SCREEN_WIDTH+pacManRef.current.w){
      pacManRef.current.x = 0 
    }
  }

  const boundaryUp = () => {
    console.log(pacManRef.current.x) 
    if(pacManRef.current.y < 0-pacManRef.current.h){
      pacManRef.current.y = SCREEN_HEIGHT 
    }
  }


  const boundaryDown = () => {
    console.log(pacManRef.current.x) 
    if(pacManRef.current.y > SCREEN_HEIGHT+pacManRef.current.h){
      pacManRef.current.y = 0
    }
  }


  

  

  const movementFunction = (e) => {
    console.log(e)
    if(e.key === "d"){
      moveRight()
      console.log("yo yo yo")
    }else if(e.key === "a"){
      moveLeft()
      
    }else if(e.key === "s"){
      moveDown()
    }else if(e.key === "w"){
      moveUp()
    }

  }
  
  const keyUp = () => {}
  return (
   <canvas
   tabIndex = "0"
   onKeyDown = {movementFunction}
   onKeyUp = {keyUp}
   ref = {canvasRef}
   />
  )
}

export default PlayerCanvas;