import React, {Component} from 'react';
// import {Link} from 'react-router'
import Tone from 'tone';
// var Tone = require("Tone");

var synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
class Note extends Component{
  runSound(){
      console.log("run props sound "+ this.props.sound);
    synth.triggerAttackRelease(this.props.sound, "16n")
  }
  render(){
    return (
      <div id="noteBody">
            <h1 ><button onClick={() => {this.runSound()}}>Sound {this.props.sound}</button ></h1>
      </div>
    )
  }
}

export default Note
