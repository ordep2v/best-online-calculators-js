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

  function convertToRoman(resultNumber) {
    let arabic = resultNumber;
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

  function calculateAction() {
    let result = eval(`${values.num1} ${values.operation} ${values.num2}`);

    if (result > 0) {
      setResultNumber(
        `${values.num1} ${values.operation} ${values.num2} = ${result}`
      );
    } else {
      setResultNumber(errorText);
    }
  }

  function cleanDisplay() {
    setResultNumber("0");
  }

  function callback() {
    console.log(values.num1);
    console.log(values.num2);
    console.log(values.operation);
    console.log(eval(`${values.num1} ${values.operation} ${values.num2}`));
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAction();
    callback();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} id="form">
          <label htmlFor="num1">Insira o número</label>
          <input type="number" name="num1" onChange={handleChange} required />

          <label htmlFor="">Insira a operação</label>
          <select name="operation" required onChange={(e) => handleChange(e)}>
            <option defaultValue value="">
              Selecione
            </option>
            <option value={SUM}>+</option>
            <option value={DECREASE}>-</option>
            <option value={MULTIPLY}>x</option>
            <option value={SHARE}>/</option>
          </select>

          <label htmlFor="">Insira o número</label>
          <input
            type="number"
            name="num2"
            required
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Submit</button>
          <label htmlFor="">Resultado</label>
          <div>{resultNumber}</div>
          <label htmlFor="">Resultado</label>
          <div>{convertToRoman(`${values.num1}`)}</div>
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
