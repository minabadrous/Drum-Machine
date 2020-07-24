import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  playAudio(event){
    const ai = event.target.value;
    document.getElementById(ai).play();
  }
  handleKey(event){
    if('qweasdzxcQWEASDZXC'.includes(event.key)){
    document.getElementById(event.key.toUpperCase()).play();}
    
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleKey, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKey, false);
  }
  render(){
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <button onClick={this.playAudio} class="drum-pad" value="Q" id="qb">Q
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="W" id="wb">W
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="E" id="eb">E
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="A" id="ab">A
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="S" id="sb">S
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="D" id="db">D
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="Z" id="zb">Z
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="X" id="xb">X
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} className="drum-pad" value="C" id="cb">C
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
            </audio>
          </button>
        </div>
      </div>
    </div>
    
  );}
 
}

export default App;
