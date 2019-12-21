import React from 'react';

const normal = "#C1FFFD";

class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inset: false
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleClick(event){
    this.activateButton();
  }
  handleKeyDown(event){
    if(event.keyCode === this.props.code){
      this.activateButton();
    }
  }
  
  activateButton(){
    if(!this.state.inset){
    this.props.updateText(this.props.id);
    let sound = document.getElementById(this.props.letter);
    sound.volume=this.props.vol;
    sound.play();
    this.changeColor();
    setTimeout(function() { 
     this.changeColor()
  }.bind(this), sound.duration * 1000)
  }
  }
  changeColor(){
    if(this.state.inset){
      this.setState({
        inset: false
      });
    }
    else {
      this.setState({
        inset: true
      });
    }
  }
  render() {
    const drumPad = {
      backgroundColor: normal,
      width: "75px",
      height: "75px",
      margin: "10px",
      borderRadius: "10%",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, .5)",
      textAlign: "center",
      fontSize: "40px",
      borderStyle: "solid",
      borderColor: "black",
      textShadow: "1px 1px 0px #13464B",
    }
    
    const inset= this.state.inset? {borderColor: "#13464B", width: "65px", height: "65px", margin:"15px"}:{};
    return(
    <div className="drum-pad" id={this.props.id} onClick={this.handleClick}style={Object.assign({},drumPad,inset)}>
      <audio className="clip" id={this.props.letter} src={this.props.audio}>
      </audio>{this.props.letter}
    </div>);
  }
}
export default DrumPad;
