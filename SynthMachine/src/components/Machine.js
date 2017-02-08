import React, {Component} from 'react';
// import {Link} from 'react-router'
import Tone from 'tone';
import Note from './instruments/Note'
import BeatOne from './BeatOne'
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
//     Tone.Transport.loop[true];
//
//     console.log("music started")
//     var loop = new Tone.Loop(function(time){
//     // synth.triggerAttackRelease("C2", "8n", time);
//     console.log(time)
// }, "4n");
  // synth.triggerAttackRelease("F4", "8n")
//     var part = new Tone.Part(function(time, value){
//       console.log("hi")
// 	//the value is an object which contains both the note and the velocity
// 	synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
// }, [{"time" : 0, "chord" : ["C3"], "velocity": 0.9},
// 	   {"time" : "0:2", "note" : "C4", "velocity": 0.5}
// ]).start(0);
//
// var part = new Tone.Sequence(function(time, value) {
//             //the value is an object which contains both the note and the velocity
//             synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
//             //use the time argument to schedule a callback with Tone.Draw
//             Tone.Draw.schedule(function() {
//                 console.log("hi")
//                     //do drawing or DOM manipulation here
//                 document.getElementById("machineInstrumentBox").style.background = "#" + Math.floor(Math.random() * (999999));
//             }, time)
//         }, [{
//             "time": "0:0",
//             "note": [440, 800],
//             "velocity": 0.1
//         }, {
//             "time": "0:1",
//             "note": "D3",
//             "velocity": 0.1
//         }, {
//             "time": "0:2",
//             "note": "E3",
//             "velocity": 0.1
//         }, ]).start(0);
  }
  stopLoop() {
    Tone.Transport.pause()
    Tone.Transport.stop()
    console.log("music stopped")
  }
  render(){
    return (
      <div id="machineBody">
        <button id="playbutton" onClick={this.playLoop}>Play</button>
        <button id="playbutton" onClick={this.stopLoop}>Stop</button>
          <div id="machineInstrumentBox">
              <div id="timeAt0"><BeatOne time="0:1"/></div>
              <div id="timeAt0"><BeatOne time="0:2"/></div>
              <div id="timeAt0"><BeatOne time="0:3"/></div>
              <div id="timeAt0"><BeatOne time="1:0"/></div>
              <div id="timeAt0"><BeatOne time="1:1"/></div>
              <div id="timeAt0"><BeatOne time="1:2"/></div>
              <div id="timeAt0"><BeatOne time="1:3"/></div>
              <div id="timeAt0"><BeatOne time="1:4"/></div>
          </div>
      </div>
    )
  }
}

export default Machine

//
// playLoop(){
//   Tone.Transport.start();
//
//       var part = new Tone.Sequence(function(time, value) {
//           //the value is an object which contains both the note and the velocity
//           synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
//           //use the time argument to schedule a callback with Tone.Draw
//           Tone.Draw.schedule(function() {
//               console.log("hi")
//                   //do drawing or DOM manipulation here
//               document.getElementById("machineBody").style.background = "#" + Math.floor(Math.random() * (999999));
//           }, time)
//       }, [{
//           "time": "0:0",
//           "note": 440,
//           "velocity": 0.1
//       }, {
//           "time": "0:1",
//           "note": 480,
//           "velocity": 0.1
//       }, {
//           "time": "0:2",
//           "note": 420,
//           "velocity": 0.1
//       }, ]).start(0);
//
//   }
