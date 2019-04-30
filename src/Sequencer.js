import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withSequencer } from "react-sequencer";
import styled from "styled-components";

class Voice extends Component {
  speech = window.speechSynthesis;
  m = new SpeechSynthesisUtterance();
  noOptionSelected = {
    "en-US": "select a voice"
  };
  state = {
    language: "en-US",
    message: "da da da",
    selectedVoice: 0,
    pitch: 1,
    speed: 1,
    formIsValid: false,
    buttonText: "Speak"
  };

  changeLanguage = language => {
    this.setState({
      language: language
    });
  };

  changeMessage = e => {
    this.setState({ message: e.target.value });
  };

  changeSelectedVoice = e => {
    this.setState({
      selectedVoice: parseInt(e.target.value)
    });
  };

  changePitch = e => {
    this.setState({
      pitch: parseFloat(e.target.value)
    });
  };

  changeSpeed = e => {
    this.setState({
      speed: parseFloat(e.target.value)
    });
  };

  handleSpeak = e => {
    e.preventDefault();
    console.log(this.state);
    this.m.voice = this.speech.getVoices()[this.state.selectedVoice];
    this.m.rate = this.state.speed;
    this.m.pitch = this.state.pitch;
    this.m.text = this.state.message;
    this.speech.speak(this.m);
  };

  cancelSpeak = e => {
    e.preventDefault();
    this.speech.cancel();
  };

  render() {
    return (
      <div>
        <Instance
          noOptionSelected={this.noOptionSelected[this.state.language]}
          changeMessage={this.changeMessage}
          changeSpeed={this.changeSpeed}
          changePitch={this.changePitch}
          changeSelectedVoice={this.changeSelectedVoice}
          speech={this.speech}
          handleSpeak={this.handleSpeak}
          cancelSpeak={this.cancelSpeak}
          state={this.state}
        />
      </div>
    );
  }
}

//

const Instance = props => {
  const getVoiceOption = (voice, i) => {
    let selected = props.state.selectedVoice === i ? "selected" : "";
    return (
      <option key={i} value={i} selected={selected}>
        {" "}
        {voice.name} - {voice.lang}
      </option>
    );
  };
  return (
    <form action="#">
      <h2>Voice</h2>
      <div>
        <select onChange={props.changeSelectedVoice.bind(this)}>
          <option value="null" disabled>
            {" "}
            {props.noOptionSelected}
          </option>
          {window.speechSynthesis
            .getVoices()
            .map((voice, i) => getVoiceOption(voice, i))}
        </select>
        <br />
        <label>Select a voice</label>
        <br />
      </div>
      <div>
        <textarea
          onKeyUp={props.changeMessage.bind(this)}
          defaultValue={props.state.message}
          type="text"
        />
        <br />
        <label>Text to be spoken</label>
      </div>

      <div>
        <label for="pitchChange">Pitch {props.state.pitch}</label>
        <input
          id="pitchChange"
          min="0"
          max="2"
          step="0.01"
          defaultValue={props.state.pitch}
          tabIndex="0"
          onChange={props.changePitch.bind(this)}
          type="range"
        />
      </div>
      <div>
        <label>Speed {props.state.speed}</label>
        <input
          id="speedChange"
          type="range"
          min="0"
          max="3.6"
          step="0.01"
          defaultValue={props.state.speed}
          tabIndex="0"
          onChange={props.changeSpeed.bind(this)}
        />
      </div>
      <button
        onClick={props.handleSpeak.bind(this)}
        handleSpeak={props.handleSpeak}
        disabled={props.state.formIsValid}
      >
        Speak
      </button>
      <button
        onClick={props.cancelSpeak.bind(this)}
        disabled={props.state.formIsValid}
      >
        Stop
      </button>
    </form>
  );
};

const Steps = styled.div`
  display: flex;
`;

const SeqStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.highlight ? "#BBB" : "auto")};
  background: ${props => (props.highlight ? "tomato" : "auto")};
  transform: ${props => (props.highlight ? "scale(1)" : "scale(1)")};
  transition: background 0.2s linear, color 0.2s linear, transform 0.2s linear;
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  margin: 70px;
`;

class VoiceSequencer extends React.PureComponent {
  state = {
    in: false,
    out: true
  };

  handleStart = () => {
    this.props.sequencer.play();
  };

  handleStop = () => {
    this.props.sequencer.stop();
  };

  render() {
    const { sequencer } = this.props;
    const steps = Array.apply(null, Array(this.props.steps));
    console.log(sequencer.current);

    return (
      <div>
        The current sequencer state: {sequencer.current}
        <Steps>
          {steps.map((step, index) => (
            <SeqStep key={index} highlight={sequencer.index === index}>
              {index + 1}
              <Voice
                id={"voice" + index + 1}
                handleSpeak={() => this.props.handleSpeak}
              />
            </SeqStep>
          ))}
        </Steps>
        <br />
        <br />
        <button
          onClick={sequencer.isPlaying ? this.handleStop : this.handleStart}
        >
          {sequencer.isPlaying ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

let timeValue = 400;

VoiceSequencer = withSequencer({
  steps: [
    ["one", timeValue],
    ["two", timeValue],
    ["three", timeValue],
    ["four", timeValue],
    ["five", timeValue],
    ["six", timeValue],
    ["seven", timeValue],
    ["eight", timeValue]
  ],
  loop: true
})(VoiceSequencer);

export default VoiceSequencer;
