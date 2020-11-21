import React from "react";
import "./../styles/App.css";

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.text;
  }

  // const clickFn = () => {
  //   setText(textData);
  // };
  render() {
    return (
      <>
        {this.text}
        <button> Broo Broo</button>
      </>
    );
  }
}
