import React, {Component} from 'react';
// import {Link} from 'react-router'
import Tone from 'tone';
import Note from './instruments/Note'
// var Tone = require("Tone");
var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
class Machine extends Component{
  playLoop(){
    Tone.Transport.start();
    console.log("music started")
  }
  render(){
    return (
      <div id="machineBody">
        <button onClick={this.playLoop}>Play</button >
          <div id="machineInstrumentBox">
            <Note sound="1" time="0"/>
            <Note sound="2" time="0"/>
            <Note sound="3" time="0"/>
            <Note sound="4" time="0"/>
            <Note sound="5" time="0"/>
          </div>

      </div>
    )
  }
}

export default Machine
