import React, { Component } from "react";
// import Facebook from "../res/logo/facebook.svg";
// import Linkedin from "../res/logo/Linkedin.svg";
// import Twitter from "../res/logo/Twitter.svg";
// import img1 from "../res/img/Profile_1.png";
// import img2 from "../res/img/Profile_2.png";
// import img3 from "../res/img/Profile_3.png";
// import img4 from "../res/img/Profile_4.png";
import {
  getRandomFeedsData,
  getRandomProfileImageUrl,
  svgImg
} from "../avatar";

import "../res/css/card3.css";

class Card3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: getRandomFeedsData().name,
      company: getRandomFeedsData().company,
      designation: getRandomFeedsData().designation,
      colab: getRandomFeedsData().colab,
      Facebook: svgImg.Facebook,
      Linkedin: svgImg.Linkedin,
      Twitter: svgImg.Twitter,
      img: getRandomProfileImageUrl(),
      img1: getRandomProfileImageUrl(),
      img2: getRandomProfileImageUrl(),
      img3: getRandomProfileImageUrl(),
      img4: getRandomProfileImageUrl()
    };
  }

  render() {
    return (
      <div className="Card3-parentDiv">
        <div
          className="Card3-img"
          style={{
            background: "url(" + this.state.img + ")",
            backgroundSize: 150,
            height: 150,
            width: 150
          }}
        />
        <div className="Card3-content" style={{ backgroundSize: 415 }}>
          <div className="Card3-text1">{this.state.name}</div>
          <div className="Card3-text2">{this.state.company}</div>
          <div className="Card3-btn">{this.state.designation}</div>

          <div className="Card3-tabs">
            <div className="Card3-tabs-text">{this.state.colab}</div>
            <a href="https://www.woovly.com/arpita.bose/stories/and-the-story-begins-when-trek-ends">
              <div
                className="Card3-small-img1"
                style={{
                  background: "url(" + this.state.img1 + ")",
                  backgroundSize: 47,
                  height: 47,
                  width: 47
                }}
              />
            </a>
            <a href="https://www.woovly.com/alex.chacon/stories/meet-the-ex-medico-who-bikes-around-the-world-telling-stories">
              <div
                className="Card3-small-img2"
                style={{
                  background: "url(" + this.state.img2 + ")",
                  backgroundSize: 47,
                  height: 47,
                  width: 47
                }}
              />
            </a>
            <a href="https://www.woovly.com/emily/stories/roadtrip-in-europe">
              <div
                className="Card3-small-img3"
                style={{
                  background: "url(" + this.state.img3 + ")",
                  backgroundSize: 47,
                  height: 47,
                  width: 47
                }}
              />
            </a>
            <a href="https://www.woovly.com/vinitha.jose/stories/exploring-the-hidden-secrets-of-andorra-and-liechtenstein">
              <div
                className="Card3-small-img4"
                style={{
                  background: "url(" + this.state.img4 + ")",
                  backgroundSize: 47,
                  height: 47,
                  width: 47
                }}
              />
            </a>
            <a href="#/Card1">
              <span className="Card3-dot">+2</span>
            </a>
          </div>
        </div>
        <a href="https://www.facebook.com/konarkjha">
          <img
            src={this.state.Facebook}
            className="Card3-facebook"
            alt="Facebook"
          />
        </a>
        <a href="https://www.linkedin.com/in/konarkjha/">
          <img
            src={this.state.Linkedin}
            className="Card3-linkedin"
            alt="Linkedin"
          />
        </a>
        <a href="https://twitter.com/konarkjha/">
          <img
            src={this.state.Twitter}
            className="Card3-twitter"
            alt="Twitter"
          />
        </a>
      </div>
    );
  }
}

export default Card3;
