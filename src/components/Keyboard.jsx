const Keyboard = ({ soundsGroup, play }) => {

  return (
    <div className="keyboard">
      {
        soundsGroup.map( sound => 
          <button className="drum-pad" id={sound.keyCode}
          key={sound.keyCode} onClick={() => play(sound.key, sound.id)}>
            <audio className="clip" id={sound.key} src={sound.url}></audio>
          {sound.key}</button>
        )
      }
    </div>
  );
}

export default Keyboard;