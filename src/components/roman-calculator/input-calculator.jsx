import React, { useState } from "react";
import Button from "./button";
import "../../app.css";

const InputCalculator = () => {
  const errorText = "*Insira valores válidos*";
  const [resultNumber, setResultNumber] = useState("0");
  const [values, setValues] = useState({
    num1: "",
    num2: "",
    operation: "",
  });

  function convertToRoman(anyNumber) {
    let arabic = anyNumber;
    let roman = "";
    const arabicArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanArray = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    if (arabic === "0") {
      roman = "NULO";
      return roman;
    }
    if (arabic !== 0) {
      for (let i = 0; i < arabicArray.length; i++) {
        while (arabicArray[i] <= arabic) {
          roman += romanArray[i];
          arabic -= arabicArray[i];
        }
      }
      return roman;
    }
  }
  function convertToArabic(anyNumber) {
    var numbers = anyNumber;

    if (anyNumber) {
      switch (anyNumber) {
        case "m":
        case "M":
          return 1000;
        case "cm":
        case "CM":
          return 900;
        case "d":
        case "D":
          return 500;
        case "cd":
        case "CD":
          return 400;
        case "c":
        case "C":
          return 100;
        case "xc":
        case "XC":
          return 90;
        case "l":
        case "L":
          return 50;
        case "xl":
        case "XL":
          return 40;
        case "x":
        case "X":
          return 10;
        case "ix":
        case "IX":
          return 9;
        case "v":
        case "V":
          return 5;
        case "iv":
        case "IV":
          return 4;
        case "i":
        case "I":
          return 1;
        default:
          return "";
      }
    }
    return numbers;
  }

  function toSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + convertToArabic(numbers[i]);
    }
    return sum;
  }

  function calculateAction() {
    let result = "";

    if (!isNaN(values.num1) && !isNaN(values.num2)) {
      result = eval(`${values.num1} ${values.operation} ${values.num2}`);
    } else {
      result = eval(
        `${toSum(values.num1)} ${values.operation.toString()} ${toSum(
          values.num2
        )}`
      );
    }

    if (result >= 0) {
      setResultNumber(
        `${values.num1}
        `
      );
    } else {
      setResultNumber(errorText);
    }
  }

  function cleanDisplay() {
    setResultNumber("0");
  }

  function callback() {
    console.log();
    console.log(values.operation);
    console.log(isNaN(values.num1));
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!isNaN(values.num1) && !!isNaN(values.num2)) {
      calculateAction();
    } else if (!isNaN(values.num1) && !isNaN(values.num2)) {
      calculateAction();
    } else if (!isNaN(values.num1) && !!isNaN(values.num2)) {
      setResultNumber(errorText);
    } else if (!!isNaN(values.num1) && !isNaN(values.num2)) {
      setResultNumber(errorText);
    } else {
      setResultNumber(errorText);
    }
    callback();
  };

  return (
    <div className="input-calculator" aria-label="calculadora por input">
      <div className="input-display">
        <div className="input-result">
          {!resultNumber ||
            (resultNumber === "0" && (
              <>
                <div>NULO</div>
                <div>{resultNumber}</div>
              </>
            ))}
          {resultNumber === errorText && (
            <>
              <div>{resultNumber}</div>
              <div></div>
            </>
          )}
          {resultNumber.length > 1 &&
            resultNumber !== errorText &&
            !!isNaN(values.num1) &&
            !!isNaN(values.num2) && (
              <>
                <div className="input-content input">
                  <div>
                    {values.num1.toUpperCase()}
                    {values.operation}
                    {values.num2.toUpperCase()} ={" "}
                    {convertToRoman(
                      eval(
                        `${toSum(
                          values.num1
                        )} ${values.operation.toString()} ${toSum(values.num2)}`
                      )
                    )}
                  </div>
                  <div></div>
                  <div className="input-content">
                    {eval(
                      `${toSum(
                        values.num1
                      )} ${values.operation.toString()} ${toSum(values.num2)}`
                    )}
                  </div>
                </div>
              </>
            )}
          {resultNumber.length > 1 &&
            resultNumber !== "*Insira valores válidos*" &&
            !isNaN(values.num1) &&
            !isNaN(values.num2) && (
              <>
                <div className="input-content">
                  <div>
                    {values.num1}
                    {values.operation}
                    {values.num2} ={" "}
                    {eval(`${values.num1} ${values.operation} ${values.num2}`)}
                  </div>
                  <div className="input-content">
                    {convertToRoman(
                      eval(
                        `${values.num1} ${values.operation.toString()} ${
                          values.num2
                        }`
                      )
                    )}
                  </div>
                </div>
              </>
            )}
        </div>
        <div className="logo-input">
          <img src="./inputcalculator.png" alt="logo calculadora input"></img>
        </div>
      </div>
      <div className="form">
        <form
          onSubmit={handleSubmit}
          id="form-calculator"
          aria-label="formulario"
        >
          <div>
            <label htmlFor="num1">Insira um número</label>
            {resultNumber !== "0" && (
              <input
                id="input-calculator-preferences"
                type="number"
                name="num1"
                onChange={handleChange}
                disabled
                required
              />
            )}

            {resultNumber === "0" && (
              <input
                id="input-calculator-preferences"
                type="text"
                name="num1"
                onChange={handleChange}
                required
              />
            )}
          </div>
          <div>
            <label htmlFor="">Insira a operação</label>
            {resultNumber !== "0" && (
              <select
                name="operation"
                required
                onChange={(e) => handleChange(e)}
                disabled
              >
                <option defaultValue value="">
                  Selecione
                </option>
                <option value="+">SOMAR</option>
                <option value="-">SUBTRAIR</option>
                <option value="*">MULTIPLICAR</option>
                <option value="/">DIVIDIR</option>
              </select>
            )}

            {resultNumber === "0" && (
              <select
                name="operation"
                required
                onChange={(e) => handleChange(e)}
              >
                <option defaultValue value="">
                  Selecione
                </option>
                <option value="+">SOMAR</option>
                <option value="-">SUBTRAIR</option>
                <option value="*">MULTIPLICAR</option>
                <option value="/">DIVIDIR</option>
              </select>
            )}
          </div>

          <div>
            <label htmlFor="">Insira um número</label>
            {resultNumber !== "0" && (
              <input
                id="input-calculator-preferences"
                type="number"
                name="num2"
                onChange={handleChange}
                disabled
                required
              />
            )}
            {resultNumber === "0" && (
              <input
                id="input-calculator-preferences"
                type="text"
                name="num2"
                onChange={handleChange}
                required
              />
            )}
          </div>
        </form>
        <div className="submit-button">
          <Button
            id="reset-button"
            className="button-input"
            number="RST"
            onClick={() => cleanDisplay()}
          ></Button>
          <div>
            {!!values.num1 && !!values.num2 && !!values.operation ? (
              <button
                onClick={handleSubmit}
                type="submit"
                className="button-submit"
              >
                =
              </button>
            ) : (
              <button type="submit" className="button-submit disabled-button">
                =
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCalculator;
