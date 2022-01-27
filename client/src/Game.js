import React, { useState, useEffect, useRef } from "react";
import BlocksForGameBoard from "./BlocksForGameBoard";
import GameArea from "./GameArea";
import PlayerCanvas from "./PlayerCanvas";

function Game(){

  return (
    <>
    <PlayerCanvas />
    <BlocksForGameBoard />
    <GameArea />
    </>
  )
}

export default Game;