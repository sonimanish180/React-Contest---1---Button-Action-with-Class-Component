import React from "react";
import "./../styles/App.css";
// import Para from "./Para";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: false
    };
    this.textData =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  }

  // const clickFn = () => {
  //   setText(textData);
  // };
  render() {
    return (
      <>
        <div id="main">
          {/* // Do not alter the main div */}
          {this.state.txt && <p>{this.textData}</p>}
          <button id="click" onClick={() => this.setState({ txt: true })}>
            CLICK
          </button>
          {/* <Para /> */}
        </div>

        {/* <Text txt={this.state.txt} /> */}
      </>
    );
  }
}
