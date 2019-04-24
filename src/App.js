import React, { Component } from 'react';
import EleventhContent from './components/EleventhContent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isInstructions: true
    }

    this.goOn = () => {
      this.setState({ isInstructions: false })
    }
  }

  render() {
    return <EleventhContent
      goOn={this.goOn}
      isInstructions={this.state.isInstructions}
   />
  }
}

export default App;
