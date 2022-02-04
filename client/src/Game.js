import React, { useState, useEffect, useRef } from "react";
import BlocksForGameBoard from "./BlocksForGameBoard";
import GameArea from "./GameArea";
import PlayerCanvas from "./PlayerCanvas";
import BallsCanvas from "./BallsCanvas";
import OctopusCanvas from "./OctopusCanvas";

function Game(){

  const wallRef = useRef({})
  const pacManRef = useRef(null)
  const pacManStartPositionRef = useRef({})
  const notawallRef = useRef({})
  const wallCounter = useRef(0)
  const ballCounter = useRef(0)
  const livesCount = useRef(5)
  const canEatOctopusRef = useRef(false)

  return (
    <>
    <PlayerCanvas
    pacManRef = {pacManRef}
    wallRef = {wallRef}
    notawallRef = {notawallRef}
    pacManStartPositionRef = {pacManStartPositionRef} 
    
    />
    <OctopusCanvas
    wallRef = {wallRef}
    pacManRef = {pacManRef}
    pacManStartPositionRef = {pacManStartPositionRef}
    livesCount = {livesCount}
    canEatOctopusRef = {canEatOctopusRef}
    />
    <BallsCanvas 
    pacManRef = {pacManRef}
    notawallRef = {notawallRef} 
    canEatOctopusRef = {canEatOctopusRef}
    />
    <BlocksForGameBoard 
    wallRef = {wallRef}
    notawallRef = {notawallRef} 
    wallCounter = {wallCounter}
    ballCounter ={ballCounter} 
    />
    <GameArea />
    </>
  )
}

export default Game;