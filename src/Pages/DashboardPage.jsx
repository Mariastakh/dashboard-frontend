import React, { Component } from "react";
import "./dashboard.css";

import { Container, Row, Col } from "react-bootstrap";
import WeatherPreview from "../Components/WeatherPreview";
import NewsPreview from "../Components/NewsPreview";
import SportsPreview from "../Components/SportsPreview";
import PhotoPreview from "../Components/PhotoPreview";
import TasksPreview from "../Components/TasksPreview";
import ClothesPreview from "../Components/ClothesPreview";
import axios from "axios";

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {
        location: "Tawarano",
        temperature: 12.36,
        description: "clear sky",
      },
      news: {
        title: "",
        link: "",
        content: "",
      },
      tasks: "no tasks",
    };
  }

  async componentDidMount() {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      this.props.history.push("/");
    } else {
      function getPosition() {
        // Simple wrapper
        return new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(res, rej);
        });
      }

      const locationCoordinates = await getPosition();

      axios
        .post("http://localhost:8000/weather", {
          location: {
            lat: locationCoordinates.coords.latitude,
            lon: locationCoordinates.coords.longitude,
          },
        })
        .then((response) => {
          // handle success

          this.setState({ weather: response.data.weather });
          //console.log(this.state.weather);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      axios
        .get("http://localhost:8000/news")
        .then((response) => {
          // handle success

          this.setState({ news: response.data.news });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      axios
        .get("http://localhost:8000/tasks")
        .then((response) => {
          this.setState({ tasks: response.data.tasks });
          console.log("Dashboard has received tasks: ", response.data.tasks);
          localStorage.setItem("tasks", response.data.tasks);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <Container>
        <br></br>
        <p className="title-margin"> Good day {this.props.user}</p>
        <Row className="content with-margin">
          <Col xs={12} md={4}>
            <WeatherPreview
              location={this.state.weather.location}
              temperature={this.state.weather.temperature}
              description={this.state.weather.description}
            />
          </Col>
          <Col xs={12} md={4}>
            <NewsPreview
              title={this.state.news.title}
              link={this.state.news.link}
              content={this.state.news.content}
            />
          </Col>
          <Col xs={12} md={4}>
            <SportsPreview team={this.props.team} />
          </Col>
        </Row>
        <Row div class="row mt-3">
          <Col xs={12} md={4}>
            <PhotoPreview />
          </Col>
          <Col xs={12} md={4}>
            <TasksPreview tasks={this.state.tasks} />
          </Col>
          <Col xs={12} md={4}>
            <ClothesPreview />
          </Col>
        </Row>
      </Container>
    );
  }
}
