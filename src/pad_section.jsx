import React from 'react';
import DrumPad from './drum_pad.jsx';

const drumPads = [
  {id: "Q", keyCode: 81, audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", name: "Kick and Hat"},
  {id: "W", keyCode: 87, audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", name: "Kick"},
  {id: "E", keyCode: 69, audio: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", name: "Bold Hat"},
  {id: "A", keyCode: 65, audio: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", name: "Punchy Kick"},
  {id: "S", keyCode: 83, audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Jomox%20MBrane%2011/255[kb]jmox-mbrane-r02a.wav.mp3", name: "Heavy Kick"},
  {id: "D", keyCode: 68, audio: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", name: "Side Stick"},
  {id: "Z", keyCode: 90, audio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3", name: "Break Snare"},
  {id: "X", keyCode: 88, audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", name: "Hat"},
  {id: "C", keyCode: 67, audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/94[kb]ham-cym02.wav.mp3", name: "Cymbol"},  
];

class PadSection extends React.Component {
  render() {
    const drumPadding = {
      display: "flex",
      height: "100%",
      width: "60%"
    }
    const buttonContainer = {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "33%",
    }
    
    let drumPadRenders = drumPads.map((obj)=>{
      return (
      <DrumPad id={obj.name}
        audio={obj.audio}
        code={obj.keyCode}
        letter={obj.id}
        vol={this.props.volume/100}
        updateText = {this.props.updateText}/>
          )
      
    });
    return(
      <div style={drumPadding}>
        
        <div style={buttonContainer}>
          {drumPadRenders.slice(0,3)}
          </div>
        <div style={buttonContainer}>
          {drumPadRenders.slice(3,6)}
        </div>
        <div style={buttonContainer}>
          {drumPadRenders.slice(6,9)}
        </div>
      </div>
          );
  }
}

export default PadSection;
