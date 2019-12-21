import React from 'react';

class DisplayText extends React.Component {
  render() {
     const displayText = {
      backgroundColor: "#000000",
      width: "200px",
      height: "100px",
      borderColor: "#C1FFFD",
      borderStyle: "solid",
      borderRadius: "5%",
      margin: "20px"
    }
    const text = {
      color:"#ffffff",
      textAlign:"center",
      fontSize: "30px"
    }
    return(<div id="display" style={displayText}>
        <p style={text}>{this.props.text}</p>
      </div>);
  }
}
export default DisplayText;
