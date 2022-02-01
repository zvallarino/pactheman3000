import React, { useState, useEffect, useRef } from "react";
import BlocksForGameBoard from "./BlocksForGameBoard";
import GameArea from "./GameArea";
import PlayerCanvas from "./PlayerCanvas";
import OctopusCanvas from "./OctopusCanvas";

function Game(){

  const wallRef = useRef({})

  return (
    <>
    <PlayerCanvas  wallRef = {wallRef}/>
    <OctopusCanvas wallRef = {wallRef}/>
    <BlocksForGameBoard wallRef = {wallRef}/>
    <GameArea />
    </>
  )
}

export default Game;