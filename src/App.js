import React, { Component } from "react";
import Voice from "./Voice";

import "./App.css";
import SequencerExample from "./Sequencer";

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
