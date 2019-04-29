import React, { Component } from "react";
import Voice from "./Voice";

import "./App.css";
import SequencerExample from "./Sequencer";

// import both Voice and Sequencer
// map voice out to match the number of steps in Sequencer and create a new instance of Voice for each step in sequencer
// Do I need to import voice.js into sequencer and map each voice to each step?

// behavior should be to trigger speak on input and stop on output - move to next step in sequence
// pass data from sequencer to voice to trigger voices in sequence

// pass data from Sequencer.js to Voice.js to indicate voice step number

// display text from voice input at top of screen

class App extends Component {
  render() {
    return (
      <div className="App">
        <SequencerExample />

        <Voice />
      </div>
    );
  }
}

export default App;
