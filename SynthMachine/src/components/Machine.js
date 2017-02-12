import React, {Component} from 'react';
import Tone from 'tone';
import Note from './instruments/Note'
import Beat from './Beat'
var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();

class Machine extends Component{
  constructor(){
    super();
    this.state = {
      notes: ["540","560","580","600","620"]
    }
  }
  playLoop(){
    Tone.Transport.start();
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = 4;
    Tone.Transport.bpm.value = 120;
  }
  pauseLoop(){
    Tone.Transport.pause();
  }
  stopLoop(){
    Tone.Transport.stop()
  }
  clearLoop(){
      Tone.Transport.cancel(0)
  }
  increaseBPM(){
    Tone.Transport.bpm.value += 20;
  }
  decreaseBPM(){
    Tone.Transport.bpm.value -= 20;
  }
  addNote(){
    var length = this.state.notes.length;
    this.state.notes[length] = "540";
    this.setState({notes: this.state.notes});
};
  render(){
    var notes = this.state.notes;
    return (
      <div id="machineBody">
        <button id="playbutton" onClick={this.playLoop}>Play</button>
        <button id="playbutton" onClick={this.pauseLoop}>Pause</button>
        <button id="playbutton" onClick={this.stopLoop}>Stop</button>
        <button id="playbutton" onClick={this.clearLoop}>Erase</button>
        <button id="playbutton" onClick={this.increaseBPM}>Increase BPM by 20</button>
        <button id="playbutton" onClick={this.decreaseBPM}>Decrease BPM by 20</button>
        <button id="playbutton" onClick={ () => {this.addNote()}}>Add Note</button>
          <div id="machineInstrumentBox">
              <div id="timeColumn"><Beat notes={notes} time="0:0"/></div>
              <div id="timeColumn"><Beat notes={notes} time="0:1"/></div>
              <div id="timeColumn"><Beat notes={notes} time="0:2"/></div>
              <div id="timeColumn"><Beat notes={notes} time="0:3"/></div>
              <div id="timeColumn"><Beat notes={notes} time="1:0"/></div>
              <div id="timeColumn"><Beat notes={notes} time="1:1"/></div>
              <div id="timeColumn"><Beat notes={notes} time="1:2"/></div>
              <div id="timeColumn"><Beat notes={notes} time="1:3"/></div>
          </div>
      </div>
    )
  }
}

export default Machine
