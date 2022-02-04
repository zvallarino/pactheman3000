import React, { useEffect, useRef } from "react";

function PlayerCanvas({wallRef, notawallRef, pacManRef, pacManStartPositionRef}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
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
      x:SCREEN_WIDTH*(14/20),
      y:SCREEN_HEIGHT*(4.5/20),
      w:SCREEN_WIDTH*(1.6/20),
      h:SCREEN_HEIGHT*(2/20),
      movex:0,
      movey:0,
      speedx:5,
      speedy:5,
    }

    pacManStartPositionRef.current.x =  pacMan.x
    pacManStartPositionRef.current.y =  pacMan.y

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
      moveObject(pacManRef)
      boundaries(pacManRef,wallRef)

      
      requestAnimationFrame(update)
    }
 
    update()

  },[])

function boundaries(refObject,refObject2){
  let i = 1;
  for (let key in refObject2.current){
      if(
          refObject.current.y > refObject2.current[key].y + refObject2.current[key].h
          ||
          refObject.current.y + refObject.current.h < refObject2.current[key].y
          ||
          refObject.current.x + refObject.current.w < refObject2.current[key].x
          ||
          refObject.current.x > refObject2.current[key].x + refObject2.current[key].w
              ){
                
      }else{
        borders(refObject)
      }
      }
    }

    function boundariesForBalls(refObject,refObject2){
      for (let key in refObject2.current){
          if(
              refObject.current.y > refObject2.current[key].y + refObject2.current[key].h
              ||
              refObject.current.y + refObject.current.h < refObject2.current[key].y
              ||
              refObject.current.x + refObject.current.w < refObject2.current[key].x
              ||
              refObject.current.x > refObject2.current[key].x + refObject2.current[key].w
                  ){
                    
          }
          }
        }

function borders(refObject){
  
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


  const moveRight = (refObject) => {
    refObject.current.movex = refObject.current.speedx
    refObject.current.movey = 0
    directionRef.current = "right"
  }

  const moveLeft = (refObject) => {
    refObject.current.movex = -refObject.current.speedx
    refObject.current.movey = 0
    directionRef.current = "left"
  }

  const moveDown = (refObject) => {
    refObject.current.movey = refObject.current.speedy
    refObject.current.movex = 0

    directionRef.current = "down"
  }

  const moveUp = (refObject) => {
    refObject.current.movey =  -refObject.current.speedy
    refObject.current.movex = 0

    directionRef.current = "up"
  }
  
  const stopMoving= (refObject) => {
    refObject.current.movey =  0
    refObject.current.movex = 0

    directionRef.current = "notMoving"
  }

  const moveObject = (refObject) => {
    refObject.current.x += refObject.current.movex
    refObject.current.y += refObject.current.movey
  }

  const movementFunction = (e) => {

    if(e.key === "d"){
      moveRight(pacManRef)
    }else if(e.key === "a"){
      moveLeft(pacManRef)
    }else if(e.key === "s"){
      moveDown(pacManRef)
    }else if(e.key === "w"){
      moveUp(pacManRef)
    }else if(e.key === "p"){
      stopMoving(pacManRef)
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