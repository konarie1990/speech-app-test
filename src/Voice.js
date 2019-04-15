import React, { Component } from "react";

// speechSynthesis.speak(new SpeechSynthesisUtterance("Web Speech A P I"));

class Voice extends Component {
  state = {
    volume: 0.6,
    pitch: 1,
    rate: 1.2,
    text: ""
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    let utterance = new SpeechSynthesisUtterance(this.state.text);
    utterance.volume = 0.5;
    utterance.pitch = this.state.pitch;
    utterance.rate = this.state.rate;
    speechSynthesis.speak(utterance);
    e.preventDefault();
  };

  onInput = e => {
    this.setState({ pitch: e.target.value, rate: e.target.value });
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
          <label for="pitch">Pitch: </label>

          <input
            name="pitch"
            type="range"
            min="0"
            max="2"
            step="0.1"
            onInput={this.onInput}
            defaultValue={this.state.pitch.value}
          />
          <br />
          <br />

          <label for="rate">Rate:</label>
          <input
            name="rate"
            type="range"
            min="0"
            max="3"
            step="0.1"
            onInput={this.onInput}
            defaultValue={this.state.rate.value}
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
