import React, {Component} from 'react'
import Note from './instruments/Note'
import Tone from 'tone';
import ReactDOM from 'react-dom'
// var synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
// var sounds =["440", "460", "480", "500", "520"]
class Beat extends Component{
  constructor(props) {
      super(props);
      this.state = {
      notes: this.props.notes
    }
      }


  render(){
    var time = this.props.time;
    console.log(this.props.notes)
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
