import React, {
    Component
} from 'react';
import Tone from 'tone';
import Beat from '../Beat'
import Machine from '../Machine'
var Sound = require('react-sound');

var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
class Note extends Component {
    constructor(props) {
        super();
        this.state = {
            isItOn: false,
            event: {
                isItOn: false
            }
        };
    }
    runSound = () => {
        var sound = this.props.sound;
        var state = this.state;

        this.setState({ isItOn : !this.state.isItOn} );
        console.log(this.state)

        if (state.isItOn === false) {
          console.log(this.props.time)
          console.log(this.props.sound)
            // synth.triggerAttackRelease(sound, '4n')
            this.event = Tone.Transport.schedule(function(time) {
                synth.triggerAttackRelease(sound, '4n')
                Tone.Draw.schedule(function() {
                    document.getElementById("bla").style.background = "#" + Math.floor(Math.random() * (999999));
                }, time)
            }, this.props.time)
            state.isItOn = true;
        } else {
            var time = Tone.Transport.now()
            Tone.Transport.clear(this.event)
            Tone.Draw.schedule(function() {
                // document.getElementById("machineBody").style.background = "white";
            }, time)
            state.isItOn = false;
        }
    }

    render() {
      if(!this.state.isItOn) {
            return (
              <div id="noteBody">
              <h1> < button id="buttons"
              onClick = { () => {this.runSound()}}>{this.props.sound}</button></h1>
              </div>
            );
        } else {
            return (
              <div id="noteBody">
              <h1> < button id="buttons1"
              onClick = { () => {this.runSound()}}>{this.props.sound}</button></h1>
              </div>
            );
        }



    }
}

export default Note
