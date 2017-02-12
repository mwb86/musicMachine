import React, {Component} from 'react';
import Tone from 'tone';
import Note from './instruments/Note'
import Beat from './Beat'
var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();

class Machine extends Component{
  constructor(){
    super();
    this.state = {
      notes: ["523","622","698","784","932","1047"],
      time:["0:0","0:1","0:2","0:3","1:0","1:1","1:2","1:3"],
      note:""
    }
  }
  playLoop(){
    Tone.Transport.start();
    if(Tone.Transport.loop === true){}
    else{
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = 4;
    Tone.Transport.bpm.value = 120;
  }
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
  addNote(event){
    var length = this.state.notes.length;
    console.log(event.target.value)
    this.state.notes[length] = event.target.value;
    // this.setState({notes: [this.state.notes + event.target.value]});
}
handleSubmit(event) {
  event.preventDefault();
}
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
        <form onSubmit={ () => {this.addNote(event)}}>
          <label>
            Pick note:
            <select value={this.state.note} onChange={ () => {this.addNote(event)}}>
              <option value="540">540</option>
              <option value="560">560</option>
              <option value="580">580</option>
              <option value="600">600</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
           </form>
          <div id="machineInstrumentBox">
              {this.state.time.map(function(time, index){
                  return <div id="timeColumn"><Beat notes={notes} time={time}/></div>;
                })}
          </div>
      </div>
    )
  }
}

export default Machine
