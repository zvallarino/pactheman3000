import React from "react";
import OctopusCanvas from "./OctopusCanvas";

function OctopusFactory (
  {wallRef, pacManRef, pacManStartPositionRef, 
    livesCount, canEatOctopusRef, SCREEN_WIDTH, 
    SCREEN_HEIGHT, BLOCK_WIDTH,
    BLOCK_HEIGHT, gameLostRef, setLosingState, setLostLifeState, octopusHit
  }){


  

  class Octopus{
    constructor(x,y,w,h,movex,movey,speedx,speedy,image){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.movex = movex;
      this.movey = movey;
      this.speedx = speedx;
      this.speedy = speedy;
      this.image = image;
    }
  }

  let greenOctopus = new Octopus(
    BLOCK_WIDTH*9+(BLOCK_WIDTH*3/20),
    BLOCK_HEIGHT*7+(BLOCK_HEIGHT*2/20),
    BLOCK_WIDTH*(14/20),
    BLOCK_HEIGHT*(14/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/OYefjqj.png"
  )

  let blueOctopus = new Octopus(
    BLOCK_WIDTH*8+(BLOCK_WIDTH*3/20),
    BLOCK_HEIGHT*10+(BLOCK_HEIGHT*2/20),
    BLOCK_WIDTH*(14/20),
    BLOCK_HEIGHT*(14/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/DVnl0nK.png"
  )

  let yellowOctopus = new Octopus(
    BLOCK_WIDTH*9+(BLOCK_WIDTH*3/20),
    BLOCK_HEIGHT*10+(BLOCK_HEIGHT*2/20),
    BLOCK_WIDTH*(14/20),
    BLOCK_HEIGHT*(14/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/vW4vDXY.png"
  )

  let redOctopus = new Octopus(
    BLOCK_WIDTH*10+(BLOCK_WIDTH*3/20),
    BLOCK_HEIGHT*10+(BLOCK_HEIGHT*2/20),
    BLOCK_WIDTH*(14/20),
    BLOCK_HEIGHT*(14/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/EIR6NAz.png"
  )

    const octopi = [redOctopus,yellowOctopus,blueOctopus,greenOctopus]

    let octiCollection = octopi.map((octopus,index)=><OctopusCanvas
    key = {index}
    octopus = {octopus}
    octopusHit = {octopusHit}
    

    wallRef = {wallRef}
    pacManRef = {pacManRef}
    pacManStartPositionRef = {pacManStartPositionRef}
    livesCount = {livesCount}
    gameLostRef = {gameLostRef}
    setLosingState = {setLosingState}
    setLostLifeState = {setLostLifeState}
    
    canEatOctopusRef = {canEatOctopusRef}

    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
  />)
  

  return (
    <>
    {octiCollection}
    </>

  )
}

export default OctopusFactory;