const DrumControl = ({drumSwitch, power, volume, changeVolume, tuneName, chooseHeater, choosePiano}) => {
  return ( 
    <div className="drumControl">
      <button onClick={drumSwitch}>{power}</button>
      <h2 id="volumn">Volume: %{volume*100}</h2>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(evt) => changeVolume(evt)} />
      <h2 id="display">{tuneName}</h2>
      <button onClick={chooseHeater}>Heater</button>
      <button onClick={choosePiano}>Piano</button>
    </div>
   );
}
 
export default DrumControl;