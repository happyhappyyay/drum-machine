import React from 'react';
import PadSection from './pad_section';
import OtherSection from './other_section';
import DisplayText from './display_text';


class Presentation extends React.Component {
  constructor() {
    super();
    this.state= {
      volume: 50,
      text: "Volume: 50%"
    };
    this.displayText = this.displayText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  displayText(text){
    this.setState({
      text: text
    })
  }
  handleChange(event) {
      this.setState({
      volume : event.target.value,
        text: "Volume: " + (event.target.value).toString() + "%" 
    })
  }
    resetState() {
    }
  render() {
    const background = {
      backgroundColor: "#E7E39A"
    }
    const drumBackground = {
      display: "flex",
      backgroundColor: "#3B6E73",
      width: "600px",
      height: "300px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      position: "absolute",
      borderStyle: "solid",
      borderRadius: "5%",
      borderColor: "#13464B",
      boxShadow:"10px 10px 10px rgba(0, 0, 0, .5)",
    }
    const slider = {
      margin: "20px",
      width: "200px"
    }
    const logo = {
      textAlign: "center",
      fontSize: "30px",
      color: "#E7E39A",
      textShadow: "3px 3px 1px #13464B"
    }
    return(
    <body style={background}id="drum-machine">
        <div style={drumBackground}>
          <PadSection volume={this.state.volume}
            updateText={this.displayText}/>
          <OtherSection>
            <DisplayText text={this.state.text}/>
            <input type="range" onChange={this.handleChange} style={slider}>
            </input>
            <div style={logo}>Dum-D-Dee Machina</div>
          </OtherSection>
          
        </div>
      </body>);
  }
}

export default Presentation;
