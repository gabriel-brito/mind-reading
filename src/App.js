import React, { Component } from 'react';
import EleventhContent from './EleventhContent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      appName: 'Mind-reading card Trick',
      isInstructions: true,
      isTrick: false,
      step: 'instructions'
    }

    this.goOn = () => {
      this.setState({ isInstructions: false, isTrick: true, step: 1 })
    }
  }

  render() {
    return <EleventhContent
      goOn={this.goOn}
      appName={this.state.appName}
      step={this.state.step}
      isInstructions={this.state.isInstructions}
      isTrick={this.state.isTrick}
   />
  }
}

export default App;
