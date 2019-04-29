import React from "react";
import ReactDOM from "react-dom";
import { withSequencer } from "react-sequencer";
import styled from "styled-components";

const Steps = styled.div`
  display: flex;
`;

const SeqStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.highlight ? "#FFF" : "auto")};
  background: ${props => (props.highlight ? "blue" : "auto")};
  transform: ${props => (props.highlight ? "scale(1.2)" : "scale(1)")};
  transition: background 0.2s linear, color 0.2s linear, transform 0.2s linear;
  width: 40px;
  height: 40px;
  border: 1px solid #eee;
  margin: 20px;
`;

class SequencerExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      in: true
    };
  }
  handleStart = () => {
    this.props.sequencer.play();
  };

  handleStop = () => {
    this.props.sequencer.pause();
  };

  render() {
    const { sequencer } = this.props;
    const steps = Array.apply(null, Array(8));

    return (
      <div>
        The current sequencer state: {sequencer.current}
        <Steps>
          {steps.map((step, index) => (
            <SeqStep key={index} highlight={sequencer.index === index}>
              {index + 1}
            </SeqStep>
          ))}
        </Steps>
        <button
          onClick={sequencer.isPlaying ? this.handleStop : this.handleStart}
        >
          {sequencer.isPlaying ? "Pause" : "Start"}
        </button>
      </div>
    );
  }
}

let timeValue = 400;

SequencerExample = withSequencer({
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
})(SequencerExample);

export default SequencerExample;