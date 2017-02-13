import React, {Component} from 'react';
import Tone from 'tone';

import Beat from './Beat'

// var firebase = require("firebase");

import * as firebase from 'firebase';
// var config = {
//   apiKey: "AIzaSyAkz3W8RkzM5mrIq7KEdf_mETUJZ8T4mTU",
//   authDomain: "synthmachine-bd1fc.firebaseapp.com",
//   databaseURL: "https://synthmachine-bd1fc.firebaseio.com",
//   storageBucket: "synthmachine-bd1fc.appspot.com",
//   messagingSenderId: "475974057289"
// };
  // firebase.initializeApp(config);
  // var firebase = require("firebase");
class Machine extends Component{
  constructor(){
    super();
    this.state = {
      notes: {},
      // notes: ["523","622","698","784","932","1047"],
      time:["0:0","0:1","0:2","0:3","1:0","1:1","1:2","1:3"],
      note:{},
      id:{}
    }
  }
  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    const noteRef = rootRef.child('notes');
    noteRef.on('value', snap => {
      this.setState({
        notes: snap.val()
      });
      console.log(snap.val())
    });
  }
  playLoop(){
    Tone.Transport.start();
    if(Tone.Transport.loop === true){}
    else{
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = 4;
    Tone.Transport.bpm.value = 120;
  }
  }
  pauseLoop(){
    Tone.Transport.pause();
  }
  stopLoop(){
    Tone.Transport.stop()
  }
  clearLoop(){
      Tone.Transport.cancel(0)
  }
  increaseBPM(){
    Tone.Transport.bpm.value += 20;
  }
  decreaseBPM(){
    Tone.Transport.bpm.value -= 20;
  }

  addNote(event){
    const rootRef = firebase.database().ref().child('react');
    const noteRef = rootRef.child('notes');
    noteRef.push(event.target.value)
  }

  deleteNote(event){
    console.log(this)
    const rootRef = firebase.database().ref().child('react');
    const noteRef = rootRef.child('notes');
    noteRef.child(this.state.id).remove()

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  createDropDownOptions(){
    var notesValues = Object.values(this.state.notes)
    var notesKeys = Object.keys(this.state.notes)
    console.log(notesKeys)
    let items = [];
   for (let i = 0; i <= notesKeys.length; i++) {
        items.push(<option key={notesValues[i]} value={notesKeys[i]}>{notesValues[i]}</option>);
   }
   return items;
  }
  onDropdownSelected(e) {
    this.setState({id: e.target.value})
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
}

  render(){
    var notes = this.state.notes;
    return (
      <div id="machineBody">
        <button id="playbutton" onClick={this.playLoop}>Play</button>
        <button id="playbutton" onClick={this.pauseLoop}>Pause</button>
        <button id="playbutton" onClick={this.stopLoop}>Stop</button>
        <button id="playbutton" onClick={this.clearLoop}>Erase</button>
        <button id="playbutton" onClick={this.increaseBPM}>Increase BPM by 20</button>
        <button id="playbutton" onClick={this.decreaseBPM}>Decrease BPM by 20</button>

        <form onSubmit={this.handleSubmit}>
         <label>
           Add a note
           <select value={this.state.note} onChange={this.addNote}>
             <option value="">notes</option>
             <option value="523">523</option>
             <option value="622">622</option>
             <option value="698">698</option>
             <option value="784">784</option>
             <option value="932">932</option>
             <option value="1047">1047</option>

           </select>
         </label>

       </form>

       <form onSubmit={this.deleteNote.bind(this)}>
        <label>
          Delete a note
          <select value={this.state.id} onChange={this.onDropdownSelected.bind(this)}>
            {this.createDropDownOptions()}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>

          <div id="machineInstrumentBox">
              {this.state.time.map(function(time, index){
                  return <div id="timeColumn"><Beat time={time}/></div>;
                })}
          </div>
      </div>
    )
  }
}

export default Machine

// <form onSubmit={this.handleSubmit}>
//  <label>
//    Delete a note
//    <select value={this.state.note} onChange={this.deleteNote}>
//      <option value="560">560</option>
//      <option value="580">580</option>
//      <option value="600">600</option>
//      <option value="620">620</option>
//    </select>
//  </label>
//  <input type="submit" value="Submit" />
// </form>


        // <button id="playbutton" onClick={ () => {this.addNote()}}>Add Note</button>

// <form onSubmit={ () => {}}>
//   <label>
//     Pick note:
//     <select value="540" onChange={ () => {this.addNote()}}>
//       <option value="540">540</option>
//       <option value="560">560</option>
//       <option value="580">580</option>
//       <option value="600">600</option>
//     </select>
//   </label>
//   <input type="submit" value="Submit" />
 // </form>



// Object.values(obj) returns values
