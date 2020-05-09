import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("<LoginPage/>", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText("Hackathon")).toBeInTheDocument();
  });

  it("renders a form with username and password inputs", () => {
    const { getByTestId } = render(<LoginPage />);
    expect(getByTestId("username")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
  });

  it("Has a submit button", () => {
    // testing for text in the input but appears to not see the button value: (receives "")
    //     const { getByTestId } = render(<LoginPage />);
    //    expect(getByTestId("submit").textContent).toBe("Submit");

    render(<LoginPage />);
    expect(screen.getByTestId("submit")).toBeInTheDocument();
    // Alternative to method above (also fails by receiving "")
    //  const inputNode = screen.getByTestId('submit');
    //  expect(inputNode).toHaveTextContent("Submit");

    // For getting in put value
    //expect(getByTestId("submit").inputValue).toBe("Submit");

    // for getting input values?
    //  const {input} = getByTestId("submit");
    //expect(input.value).toBe('$23');
  });

  it("When a username is entered into the input it is displayed", () => {
    const { getByTestId } = render(<LoginPage />);
    const handleSubmit = jest.fn();

    fireEvent.change(getByTestId("usernameinput"), {
      target: { value: "Maria" },
    });
    expect(getByTestId("usernameinput").value).toBe("Maria");
  });

  it("When a username is entered into the input it is displayed", () => {
    const { getByTestId } = render(<LoginPage />);
    const handleSubmit = jest.fn();

    fireEvent.change(getByTestId("passwordinput"), {
      target: { value: "123" },
    });
    expect(getByTestId("passwordinput").value).toBe("123");
  });
});
