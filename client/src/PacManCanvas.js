import React, { useEffect, useRef } from "react";

function PacManCanvas({
  wallRef, pacManRef, 
  pacManStartPositionRef, SCREEN_WIDTH, SCREEN_HEIGHT,
  BLOCK_WIDTH, BLOCK_HEIGHT
}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const directionRef = useRef("notMoving")
  const imageRef = useRef("https://i.imgur.com/1qdpodV.png")

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH*(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(18/20)}px`
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 10;
 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    const pacMan = {
      x:BLOCK_WIDTH+(BLOCK_WIDTH*(3/20)),
      y:BLOCK_HEIGHT+(BLOCK_HEIGHT*(3/20)),
      w:BLOCK_WIDTH*(14/20),
      h:BLOCK_HEIGHT*(14/20),
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

      }
    }

    const update = () => {
      drawPacMan()
      moveObject(pacManRef)
      boundaries(pacManRef,wallRef)
      boundariesOffCanvas(pacManRef,canvas)
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

function boundariesOffCanvas(refObject){

  if(refObject.current.x<0){
    refObject.current.x = SCREEN_WIDTH
  }
  //The plus the refObject width at the end is needed so the functions dont conflict. If you remove it one side, will not work
  if(refObject.current.x+refObject.current.w>SCREEN_WIDTH+refObject.current.w)
  {refObject.current.x = 0}
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

export default PacManCanvas;