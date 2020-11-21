import React from "react";
import "./../styles/App.css";
import Text from "./Text";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
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
        <div id="main">{/* // Do not alter the main div */}</div>
        <button>Brooo</button>
        <button
          id="click"
          onClick={() => this.setState({ text: this.textData })}
        >
          CLICK
        </button>
        <Text text={this.state.text} />
      </>
    );
  }
}
