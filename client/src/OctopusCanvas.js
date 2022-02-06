import React, { useState, useEffect, useRef } from "react";

function OctopusCanvas({
  octopus, wallRef, pacManRef, pacManStartPositionRef, 
  livesCount, canEatOctopusRef, SCREEN_WIDTH, 
  SCREEN_HEIGHT, gameLostRef, setLosingState
}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const octopusRef = useRef(null)
  const octupusStartRef = useRef({})
  const directionRef = useRef("up")
  const imageRef = useRef("https://i.imgur.com/OYefjqj.png")


  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH*(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(18/20)}px`
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 9;
 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context
    
    octopusRef.current = octopus
    octupusStartRef.current.x = octopus.x
    octupusStartRef.current.y = octopus.y




    const drawOctopus = (octopusRef) => {
      let octo = new Image();
      octo.src = octopusRef.current.image;

      octo.onload = function(){
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
        contextRef.current.drawImage(octo,octopusRef.current.x,octopusRef.current.y,octopusRef.current.w,octopusRef.current.h)
      }
    }
    

    
    const update = () => {
      drawOctopus(octopusRef)
      moveObject(octopusRef)
      boundaries(octopusRef)
      boundariesOffCanvas(octopusRef)
      HitGhost(pacManRef, octopusRef, gameLostRef)
      requestAnimationFrame(update)
    }

    

 
    update()
    moveUp(octopusRef)

  },[])

  const directionalArray = ["up","down","left","right"]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const currentIndex = (direction)=>{
    const isLargeNumber = (element) => element === direction;
    return directionalArray.findIndex(isLargeNumber)
  }

  const directionalPicker = (indexNumber) =>{
    //Basically how this works, it sets the newNumber to the indexNumber. If The new number is equal to the indexNumber, it runs again. 
    let newNumber = indexNumber
    let newDirectionIndex = 0

    const recursiveFunction =(indexNumber)=>{
      if(indexNumber !== newNumber){
        newDirectionIndex = indexNumber
        return indexNumber
      }else{
        let indexNumberZ = getRandomInt(directionalArray.length)
        recursiveFunction(indexNumberZ)
      }
    }

  recursiveFunction(indexNumber)
  return newDirectionIndex
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
  

const moveOctupus = (directionIndex,refObject) =>{
    let newDirection = directionalArray[directionIndex]
    if(newDirection === "right"){
      moveRight(refObject)
    }else if(newDirection === "left"){
      moveLeft(refObject)
    }else if (newDirection === "up"){
      moveUp(refObject)
    }else if(newDirection === "down"){
      moveDown(refObject)
    }
    return newDirection
  }
  

function boundaries(refObject){
  let i = 1;
  for (let key in wallRef.current){
      if(
          refObject.current.y > wallRef.current[key].y + wallRef.current[key].h
          ||
          refObject.current.y + refObject.current.h < wallRef.current[key].y
          ||
          refObject.current.x + refObject.current.w < wallRef.current[key].x
          ||
          refObject.current.x > wallRef.current[key].x + wallRef.current[key].w
              ){
      }else{
        borders(refObject)
      }
      }
  
    }

    
function boundariesOffCanvas(refObject){

  if(refObject.current.x<0){
    refObject.current.x = SCREEN_WIDTH
  }
  //The plus the refObject width at the end is needed so the functions dont conflict. If you remove it one side, will not work. 
  if(refObject.current.x+refObject.current.w>SCREEN_WIDTH+refObject.current.w)
  {refObject.current.x = 0}
}

    function HitGhost(refObject,refObject2){

         
          if
          (refObject.current.x+refObject.current.w>refObject2.current.x
          &&
          refObject.current.x<refObject2.current.x+refObject2.current.w
          &&
          refObject.current.y+refObject.current.h>refObject2.current.y
          &&
          refObject.current.y<refObject2.current.y+refObject2.current.h)
          {
            if(livesCount.current===0){
              gameLostRef.current = true
              setLosingState(dogs =>!dogs)
              console.log(gameLostRef.current)
              console.log("game over")
            }

            OctupusEatOrNot(canEatOctopusRef,pacManRef,pacManStartPositionRef,octopusRef,octupusStartRef)

          }else{
            // console.log("no")
          }
          
        }
    

function OctupusEatOrNot(reference,pacman,pacmanstart, octopus,octopusStartPosition){
  if(reference.current){
    console.log(reference.current)
    octopus.current.x = octopusStartPosition.current.x
    octopus.current.y = octopusStartPosition.current.y
  }else{
    pacman.current.x = pacmanstart.current.x
    pacman.current.y = pacmanstart.current.y
     livesCount.current-=1
  }
}

 


function borders(refObject ){
  if(directionRef.current === "right"){
    refObject.current.x -=refObject.current.speedx
    refObject.current.movex=0
    let currentDirection = currentIndex(directionRef.current)
    let newDirection = directionalPicker(currentDirection)
    moveOctupus(newDirection,refObject)
  }else if(directionRef.current === "left"){
    refObject.current.x+=refObject.current.speedx
    refObject.current.movex=0
    let currentDirection = currentIndex(directionRef.current)
    let newDirection = directionalPicker(currentDirection)
    moveOctupus(newDirection,refObject)
  }else if (directionRef.current === "up"){
    refObject.current.y +=refObject.current.speedy
    refObject.current.movey = 0
    let currentDirection = currentIndex(directionRef.current)
    let newDirection = directionalPicker(currentDirection)
    moveOctupus(newDirection,refObject)
  }else if(directionRef.current === "down"){
    refObject.current.y -=refObject.current.speedy
    refObject.current.movey = 0
    let currentDirection = currentIndex(directionRef.current)
    let newDirection = directionalPicker(currentDirection)
    moveOctupus(newDirection,refObject)
  }
}

  const moveObject = (refObject) => {
    refObject.current.x += refObject.current.movex
    refObject.current.y += refObject.current.movey
  }
  

  return (
   <canvas
   ref = {canvasRef}
   />
  )
}

export default OctopusCanvas;