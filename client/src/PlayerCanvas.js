import React, { useState, useEffect, useRef } from "react";

function PlayerCanvas({wallRef}){

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
    // canvas.style.border = '10px solid yellow'
    canvas.style.left = `${window.innerWidth*(5/20)}px`;
    canvas.style.top = `${window.innerHeight*(2/20)}px`;
    canvas.style['z-index'] = 10;
 
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
      speedx:10,
      speedy:10,
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
      boundaryRightWall()
      requestAnimationFrame(update)
    }

 
    update()

  },[])

   
  function boundaryLeftWall(){
    let i = 1;
    for (let key in wallRef.current){
      if (`x${i}` in wallRef.current){
       console.log(pacManRef.current.x+pacManRef.current.w)
       if((pacManRef.current.x+pacManRef.current.w)<(wallRef.current[`x${i}`])){
         console.log('not a wall')
            }else{
            pacManRef.current.x=wallRef.current[`x${i}`]-pacManRef.current.w
            console.log('wall')
              }
      }
      i++
    }
}

function boundaryRightWall(){
  let i = 1;
  for (let key in wallRef.current){
    if (`x${i}` in wallRef.current){
     if((pacManRef.current.x)>(wallRef.current[`x${i}`]+wallRef.current["width"])){
       console.log('not a wall')
          }else{
            pacManRef.current.x=wallRef.current[`x${i}`]+wallRef.current["width"]
            }
    }
    i++
  }
}

function boundaryTopWall(){
let i = 0;
for (let key in wallRef.current){

  if (`y${i}` in wallRef.current){
    if(pacManRef.current.y +pacManRef.current.h< wallRef.current[`y${i}`])
{   console.log('not a wall') } else {
  pacManRef.current.y =  wallRef.current[`y${i}`] - pacManRef.current.h
    }

  }
  i++
}
}


function boundaryBottomWall(){
let i = 0;
for (let key in wallRef.current){
  console.log(wallRef.current)

  if (`y${i}` in wallRef.current){
    if(pacManRef.current.y > wallRef.current[`y${i}`] + wallRef.current[`height`] )
{   console.log('not a wall') } else {
  pacManRef.current.y =  wallRef.current[`y${i}`] + wallRef.current[`height`]
    }
  }
  i++
}
}



  const moveRight = () => {
    pacManRef.current.movex = pacManRef.current.speedx
    pacManRef.current.movey = 0

  }

  const moveLeft = () => {
    pacManRef.current.movex = -pacManRef.current.speedx
    pacManRef.current.movey = 0

  }

  const moveDown = () => {
    pacManRef.current.movey = pacManRef.current.speedy
    pacManRef.current.movex = 0

  }

  const moveUp= () => {
    pacManRef.current.movey =  -pacManRef.current.speedy
    pacManRef.current.movex = 0


  }

  const movePac = () => {
    // console.log(pacManRef.current.x)
    // console.log(window.innerWidth*(5/20))
    pacManRef.current.x += pacManRef.current.movex
    pacManRef.current.y += pacManRef.current.movey

   



    // boundaryLeft()

  }

  // const boundaryLeft = () => {
  //   if(pacManRef.current.x < 0-pacManRef.current.w){
  //     pacManRef.current.x = SCREEN_WIDTH 
  //   }
  // }

  // const boundaryRight = () => {
  //   if(pacManRef.current.x > SCREEN_WIDTH+pacManRef.current.w){
  //     pacManRef.current.x = 0 
  //   }
  // }

  // const boundaryUp = () => {
  //   if(pacManRef.current.y < 0-pacManRef.current.h){
  //     pacManRef.current.y = SCREEN_HEIGHT 
  //   }
  // }


  // const boundaryDown = () => {
  //   if(pacManRef.current.y > SCREEN_HEIGHT+pacManRef.current.h){
  //     pacManRef.current.y = 0
  //   }
  // }




  

  

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