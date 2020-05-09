import React, { Component } from "react";
import container from "../assets/Container.png";

export default class NewsPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="newspreview">
          The news
          <a href="/news">
            <img src={container} alt="the latest news headline" />
          </a>
        </div>
      </>
    );
  }
}
