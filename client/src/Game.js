import React, { useRef } from "react";
import BlocksForGameBoard from "./BlocksForGameBoard";
import GameArea from "./GameArea";
import PlayerCanvas from "./PlayerCanvas";
import BallsCanvas from "./BallsCanvas";
import OctopusFactory from "./OctopusFactory";


function Game(){

  const wallRef = useRef({})
  const notawallRef = useRef({})
  const wallCounter = useRef(0)
  const ballCounter = useRef(0)

  const pacManRef = useRef(null)
  const pacManStartPositionRef = useRef({})
  const canEatOctopusRef = useRef(false)

  const livesCount = useRef(5)


  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;



  return (
    <>
    <PlayerCanvas
    pacManRef = {pacManRef}
    wallRef = {wallRef}
    notawallRef = {notawallRef}
    pacManStartPositionRef = {pacManStartPositionRef} 

    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <OctopusFactory
    wallRef = {wallRef}
    pacManRef = {pacManRef}
    pacManStartPositionRef = {pacManStartPositionRef}
    livesCount = {livesCount}
    canEatOctopusRef = {canEatOctopusRef}
 
    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />
    
    <BallsCanvas 
    pacManRef = {pacManRef}
    notawallRef = {notawallRef} 
    canEatOctopusRef = {canEatOctopusRef}

    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <BlocksForGameBoard 
    wallRef = {wallRef}
    notawallRef = {notawallRef} 
    wallCounter = {wallCounter}
    ballCounter ={ballCounter} 

    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />
    
    <GameArea
    
    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />
    </>
  )
}

export default Game;