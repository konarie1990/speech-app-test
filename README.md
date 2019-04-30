#### FRONT END FOR Text to VocalFx

This is a text to speech app that is controlled by a 16 step step-sequencer. It is used to create computer generated vocal melodies. The user can then record the audio into their digital audio workstation, hardware sampler or recording device. From there the user can further process the recording with audio tools.

// import both Voice and Sequencer into App.js

// map voice out to match the number of steps in Sequencer and create a new instance of Voice for each step in sequencer

// Do I need to import voice.js into sequencer and map each voice to each step?

// behavior should be to trigger speak on input and stop on output - move to next step in sequence

// should be able to adjust tempo

// pass data from sequencer to voice to trigger voices in sequence

// pass data from Sequencer.js to Voice.js to indicate voice step number

// display text from voice input at top of screen

// make step length adjustable - refer to sequencer.js for sequence length

// how do i send sequencer.current to state.js? and if that is possible how to I grab the state and pass it as an argument to a function (handleSpeak)?

###

// bug fixes

// Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.

###

// add ons

// user profile
// save/recall multiple settings
// export audio
// audio fx (delay, reverb, bitcrush, etc)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
