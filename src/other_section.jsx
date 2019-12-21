import React from 'react';

class OtherSection extends React.Component {
  render() {
    const otherSection = {
      display:"flex",
      flexDirection:"column",
    }
    return(<div style={otherSection}>
{this.props.children}
      </div>);
  }
}

export default OtherSection;
