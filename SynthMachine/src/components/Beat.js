import React, {Component} from 'react'
import Note from './instruments/Note'
import Tone from 'tone';
var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
var sounds =["261.6255653006", "340", "440", "540", "640"]
class Beat extends Component{
  playChord(){

  }
  render(){
    return (
      <header id="bla">
      <Note sound={sounds[0]} time={this.props.time} />
      <Note sound={sounds[1]} time={this.props.time}/>
      <Note sound={sounds[2]} time={this.props.time}/>
      <Note sound="540" time={this.props.time}/>
      <Note sound="640" time={this.props.time}/>
      </header>
    )
  }
}

export default Beat
