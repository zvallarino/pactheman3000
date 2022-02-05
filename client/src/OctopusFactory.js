import React from "react";
import OctopusCanvas from "./OctopusCanvas";

function OctopusFactory (
  {wallRef, pacManRef, pacManStartPositionRef, 
    livesCount, canEatOctopusRef, SCREEN_WIDTH, 
    SCREEN_HEIGHT}){

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
    SCREEN_WIDTH*(9.5/20),
    SCREEN_HEIGHT*(6/20),
    SCREEN_WIDTH*(1.1/20),
    SCREEN_HEIGHT*(1.1/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/OYefjqj.png"
  )

  let blueOctopus = new Octopus(
    SCREEN_WIDTH*(11/20),
    SCREEN_HEIGHT*(9/20),
    SCREEN_WIDTH*(1.1/20),
    SCREEN_HEIGHT*(1.1/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/DVnl0nK.png"
  )

  let yellowOctopus = new Octopus(
    SCREEN_WIDTH*(9.5/20),
    SCREEN_HEIGHT*(9/20),
    SCREEN_WIDTH*(1.1/20),
    SCREEN_HEIGHT*(1.1/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/vW4vDXY.png"
  )

  let redOctopus = new Octopus(
    SCREEN_WIDTH*(8/20),
    SCREEN_HEIGHT*(9/20),
    SCREEN_WIDTH*(1.1/20),
    SCREEN_HEIGHT*(1.1/20),
    0,
    0,
    5, 
    5, 
    "https://i.imgur.com/EIR6NAz.png"
  )

  

  return (
    <>
    <OctopusCanvas
      octopus = {redOctopus}

      wallRef = {wallRef}
      pacManRef = {pacManRef}
      pacManStartPositionRef = {pacManStartPositionRef}
      livesCount = {livesCount}
      canEatOctopusRef = {canEatOctopusRef}
  
      SCREEN_WIDTH = {SCREEN_WIDTH}
      SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <OctopusCanvas
      octopus = {blueOctopus}

      wallRef = {wallRef}
      pacManRef = {pacManRef}
      pacManStartPositionRef = {pacManStartPositionRef}
      livesCount = {livesCount}
      canEatOctopusRef = {canEatOctopusRef}
  
      SCREEN_WIDTH = {SCREEN_WIDTH}
      SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <OctopusCanvas
      octopus = {greenOctopus}

      wallRef = {wallRef}
      pacManRef = {pacManRef}
      pacManStartPositionRef = {pacManStartPositionRef}
      livesCount = {livesCount}
      canEatOctopusRef = {canEatOctopusRef}
  
      SCREEN_WIDTH = {SCREEN_WIDTH}
      SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <OctopusCanvas
      octopus = {yellowOctopus}

      wallRef = {wallRef}
      pacManRef = {pacManRef}
      pacManStartPositionRef = {pacManStartPositionRef}
      livesCount = {livesCount}
      canEatOctopusRef = {canEatOctopusRef}
  
      SCREEN_WIDTH = {SCREEN_WIDTH}
      SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />
    
    </>

  )
}

export default OctopusFactory;