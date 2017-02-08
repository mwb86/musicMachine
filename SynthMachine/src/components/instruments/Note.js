import React, {Component} from 'react';
// import {Link} from 'react-router'
import Tone from 'tone';
// var Tone = require("Tone");
import Beat from '../Beat'
import Machine from '../Machine'
var Sound = require('react-sound');

var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
class Note extends Component{

  runSound = () => {
      console.log("run props sound "+ this.props.sound);
      var sound = this.props.sound;

        Tone.Transport.schedule(function(time){
            synth.triggerAttackRelease(sound, '4n')
            Tone.Draw.schedule(function(){
	           }, time)
            // var player = new Tone.Player("BDOOOO.mp3").toMaster();
            // player.autostart = true;
        }, this.props.time);
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
