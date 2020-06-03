import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RegistrationPage from "./RegistrationPage";

describe("<RegistrationPage/>", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<RegistrationPage />);
    expect(getByText("Hackathon")).toBeInTheDocument();
  });

  it("renders a form with username and password inputs", () => {
    const { getByTestId } = render(<RegistrationPage />);
    expect(getByTestId("username")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
    expect(getByTestId("email")).toBeInTheDocument();
    expect(getByTestId("passwordconfirmation")).toBeInTheDocument();
  });

  it("Has a submit button", () => {
    render(<RegistrationPage />);
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  it("When a username is entered into the input it is displayed", () => {
    const { getByTestId } = render(<RegistrationPage />);
    const handleSubmit = jest.fn();

    fireEvent.change(getByTestId("usernameinput"), {
      target: { value: "Maria" },
    });
    expect(getByTestId("usernameinput").value).toBe("Maria");
  });

  it("When a username is entered into the input it is displayed", () => {
    const { getByTestId } = render(<RegistrationPage />);
    const handleSubmit = jest.fn();

    fireEvent.change(getByTestId("passwordinput"), {
      target: { value: "123" },
    });
    expect(getByTestId("passwordinput").value).toBe("123");
  });

  xit("When a confirmation password that is different to the origina, an alert is shown", () => {
    const { getByTestId } = render(<RegistrationPage />);
    const handleSubmit = jest.fn();
    //window.alert = jest.fn();

    fireEvent.change(getByTestId("passwordinput"), {
      target: { value: "123" },
    });

    fireEvent.change(getByTestId("passwordconfirmationinput"), {
      target: { value: "456" },
    });

    fireEvent.change(getByTestId("usernameinput"), {
      target: { value: "maria" },
    });

    fireEvent.change(getByTestId("emailinput"), {
      target: { value: "maria@me" },
    });

    fireEvent.click(getByTestId("submit"));

    expect(handleSubmit).not.toBeCalled();
    //expect(window.alert).toHaveBeenCalled();
  });
});
