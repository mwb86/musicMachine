import React, {Component} from 'react'
import Note from './instruments/Note'
import Tone from 'tone';
import ReactDOM from 'react-dom'
var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
var sounds =["261.6255653006", "340", "440", "540", "640"]
class Beat extends Component{
  // addNote(){
  //   var rootElement = React.createElement(Note, {
  //   sound: "640",
  //   time: this.props.time,
  //   })
  //   console.log("hi")
  //   // ReactDOM.render(rootElement, document.getElementById('here'))
  // }
        // <button onClick={() => {}}>Add Beat</button>
  render(){
    return (
      <header >
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
