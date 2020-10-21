import { parseAsync } from "@babel/core";
import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  // [paragraph, setParagraph] = React.useState("");
  this.state = [paragraph];

  this.renderPara = function () {
    return (React.state.paragraph =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  };

  render() {
    return (
      <div id="main">
        <button onClick={renderPara()} id={"click"}>
          {" "}
          Render Paragraph{" "}
        </button>
        <p id={"para"}> {React.state.paragraph} </p>
        {/* Do not remove this main div!! */}
      </div>
    );
  }
}

export default App;
