import React, { useState, useEffect, useRef } from "react";
import BlocksForGameBoard from "./BlocksForGameBoard";
import GameArea from "./GameArea";
import PlayerCanvas from "./PlayerCanvas";

function Game(){

  const wallRef = useRef({})

  return (
    <>
    <PlayerCanvas  wallRef = {wallRef}/>
    <BlocksForGameBoard wallRef = {wallRef}/>
    <GameArea />
    </>
  )
}

export default Game;