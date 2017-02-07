import React, {Component} from 'react'
import Note from './instruments/Note'
import Tone from 'tone';
var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
class BeatOne extends Component{
  playChord(){

  }
  render(){
    return (
      <header id="bla">
      <Note sound="240"/>
      <Note sound="340"/>
      <Note sound="440"/>
      <Note sound="540"/>
      <Note sound="640"/>
      </header>
    )
  }
}

export default BeatOne
