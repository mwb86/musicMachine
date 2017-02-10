import React, {Component} from 'react';
// import {Link} from 'react-router'
import Tone from 'tone';
// var Tone = require("Tone");
import Beat from '../Beat'
import Machine from '../Machine'
var Sound = require('react-sound');

var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
class Note extends Component{
  constructor(props) {
  super();
  this.state = {
    isItOn: false,
    event: {}
  };
}
  runSound = () => {
      console.log(Tone.Transport.schedule)
      console.log("run props sound "+ this.props.sound);
      var sound = this.props.sound;

      // var event = Tone.Transport.schedule(function(time){
      //       synth.triggerAttackRelease(sound, '4n')
      //       Tone.Draw.schedule(function(){
      //         document.getElementById("machineBody").style.background = "#" + Math.floor(Math.random() * (999999));
	    //        }, time)
      //   }, this.props.time);

      if(this.isItOn === false){
          this.event = Tone.Transport.schedule(function(time){
                synth.triggerAttackRelease(sound, '4n')
                Tone.Draw.schedule(function(){
                  document.getElementById("machineBody").style.background = "#" + Math.floor(Math.random() * (999999));
                 }, time)
            }, this.props.time)
            console.log(this.event)
            this.isItOn = true;
      }
      else{
        var time = Tone.Transport.now()
        console.log(event)
        Tone.Transport.clear(this.event)
        Tone.Draw.schedule(function(){
          document.getElementById("machineBody").style.background = "white";
        }, time)
        this.isItOn = false;
      }
  }

  render(){

    return (
      <div id="noteBody">
            <h1 ><button id="buttons" onClick={() => {this.runSound()}}></button ></h1>
      </div>
    )
  }
}

export default Note
