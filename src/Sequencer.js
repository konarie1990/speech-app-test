import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withSequencer } from "react-sequencer";
import styled from "styled-components";
import Voice from "./Voice";

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

class VoiceSequencer extends Component {
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
              <Voice id={"voice" + index + 1} handleSpeak={this.sequencer} />
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
