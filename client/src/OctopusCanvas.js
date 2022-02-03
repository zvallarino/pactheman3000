import React, { useState, useEffect, useRef } from "react";

function OctopusCanvas({wallRef}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const octupusRef = useRef(null)
  const directionRef = useRef("up")
  const imageRef = useRef("https://i.imgur.com/OYefjqj.png")

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
    canvas.style['z-index'] = 9;
 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    const octopus = {
      x:SCREEN_WIDTH*(4.5/20),
      y:SCREEN_HEIGHT*(6.5/20),
      w:SCREEN_WIDTH*(1.6/20),
      h:SCREEN_HEIGHT*(2/20),
      movex:0,
      movey:0,
      speedx:5,
      speedy:5,
    }

  octupusRef.current = octopus

    const drawOctopus = () => {
      let octopusImg = new Image();
      octopusImg.src = imageRef.current;
      octopusImg.onload = function(){
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
        contextRef.current.drawImage(octopusImg,octupusRef.current.x,octupusRef.current.y,octupusRef.current.w,octupusRef.current.h)
      }
    }
    

    
    const update = () => {
      // drawOctopus()
      // moveObject(octupusRef)
      // boundaries(octupusRef)
      requestAnimationFrame(update)
    }

    

 
    update()

  },[])

  const directionalArray = ["up","down","left","right"]

  let currentDirection = "right"


  // if wall pick a new direction that does not include the last one

  //

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const currentIndex = (direction)=>{
    const isLargeNumber = (element) => element === direction;
    return directionalArray.findIndex(isLargeNumber)
  }

  // console.log(currentIndex(currentDirection))

  const directionalPicker = (indexNumber) =>{
    //Basically how this works, it sets the newNumber to the indexNumber. If The new number is equal to the indexNumber, it runs again. 
    let newNumber = indexNumber
    let newDirectionIndex = 0

    const recursiveFunction =(indexNumber)=>{
      if(indexNumber !== newNumber){
        console.log(indexNumber)
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

  console.log(directionalPicker(currentIndex(currentDirection)))

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
    console.log(newDirection)
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
  
  const keyUp = () => {}
  return (
   <canvas
   ref = {canvasRef}
   />
  )
}

export default OctopusCanvas;