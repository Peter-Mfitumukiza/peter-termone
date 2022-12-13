import styled from "styled-components";
import React, { useEffect, useState } from "react";
import './App.css';

import axios from "./axios";

function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operation, setOperation] = useState("");
  const [text, setText] = useState("");

  const handleOperand1 = (e) => {
    setOperand1(e.target.value);
  };

  const handleOperand2 = (e) => {
    setOperand2(e.target.value);
  };

  const handleOperation = (value) => {
    setOperation(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/doMath", {
        operand1: parseInt(operand1),
        operand2: parseInt(operand2),
        operation: operation,
      })
      .then((response) => {
        setText(`${text} = ${response?.calcResponse}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setText(`${operand1} ${operation} ${operand2}`);
  }, [operand1, operand2, operation]);

  return (
    <Container>
      <div className="header">
        <p>ONLINE CALCULATOR</p>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="row answer">
          <p>{text}</p>
        </div>
        <div className="row input">
          <input
            type="text"
            placeholder="Enter num 1"
            value={operand1}
            onChange={handleOperand1}
          />
        </div>
        <div className="row input">
          <input
            type="text"
            placeholder="Enter num2"
            value={operand2}
            onChange={handleOperand2}
          />
        </div>
        <div className="operations">
          <div
            className={operation === "*" ? "selected box" : "box"}
            onClick={() => handleOperation("*")}
          >
            <p>*</p>
          </div>
          <div
            className={operation === "/" ? "selected box" : "box"}
            onClick={() => handleOperation("/")}
          >
            <p>/</p>
          </div>
          <div
            className={operation === "+" ? "selected box" : "box"}
            onClick={() => handleOperation("+")}
          >
            <p>+</p>
          </div>
          <div
            className={operation === "-" ? "selected box" : "box"}
            onClick={() => handleOperation("-")}
          >
            <p>-</p>
          </div>
          <div
            className={operation === "**" ? "selected box" : "box"}
            onClick={() => handleOperation("**")}
          >
            <p>**</p>
          </div>
          <div
            className={operation === "log" ? "selected box" : "box"}
            onClick={() => handleOperation("log")}
          >
            <p>log</p>
          </div>
          <div
            className={operation === "ln" ? "selected box" : "box"}
            onClick={() => handleOperation("ln")}
          >
            <p>ln</p>
          </div>
        </div>
        <button type="submit" onClick={() => handleSubmit()}>See Results</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header {
    width: auto;
    height: 150px;
    display: flex;
    align-items: center;
    p {
      color: var(--white);
      font-size: 1.5em;
      font-weight: 700;
    }
  }
  form {
    width: 600px;
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid var(--bright);
    border-radius: 10px;
    .row {
      width: 100%;
      height: 70px;
      margin: 0 0 10px 0;
      background: var(--gray);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      overflow: hidden;
      input {
        width: 100%;
        height: 100%;
        background: transparent;
        padding: 0 10px;
        text-align: center;
        border: none;
        color: var(--white);
      }
    }
    .answer {
      background: var(--bright);
      p {
        color: var(--white);
        font-size: 1.5em;
      }
    }
    .operations {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      .box {
        width: 100%;
        height: 100px;
        display: flex;
        cursor: pointer;
        align-items: center;
        border-radius: 5px;
        justify-content: center;
        background: var(--gray);
        p {
          font-size: 1.2em;
          color: var(--white);
        }
      }
      .selected {
        background: var(--bright) !important;
      }
    }
    button {
      width: 100%;
      height: 60px;
      margin: 10px 0 0 0;
      border-radius: 5px;
      background: var(--bright);
      color: var(--white);
    }
  }
`;

export default App;
