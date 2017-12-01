/*

  Where should state live?
  
  Get the below app working. It should track how many times
  each button has been clicked.

  Hint: Each button should have it's own state.

  Beast mode:
  Add a button "Clik here to add another button"
  Add a "Total clicks" to the top of the App component.

*/

import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'

let currentId = 0
const genId = () => ++currentId

class App extends Component {
  
  state = {
    buttons: [],
    totalClicks: 0
  }

  addButton = () => {
    this.setState(prevState => ({
      buttons: [...prevState.buttons, genId()]
    }))
  }

  countAllClicks = () => {
    this.setState(prevState => ({
      totalClicks: prevState.totalClicks + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <p>Total clicks: {this.state.totalClicks}</p>
        <button onClick={this.addButton}>Add another button</button>
        {
          this.state.buttons.map(id => <Button key={id} parentTotalClicks={this.countAllClicks} />)
        }
      </div>
    );
  }
}

export default App;
