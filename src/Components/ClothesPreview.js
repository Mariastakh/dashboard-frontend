import React, { Component } from "react";
import container from "../assets/Container.png";

export default class ClothesPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="clothespreview">
          Clothes
          <img src={container} alt="clothes pie chart" />
        </div>
      </>
    );
  }
}
