function TitleScreen() {

  const shootToLink = (e) => {
    window.location.href = "/pacman"
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