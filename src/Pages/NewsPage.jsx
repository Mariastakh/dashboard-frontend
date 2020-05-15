import React, { Component } from "react";
import axios from "axios";

export default class NewsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: {
        title: "",
        link: "",
        content: "",
      },
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/news")
      .then((response) => {
        // handle success

        this.setState({ news: response.data.news });
        console.log(this.state.news);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (!jwt) {
      this.props.history.push("/");
    }
  }

  render() {
    const { news } = this.state;
    return (
      <>
        news page
        <br></br>
        {news.title}
        <br></br>
        {news.content}
      </>
    );
  }
}
