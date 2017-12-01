import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 0
    }
  }


  clickedCounter = () => {
    this.setState(prevState => ({
      clicked: prevState.clicked + 1
    }))
    console.log(this.state.clicked)
    this.props.parentTotalClicks()
  }

  render() {
    return (
      <div className="Button">
        <button onClick={this.clickedCounter}>I have been clicked {this.state.clicked} times</button>
      </div>
    );
  }
}

export default Button;