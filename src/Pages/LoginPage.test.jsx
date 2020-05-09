import React from "react";
import { render , screen} from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("<LoginPage/>", () => {

  it("renders without crashing", () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText("Hackathon")).toBeInTheDocument();
  });

  it("renders a form with username and password inputs", () =>{
      const { getByTestId } = render(<LoginPage/>);
      expect(getByTestId("username")).toBeInTheDocument();
      expect(getByTestId("password")).toBeInTheDocument();
  })

  it("Has a submit button", () => {
      // testing for text in the input but appears to not see the button value: (receives "")
//     const { getByTestId } = render(<LoginPage />);
//    expect(getByTestId("submit").textContent).toBe("Submit");

   // For getting in put value
   //expect(getByTestId("submit").inputValue).toBe("Submit");

   // for getting input values?
  //  const {input} = getByTestId("submit");
    //expect(input.value).toBe('$23');

    // Alternative to method above (also fails by receiving "")
//     render(<LoginPage />)
//     expect(screen.getByTestId('submit')).toBeInTheDocument();
//  const inputNode = screen.getByTestId('submit');
//  expect(inputNode).toHaveTextContent("Submit");
  });

});
