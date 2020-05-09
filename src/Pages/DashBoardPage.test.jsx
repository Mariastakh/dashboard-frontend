import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DashboardPage from "./DashboardPage";

// this way of mocking also works:
// jest.doMock("./Components/WeatherPreview", () => {
//   const WeatherPreview = () => <div data-testid="weather">Cloudy</div>;
//   return WeatherPreview;
// });

jest.mock("../Components/WeatherPreview", () => () => (
  <div data-testid="weatherpreview">Cloudy</div>
));
jest.mock("../Components/NewsPreview", () => () => (
  <div data-testid="newspreview">Headline</div>
));
jest.mock("../Components/SportsPreview", () => () => (
  <div data-testid="sportspreview">Sports</div>
));
jest.mock("../Components/PhotoPreview", () => () => (
  <div data-testid="photopreview">Photos</div>
));
jest.mock("../Components/TasksPreview", () => () => (
  <div data-testid="taskspreview">Tasks</div>
));
jest.mock("../Components/SportsPreview", () => () => (
    <div data-testid="sportspreview">Sports</div>
  ));

describe("<DashboardPage/>", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<DashboardPage />);
    expect(getByText("Good Day Swapnil")).toBeInTheDocument();
  });

  it("shows the weather", () => {
    const { getByTestId } = render(<DashboardPage />);
    expect(getByTestId("weatherpreview").textContent).toBe("Cloudy");
  });

  it("shows a news story preview", () => {
    const { getByTestId } = render(<DashboardPage />);
    expect(getByTestId("newspreview").textContent).toBe("Headline");
  });

  it("shows a sports preview", () => {
    const { getByTestId } = render(<DashboardPage />);
    expect(getByTestId("sportspreview").textContent).toBe("Sports");
  });

  it("shows a photo preview", () => {
    const { getByTestId } = render(<DashboardPage />);
    expect(getByTestId("photopreview").textContent).toBe("Photos");
  });

  it("shows a tasks preview", () => {
    const { getByTestId } = render(<DashboardPage />);
    expect(getByTestId("taskspreview").textContent).toBe("Tasks");
  });

  it("shows a clothes pie chart", () => {
    const { getByTestId } = render(<DashboardPage />);
    expect(getByTestId("clothespreview").textContent).toBe("Clothes");
  });
});
