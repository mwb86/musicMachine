import React, {Component} from 'react';
// import {Link} from 'react-router'
import Tone from 'tone';
import Note from './instruments/Note'
import Beat from './Beat'
// var Tone = require("Tone");
var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
class Machine extends Component{
  playLoop(){
    Tone.Transport.start();
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = 4;
    Tone.Transport.bpm.value = 120;
    console.log(Tone.Transport.loop)

  }
  pauseLoop() {
    Tone.Transport.pause()
  }
  stopLoop(){
    Tone.Transport.stop()
  }
  render(){
    return (
      <div id="machineBody">
        <button id="playbutton" onClick={this.playLoop}>Play</button>
        <button id="playbutton" onClick={this.pauseLoop}>Pause</button>
        <button id="playbutton" onClick={this.stopLoop}>Stop</button>
          <div id="machineInstrumentBox">
              <div id="timeColumn"><Beat time="0:1"/></div>
              <div id="timeColumn"><Beat time="0:2"/></div>
              <div id="timeColumn"><Beat time="0:3"/></div>
              <div id="timeColumn"><Beat time="1:0"/></div>
              <div id="timeColumn"><Beat time="1:1"/></div>
              <div id="timeColumn"><Beat time="1:2"/></div>
              <div id="timeColumn"><Beat time="1:3"/></div>
              <div id="timeColumn"><Beat time="1:4"/></div>
          </div>
      </div>
    )
  }
}

export default Machine
