import React, { Component } from "react";
import { SayButton } from "react-say";

speechSynthesis.speak(new SpeechSynthesisUtterance("Hey"));

class Voice extends Component {
  render() {
    return (
      <div>
        <h1>VOICE</h1>
        <br />
        <br />
        <SayButton
          onClick={event => console.log(event)}
          speak="A quick brown fox jumped over the lazy dogs."
        >
          Tell me a story
        </SayButton>{" "}
        <SayButton
          onClick={event => console.log(event)}
          speak="Hello to all my friends."
          voice={"v.lang"}
        >
          Hello
        </SayButton>
      </div>
    );
  }
}

export default Voice;
