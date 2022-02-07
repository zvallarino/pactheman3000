import React, { useRef, useState } from "react";
import BlocksForGameBoard from "./BlocksForGameBoard";
import GameArea from "./GameArea";
import PacManCanvas from "./PacManCanvas";
import BallsCanvas from "./BallsCanvas";
import OctopusFactory from "./OctopusFactory";
import Lives from "./Lives";
import LosingScreen from "./LosingScreen";

function Game(){

  const wallRef = useRef({})
  const notawallRef = useRef({})
  const wallCounter = useRef(0)
  const ballCounter = useRef(0)

  const pacManRef = useRef(null)
  const pacManStartPositionRef = useRef({})
  const imageRef = useRef("https://i.imgur.com/1qdpodV.png")
  const canEatOctopusRef = useRef(false)

  const livesCount = useRef(2)

  const gameLostRef = useRef(false)
  const [losingState, setLosingState] = useState(false)
  const [lostLive,setLostLifeState] = useState(false)


  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  const gameBoard = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,2,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1],
    [1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1],
    [1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1],
    [1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ]

  const gbWidth = gameBoard[0].length
  const gbHeight = gameBoard.length

  const BLOCK_WIDTH = SCREEN_WIDTH/gbWidth;
  const BLOCK_HEIGHT = SCREEN_HEIGHT/gbHeight;





  return (
    <>
    <PacManCanvas
    pacManRef = {pacManRef}
    wallRef = {wallRef}
    imageRef = {imageRef}
    notawallRef = {notawallRef}
    BLOCK_WIDTH= {BLOCK_WIDTH}
    BLOCK_HEIGHT= {BLOCK_HEIGHT}
    pacManStartPositionRef = {pacManStartPositionRef} 

    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <OctopusFactory
    wallRef = {wallRef}
    pacManRef = {pacManRef}
    pacManStartPositionRef = {pacManStartPositionRef}
    livesCount = {livesCount}
    gameLostRef = {gameLostRef}
    setLosingState = {setLosingState}
    setLostLifeState = {setLostLifeState}
    canEatOctopusRef = {canEatOctopusRef}

    BLOCK_WIDTH= {BLOCK_WIDTH}
    BLOCK_HEIGHT= {BLOCK_HEIGHT}
 
    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />
    
    <BallsCanvas 
    pacManRef = {pacManRef}
    notawallRef = {notawallRef} 
    canEatOctopusRef = {canEatOctopusRef}
    BLOCK_WIDTH = {BLOCK_WIDTH}
    BLOCK_HEIGHT ={BLOCK_HEIGHT}


    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <BlocksForGameBoard 
    wallRef = {wallRef}
    notawallRef = {notawallRef} 
    wallCounter = {wallCounter}
    ballCounter ={ballCounter}
    gameBoard = {gameBoard}
    gbWidth = {gbWidth}
    gbHeight = {gbHeight}
    
    BLOCK_WIDTH = {BLOCK_WIDTH}
    BLOCK_HEIGHT ={BLOCK_HEIGHT}

    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />
    
    <GameArea
    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    />

    <Lives
    SCREEN_WIDTH = {SCREEN_WIDTH}
    SCREEN_HEIGHT = {SCREEN_HEIGHT}
    livesCount = {livesCount}
    lostLive = {lostLive}
    imageRef = {imageRef}

    BLOCK_WIDTH= {BLOCK_WIDTH}
    BLOCK_HEIGHT= {BLOCK_HEIGHT}
    />
    
    {losingState? <LosingScreen
     SCREEN_WIDTH = {SCREEN_WIDTH}
     SCREEN_HEIGHT = {SCREEN_HEIGHT} 
     BLOCK_WIDTH = {BLOCK_WIDTH}
     BLOCK_HEIGHT ={BLOCK_HEIGHT}/>:null }
   
    </>
  )
}

export default Game;