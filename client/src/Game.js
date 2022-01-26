import React, { useState, useEffect, useRef } from "react";
import GameArea from "./GameArea";
import PlayerCanvas from "./PlayerCanvas";

function Game(){

  return (
    <>
    <PlayerCanvas />
    <GameArea />
    </>
  )
}

export default Game;