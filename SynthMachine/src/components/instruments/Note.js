import React, {Component} from 'react';
// import {Link} from 'react-router'
import Tone from 'tone';
// var Tone = require("Tone");

var synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
class Note extends Component{
  runSound(){
      console.log("run props sound "+ this.props.sound);
    // synth.triggerAttackRelease("G4", "16n")
  }
  render(){
    return (
      <div id="noteBody">
            <h1 ><button onClick={() => {this.runSound()}}>Sound</button ></h1>
      </div>
    )
  }
}

export default Note
