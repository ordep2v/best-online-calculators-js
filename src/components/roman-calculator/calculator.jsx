import React, { useState } from "react";
import Display from "./display";
import Button from "./button";
import MathFunctions from "../../utils/math-functions";
import "../../calculator.css";
export default function RomanCalculator(props) {
  function convertToRoman() {
    let arabic = displayNumber;
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
  const [
    calculate,
    numberConcat,
    SUM,
    DECREASE,
    MULTIPLY,
    SHARE,
  ] = MathFunctions();
  const [displayNumber, setDisplayNumber] = useState("0");
  const [n1, setN1] = useState("0");
  const [n2, setN2] = useState(null);
  const [op, setOp] = useState(null);

  function numberAdd(number) {
    let result;
    if (op === null) {
      result = numberConcat(n1, number);
      setN1(result);
    } else {
      result = numberConcat(n2, number);
      setN2(result);
    }
    setDisplayNumber(result);
  }

  function opAdd(op) {
    if (op !== null) {
      setOp(op);
      calculateAction();
      return;
    }

    if (n2 !== null) {
      const result = calculate(parseInt(n1), parseInt(n2), op);
      setOp(op);
      setN1(result);
      setN2(null);
    }
  }

  function calculateAction() {
    if (n2 === null) {
      return;
    }
    const result = calculate(parseInt(n1), parseInt(n2), op);
    // if(result > 0 && op !== null) {
    //   setDisplayNumber('0')
    // }
    if (result > 0) {
      setN1(result)
      setN2(null)
      setDisplayNumber(result);
    } else {
      setDisplayNumber("Número negativo inválido.");
    }
  
  }
  function clean() {
    setDisplayNumber("0");

    setN1("0");
    setN2(null);
    setOp(null);
  }

  return (
    <div className="calculator">
      <div className="calculator-displays">
        <div className="roman-display">
          <Display children={convertToRoman()} />
        </div>
        <div className="arabic-display">
          <Display children={displayNumber} />
        </div>
      </div>
      <div className="buttons">
        <Button number={"I"} onClick={() => numberAdd("1")} />
        <Button number={"V"} onClick={() => numberAdd("5")} />
        <Button number={"X"} onClick={() => numberAdd("10")} />
        <Button number={"L"} onClick={() => numberAdd("50")} />
        <Button number={"C"} onClick={() => numberAdd("100")} />
        <Button number={"D"} onClick={() => numberAdd("500")} />
        <Button number={"M"} onClick={() => numberAdd("1000")} />
        <Button number={"+"} onClick={() => opAdd(SUM)} />
        <Button number={"-"} onClick={() => opAdd(DECREASE)} />
        <Button number={"*"} onClick={() => opAdd(MULTIPLY)} />
        <Button number={"/"} onClick={() => opAdd(SHARE)} />
        <Button number={"="} onClick={() => calculateAction()} />
        <Button number={"RST"} onClick={() => clean()} />
      </div>
    </div>
  );
}
