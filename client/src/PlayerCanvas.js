import React, { useState, useEffect, useRef } from "react";

function PlayerCanvas({wallRef}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const pacManRef = useRef(null)
  const directionRef = useRef("notMoving")
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
      y:SCREEN_HEIGHT*(10/20),
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
      boundaryUpDown()
      requestAnimationFrame(update)
    }

 
    update()

  },[])

   
  function boundaryLeftRight(){
    let i = 1;
    for (let key in wallRef.current){
      if (`x${i}` in wallRef.current){
        if (`y${i}` in wallRef.current){
       if(
         (pacManRef.current.x+pacManRef.current.w)<(wallRef.current[`x${i}`])
          ||
          (pacManRef.current.x)>(wallRef.current[`x${i}`]+wallRef.current["width"])
         ){
         console.log('not a wall')
            }else{
            borders(i)
              }
      }}
      i++
    }
}

function boundaryUpDown(){
  let i = 1;
  for (let key in wallRef.current){
    if (`x${i}` in wallRef.current){
      if (`y${i}` in wallRef.current){
     if(
      (pacManRef.current.y > wallRef.current[`y${i}`] + (wallRef.current[`height`]))
      ||
      pacManRef.current.y +pacManRef.current.h< wallRef.current[`y${i}`]
      ||
      (pacManRef.current.x+pacManRef.current.w)<(wallRef.current[`x${i}`])
      ||
      (pacManRef.current.x)>(wallRef.current[`x${i}`]+wallRef.current["width"])
       ){
        // console.log(pacManRef.current.y)
        // console.log(wallRef.current[`y${i}`] + (wallRef.current[`height`]))
      //  console.log('not a wall')
          }else{
            borders(i)
          // console.log("wall")
            }
    }}
    i++
  }
    }
    



function borders(i){
  if(directionRef.current === "right"){
    pacManRef.current.x -=pacManRef.current.speedx
    pacManRef.current.movex=0
  }else if(directionRef.current === "left"){
    pacManRef.current.x+=pacManRef.current.speedx
    pacManRef.current.movex=0
  }else if (directionRef.current === "up"){
    pacManRef.current.y +=pacManRef.current.speedy
    pacManRef.current.movey = 0
  }else if(directionRef.current === "down"){
    pacManRef.current.y -=pacManRef.current.speedy
    pacManRef.current.movey = 0
  }
}

function bordersUpAndDown(i){
  console.log(i)
  console.log(`y${i}`)
  if(directionRef.current === "up"){
    pacManRef.current.y=wallRef.current[`y${i}`]-pacManRef.current.h
  }
}


// function boundaryDown(){
//   let i = 0;
//   for (let key in wallRef.current){
//     if (`y${i}` in wallRef.current){
//       if(pacManRef.current.y +pacManRef.current.h< wallRef.current[`y${i}`])
//   {   console.log('not a wall') } else {
//     pacManRef.current.y =  wallRef.current[`y${i}`] - pacManRef.current.h
//       }
  
//     }
//     i++
//   }
//   }


// function boundaryLeft(){
//   let i = 1;
//   for (let key in wallRef.current){
//     if (`x${i}` in wallRef.current){
      
//      if((pacManRef.current.x)>(wallRef.current[`x${i}`]+wallRef.current["width"])
      
     
//      ){
//        console.log('not a wall')
//           }else{
//             pacManRef.current.x=wallRef.current[`x${i}`]+wallRef.current["width"]
//             }
//     }
//     i++
//   }
// }




// function boundaryUp(){
// let i = 0;
// for (let key in wallRef.current){
//   console.log(wallRef.current)

//   if (`y${i}` in wallRef.current){
//     if(pacManRef.current.y > wallRef.current[`y${i}`] + wallRef.current[`height`] )
// {   console.log('not a wall') } else {
//   pacManRef.current.y =  wallRef.current[`y${i}`] + wallRef.current[`height`]
//     }
//   }
//   i++
// }
// }



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