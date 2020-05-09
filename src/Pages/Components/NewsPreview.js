import React, { Component } from "react";
import { Link } from "react-router-dom";
import container from "../../assets/Container.png";

export default class NewsPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="newspreview">
          The news
          <Link to="/news">
            <img src={container} alt="the latest news headline" />
          </Link>
        </div>
      </>
    );
  }
}
