import React, { Component } from "react";

// speechSynthesis.speak(new SpeechSynthesisUtterance("Web Speech A P I"));

class Voice extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    let utterance = new SpeechSynthesisUtterance(this.state.text);
    utterance.pitch = 2;
    utterance.volume = 0.5;
    utterance.rate = 1.2;
    speechSynthesis.speak(utterance);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>VOICE</h1>
        <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <br />
          <br />
          <button id="speak">speak</button>
        </form>
      </div>
    );
  }
}

export default Voice;
