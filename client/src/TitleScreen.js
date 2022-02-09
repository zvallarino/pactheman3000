import startSound from './sounds/game_start.wav';
import useSound from 'use-sound';

function TitleScreen() {

  const [starterSound] = useSound(startSound)




  
  const shootToLink = (e) => {
    // starterSound()
    setTimeout(()=>{
      window.location.href = "/pacman"
    },500)
    

  }


  return (
   <div className = "titlescreen">
     <p>PACMAN</p>
      <button onClick ={shootToLink}>
       START
      </button>
   </div>
  );
}

export default TitleScreen;