import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio(event){
    const ai = event.target.value;
    document.getElementById(ai).play();
  }
  
  render(){
    
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <button onClick={this.playAudio} class="drum-pad" value="Q" id="qb">Q
            <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="W" id="wb">W
            <audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="E" id="eb">E
            <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="A" id="ab">A
            <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="S" id="sb">S
            <audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="D" id="db">D
            <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="Z" id="zb">Z
            <audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="X" id="xb">X
            <audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
            </audio>
          </button>
          <button onClick={this.playAudio} class="drum-pad" value="C" id="cb">C
            <audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
            </audio>
          </button>
        </div>
      </div>
    </div>
    
  );}
  
}

export default App;
