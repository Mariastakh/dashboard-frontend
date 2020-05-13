import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
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

  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (!jwt) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Container>
        {this.props.loggedInStatus}
        Good Day Swapnil
        <Row>
          <Col xs={12} md={4}>
            <WeatherPreview />
          </Col>
          <Col xs={12} md={4}>
            <NewsPreview />
          </Col>
          <Col xs={12} md={4}>
            <SportsPreview />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <PhotoPreview />
          </Col>
          <Col xs={12} md={4}>
            <TasksPreview />
          </Col>
          <Col xs={12} md={4}>
            <ClothesPreview />
          </Col>
        </Row>
      </Container>
    );
  }
}
