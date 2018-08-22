import React, { Component } from "react";
import { svgImg } from "../avatar";
import "../res/css/card2.css";

class Card2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "No penalty on withdrawal from your fixed deposit",
      subtext:
        "On First partial withdrawal upto 25% of your original FD principal value ",
      tag: "KNOW MORE",
      img: svgImg.card2_img
    };
  }
  render() {
    return (
      <div className="Card2-parentDiv">
        <div
          className="Card2-img"
          style={{
            background: "url(" + this.state.img + ")",
            backgroundSize: 415,
            height: 250
          }}
        />
        <div
          className="Card2-Content"
          style={{
            backgroundSize: 410,
            height: 250
          }}
        >
          {/* {this.props.children} */}
          <div className="Card2-text1">{this.state.heading}</div>
          <div className="Card2-text2">{this.state.subtext}</div>
          <div>
            <a className="Card2-link" href="#/Card3">
              {this.state.tag}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card2;
