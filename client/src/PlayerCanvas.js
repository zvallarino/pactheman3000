import React, { useState, useEffect, useRef } from "react";

function PlayerCanvas({wallRef}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const pacManRef = useRef(null)
  const directionRef = useRef("notMoving")
  const imageRef = useRef("https://i.imgur.com/1qdpodV.png")

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
    canvas.style['z-index'] = 10;
 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    const pacMan = {
      x:SCREEN_WIDTH*(8/20),
      y:SCREEN_HEIGHT*(14/20),
      w:SCREEN_WIDTH*(1.6/20),
      h:SCREEN_HEIGHT*(2/20),
      movex:0,
      movey:0,
      speedx:5,
      speedy:5,
    }

    pacManRef.current = pacMan

    const drawPacMan = () => {
      let pacManImg = new Image();
      pacManImg.src = imageRef.current;
      pacManImg.onload = function(){
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
        contextRef.current.drawImage(pacManImg,pacManRef.current.x,pacManRef.current.y,pacManRef.current.w,pacManRef.current.h)
        contextRef.current.strokeStyle ='red';
        contextRef.current.strokeRect(pacManRef.current.x,pacManRef.current.y,pacManRef.current.w,pacManRef.current.h)
      }
    }
    


    const update = () => {
      drawPacMan()
      movePac()
      boundariesAll(pacManRef)
      requestAnimationFrame(update)
    }
 
    update()

  },[])

function boundariesAll(refObject){
  let i = 1;
  for (let key in wallRef.current){
    if (`x${i}` in wallRef.current){
      if (`y${i}` in wallRef.current){
     if(
      (refObject.current.y > wallRef.current[`y${i}`] + (wallRef.current[`height`]))
      ||
      refObject.current.y +refObject.current.h< wallRef.current[`y${i}`]
      ||
      (refObject.current.x+refObject.current.w)<(wallRef.current[`x${i}`])
      ||
      (refObject.current.x)>(wallRef.current[`x${i}`]+wallRef.current["width"])
       ){
          }else{
            borders(i,refObject)
            }
    }}
    i++
  }
    }

function borders(i,refObject){
  if(directionRef.current === "right"){
    refObject.current.x -=refObject.current.speedx
    refObject.current.movex=0
  }else if(directionRef.current === "left"){
    refObject.current.x+=refObject.current.speedx
    refObject.current.movex=0
  }else if (directionRef.current === "up"){
    refObject.current.y +=refObject.current.speedy
    refObject.current.movey = 0
  }else if(directionRef.current === "down"){
    refObject.current.y -=refObject.current.speedy
    refObject.current.movey = 0
  }
}


  const moveRight = () => {
    pacManRef.current.movex = pacManRef.current.speedx
    pacManRef.current.movey = 0
    directionRef.current = "right"
  }

  const moveLeft = () => {
    pacManRef.current.movex = -pacManRef.current.speedx
    pacManRef.current.movey = 0
    directionRef.current = "left"
  }

  const moveDown = () => {
    pacManRef.current.movey = pacManRef.current.speedy
    pacManRef.current.movex = 0
    directionRef.current = "down"
  }

  const moveUp= () => {
    pacManRef.current.movey =  -pacManRef.current.speedy
    pacManRef.current.movex = 0
    directionRef.current = "up"
  }
  
  const stopMoving= () => {
    pacManRef.current.movey =  0
    pacManRef.current.movex = 0
    directionRef.current = "notMoving"
  }
  const movePac = () => {
    pacManRef.current.x += pacManRef.current.movex
    pacManRef.current.y += pacManRef.current.movey

  }

  const movementFunction = (e) => {

    if(e.key === "d"){
      moveRight()
    }else if(e.key === "a"){
      moveLeft()
    }else if(e.key === "s"){
      moveDown()
    }else if(e.key === "w"){
      moveUp()
    }else if(e.key === "p"){
      stopMoving()
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