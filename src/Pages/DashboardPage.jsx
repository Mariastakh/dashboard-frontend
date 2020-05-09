import React, { Component } from "react";
import WeatherPreview from "../Components/WeatherPreview";
import NewsPreview from "../Components/NewsPreview";
import SportsPreview from "../Components/SportsPreview";
import PhotoPreview from "../Components/PhotoPreview";
import TasksPreview from "../Components/TasksPreview";
import ClothesPreview from "../Components/ClothesPreview";

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        Good Day Swapnil
        <WeatherPreview />
        <NewsPreview />
        <SportsPreview />
        <PhotoPreview />
        <TasksPreview />
        <ClothesPreview />
      </>
    );
  }
}
