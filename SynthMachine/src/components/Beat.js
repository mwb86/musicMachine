import React, {Component} from 'react'
import Note from './instruments/Note'
// var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
// var sounds =["440", "460", "480", "500", "520"]
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAkz3W8RkzM5mrIq7KEdf_mETUJZ8T4mTU",
  authDomain: "synthmachine-bd1fc.firebaseapp.com",
  databaseURL: "https://synthmachine-bd1fc.firebaseio.com",
  storageBucket: "synthmachine-bd1fc.appspot.com",
  messagingSenderId: "475974057289"
};
  firebase.initializeApp(config);
class Beat extends Component{
  constructor() {
      super();
      this.state = {
      notes: []
    }
      }
      componentDidMount(){
        const rootRef = firebase.database().ref().child('react');
        const noteRef = rootRef.child('notes');
        noteRef.on('value', snap => {
          this.setState({
            notes: Object.values(snap.val())
          });
        });

      }

  render(){
    var time = this.props.time;

    return (
          <div>

           <header>
              {this.state.notes.map(function(note, index){
                  return <Note sound={note} time={time}/>;
                })}
           </header>
          </div>
    )

  }
}
export default Beat

// return (
//       <div>
//
//        <header>
//        {this.state.notes.map(function(note, index){
//            return <Note sound={note} time={time}/>;
//          })}
//        </header>
//       </div>
// )

// class Beat extends Component{
//   constructor(props) {
//       super();
//       this.state = {
//       notes: ["540","560","580","600","620"]
//     }
//       }
//   addNote(){
//     var previous=this.state.notes;
// this.setState({notes: [[previous] + [","] + ["640"]]});
//   var time = this.props.time;
//
// return (
//       <div>
//       <button onClick={ () => {this.addNote()}}>Add Note</button>
//        <header>
//            {this.state.notes.map(function(note, index){
//                return <Note sound={note} time={time}/>;
//              })}
//        </header>
//       </div>
// )
//
// };
//
//   render(){
//     var time = this.props.time;
//     return (
//           <div>
//           <button onClick={ () => {this.addNote()}}>Add Note</button>
//            <header>
//                {this.state.notes.map(function(note, index){
//                    return <Note sound={note} time={time}/>;
//                  })}
//            </header>
//           </div>
//     )
//   }
// }
// export default Beat
