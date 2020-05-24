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
    };
  }

  async componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
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
        .post(
          "https://em7jsvk2ig.execute-api.eu-west-2.amazonaws.com/production/weather",
          {
            location: {
              lat: locationCoordinates.coords.latitude,
              lon: locationCoordinates.coords.longitude,
            },
          },
          { headers: { Authorization: `Bearer ${jwt}` } }
        )
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
        .get(
          "https://em7jsvk2ig.execute-api.eu-west-2.amazonaws.com/production/news",
          { headers: { Authorization: `Bearer ${jwt}` } }
        )
        .then((response) => {
          this.setState({ news: response.data.news });
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});

      axios
        .get(
          "https://em7jsvk2ig.execute-api.eu-west-2.amazonaws.com/production/photos",
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        )
        .then((response) => {
          console.log(response);
          //this.setState({ news: response.data.news });
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
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
