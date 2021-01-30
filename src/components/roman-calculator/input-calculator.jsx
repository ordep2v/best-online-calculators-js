import React, { useState } from "react";
import MathFunctions from "../../utils/math-functions";
import Button from "./button";

const InputCalculator = ({}) => {
  const errorText = "*Insira valores válidos*";
  const [resultNumber, setResultNumber] = useState("0");
  const [values, setValues] = useState({
    num1: "",
    num2: "",
    operation: "",
  });
  const [SUM, DECREASE, MULTIPLY, SHARE] = MathFunctions();

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
        case "M":
          return 1000;
        case "CM":
          return 900;
        case "D":
          return 500;
        case "CD":
          return 400;
        case "C":
          return 100;
        case "XC":
          return 90;
        case "L":
          return 50;
        case "XL":
          return 40;
        case "X":
          return 10;
        case "IX":
          return 9;
        case "V":
          return 5;
        case "IV":
          return 4;
        case "I":
          return 1;
        default:
          return anyNumber;
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
    if (values.num1 > 0 && values.num2 > 0) {
      result = eval(
        `${values.num1} ${values.operation.toString()} ${values.num2}`
      );
    } else {
      result = eval(
        `${toSum(values.num1)} ${values.operation.toString()} ${toSum(
          values.num2
        )}`
      );
    }
    console.log(toSum(result));

    if (result > 0) {
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
    console.log(
      eval(
        `${toSum(values.num1)} ${values.operation.toString()} ${toSum(
          values.num2
        )}`
      )
    );
    // console.log(eval(`${convertToArabic(values.num1)} ${values.operation.toString()} ${convertToArabic(values.num2)}`));
  //   console.log(parseInt(toSum(values.num1)));
  //   console.log(values.operation);
    console.log((values.num1));
    console.log(Number.isInteger(values.num1));
        }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // calculateAction();
    callback();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} id="form">
          <label htmlFor="num1">Insira o número</label>
          {resultNumber !== "0" && (
            <input
              type="number"
              name="num1"
              onChange={handleChange}
              disabled
              required
            />
          )}
          {resultNumber === "0" && (
            <input type="text" name="num1" onChange={handleChange} required />
          )}
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
              <option value={SUM}>+</option>
              <option value={DECREASE}>-</option>
              <option value={MULTIPLY}>x</option>
              <option value={SHARE}>/</option>
            </select>
          )}
          {resultNumber === "0" && (
            <select name="operation" required onChange={(e) => handleChange(e)}>
              <option defaultValue value="">
                Selecione
              </option>
              <option value={SUM}>+</option>
              <option value={DECREASE}>-</option>
              <option value={MULTIPLY}>x</option>
              <option value={SHARE}>/</option>
            </select>
          )}

          <label htmlFor="">Insira o número</label>
          {resultNumber !== "0" && (
            <input
              type="number"
              name="num2"
              onChange={handleChange}
              disabled
              required
            />
          )}
          {resultNumber === "0" && (
            <input type="text" name="num2" onChange={handleChange} required />
          )}

          <button type="submit">Submit</button>
          <label htmlFor="">Resultado</label>
          <div>{resultNumber}</div>
          <label htmlFor="">Resultado</label>
          {resultNumber.length > 1 &&
          resultNumber !== "*Insira valores válidos*" ? (
            <>
              <div>
                {values.num1}
                <div> {values.operation}</div>
                <div>{values.num2}</div>
                <div>
                  {" "}
                  ={" "}
                  {convertToRoman(
                    eval(
                      `${toSum(
                        values.num1
                      )} ${values.operation.toString()} ${toSum(values.num2)}`
                    )
                  )}
                </div>
              </div>
            </>
          ) : (
            <div>NULO</div>
          )}

          <Button
            className="button"
            number="RST"
            onClick={() => cleanDisplay()}
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default InputCalculator;
