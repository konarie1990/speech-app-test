import { connect } from "react-redux";
import VoiceSequencer from "./Sequencer";
import { setSteps } from "./actions";

const mapStateToProps = state => {
  console.log(state);
  return { steps: state.steps };
};

const mapDispatchToProps = dispatch => {
  return {
    setSteps: steps => dispatch(setSteps(steps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoiceSequencer);
