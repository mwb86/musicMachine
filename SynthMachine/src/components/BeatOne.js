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
      <Note sound="240" time={this.props.time} />
      <Note sound="340" time={this.props.time}/>
      <Note sound="440" time={this.props.time}/>
      <Note sound="540" time={this.props.time}/>
      <Note sound="640" time={this.props.time}/>
      </header>
    )
  }
}

export default BeatOne
