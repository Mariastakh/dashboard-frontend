import React, { Component } from "react";
import { Link } from "react-router-dom";
import container from "../../assets/Container.png";

export default class PhotoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="photopreview">
          Photos
          <Link to="/photos">
            <img src={container} alt="your photo collection" />
          </Link>
        </div>
      </>
    );
  }
}
