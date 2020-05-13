import React, { Component } from "react";

export default class NewsPage extends Component {
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
    return <>news page</>;
  }
}
