import { useEffect } from "react";

const Keyboard = ({ soundsGroup, play }) => {

  return (
    <div className="keyboard">
      {
        soundsGroup.map( sound => 
          <button className="drum-pad" 
          key={sound.keyCode} onClick={() => play(sound.key, sound.id)}>
            <audio className="clip" id={sound.key} src={sound.url}></audio>
          {sound.key}</button>)
      }
    </div>
  );
}

export default Keyboard;