import "./style/style.css";
import Button from "./components/Button";
import React, { useState } from "react";
import styled from "styled-components";

const SumTwoNum = () => {
  const [result, setResult] = useState("0");

  const [oldResult, setOldResult] = useState("0");

  const [operation, setOpreation] = useState("");

  const [isSecondNumber, setIsSecondNumber] = useState(false);

  const body = styled.body`
    background: pink; /* Fallback */
    animation: color 9s infinite linear;
    text-align: center;
    padding: 2em;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    border-style: groove;
    border-radius: 50%;
    width: 40%;
    margin-left: 450px;
    padding-bottom: 20px;
    box-shadow: 10px 10px 8px #888888;
  `;

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "00"];
  const operators = ["+", "-", "*", "/", "%", "=", "Del", "C"];

  console.log(result);

  const calculate = () => {
    switch (operation) {
      case "/":
        setResult(oldResult / result);
        break;
      case "+":
        setResult(Number(oldResult) + Number(result));
        break;
      case "-":
        setResult(oldResult - result);
        break;
      case "*":
        setResult(oldResult * result);
        break;
      case "%":
        const percentValue = parseFloat(result) / 100;
        setResult(percentValue.toString());
        break;

      default:
        break;
    }
  };
  const handleDecimal = () => {
    if (!result.includes(".")) {
      setResult((prevValue) => prevValue + ".");
    }
  };

  const clear = () => {
    setResult(0);
  };
  const remove = () => {
    if (result > 0) {
      const newResult = result.slice(0, -1);
      setResult(newResult);
    }
  };

  function handleOperation(event) {
    const currentOperation = event.currentTarget.innerText;
    setOpreation(currentOperation);
    setIsSecondNumber(true);
    setOldResult(result);
  }

  function handleNumberClick(e) {
    if (isSecondNumber) {
      setResult(e.currentTarget.innerText);
      setIsSecondNumber(false);
    } else if (result === "0") setResult(e.currentTarget.innerText);
    else setResult(`${result}${e.currentTarget.innerText}`);
  }

  return (
    <div className="body">
      <h2>Calculator</h2>
      <input
        type="text"
        value={result}
        onChange={(ev) => setResult(+ev.target.value)}
      />
      <div className="operator">
        {operators.map((operator) => {
          if (operator === "=") {
            return (
              <Button
                //className={!isValid && "invalid"}
                text={operator}
                onClick={calculate}
              />
            );
          }

          if (operator === "C") {
            return <Button text={operator} onClick={clear} />;
          }

          if (operator === "Del") {
            return <Button text={operator} onClick={remove} />;
          } else {
            return <Button text={operator} onClick={handleOperation} />;
          }
        })}
      </div>
      <div className="numbers">
        {number.map((num) => {
          if (num === ".") {
            return <Button text={num} onClick={handleDecimal} />;
          }
          return <Button text={num} onClick={handleNumberClick} />;
        })}
      </div>
    </div>
  );
};

export default SumTwoNum;
