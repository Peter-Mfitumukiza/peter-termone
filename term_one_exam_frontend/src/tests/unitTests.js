import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  // Test that the component renders without errors
  it("should render without errors", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  // Test that the component displays the initial operands and operation correctly
  it("should display the initial operands and operation correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Enter num 1 ")).toBeTruthy();
    expect(getByText("Enter num 2 ")).toBeTruthy();
    expect(getByText("=")).toBeFalsy();
  });
});

describe("handleOperand1", () => {
  test("updates the value of operand1 in state", () => {
    const { getByPlaceholderText } = render(<App />);
    const operand1Input = getByPlaceholderText("...");

    fireEvent.change(operand1Input, { target: { value: "2" } });
    expect(operand1Input.value).toBe("2");
  });
});

describe("handleOperand2", () => {
  test("updates the value of operand2 in state", () => {
    const { getByPlaceholderText } = render(<App />);
    const operand2Input = getByPlaceholderText("...");

    fireEvent.change(operand2Input, { target: { value: "3" } });
    expect(operand2Input.value).toBe("3");
  });
});

describe("handleOperation", () => {
  test("updates the value of operation in state", () => {
    const { getByText } = render(<App />);
    const operationButton = getByText("+");

    fireEvent.click(operationButton);
    expect(operationButton).toHaveClass("selected");
  });
});

describe("useEffect hook", () => {
  it("updates the displayed text when the operands or operation are changed", () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    // Enter values for the operands
    const operand1Input = getByPlaceholderText("...");
    fireEvent.change(operand1Input, { target: { value: "5" } });
    const operand2Input = getByPlaceholderText("...");
    fireEvent.change(operand2Input, { target: { value: "7" } });

    // Select an operation
    const multiplyButton = getByText("*");
    fireEvent.click(multiplyButton);

    // Verify that the correct text is displayed on the page
    const text = getByText("5 * 7");
    expect(text).toBeInTheDocument();

    // Change the values of the operands and operation and verify that the text updates
    fireEvent.change(operand1Input, { target: { value: "8" } });
    fireEvent.change(operand2Input, { target: { value: "9" } });
    const divideButton = getByText("/");
    fireEvent.click(divideButton);

    const updatedText = getByText("8 / 9");
    expect(updatedText).toBeInTheDocument();
  });
});
