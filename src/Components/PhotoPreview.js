import React, { Component } from "react";
import container from "../assets/Container.png";

export default class PhotoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="photopreview">
          Photos
          <a href="/photos">
            <img src={container} alt="your photo collection" />
         </a>
        </div>
      </>
    );
  }
}
