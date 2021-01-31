import React, { useState } from "react";
import Display from "./display";
import Button from "./button";
import MathFunctions from "../../utils/math-functions";
import "../../app.css";

export default function RomanCalculator(props) {
  const errorText = "*Insira valores válidos*";
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
  const [displayOp, setDisplayOp] = useState("");
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
    // if (convertToRoman().length >= 12) {
    //   clean();
    //   setDisplayNumber(errorText);
    // }
  }

  function opAdd(op) {
    if (op !== null && displayNumber !== "0") {
      setOp(op);
      calculateAction();
      setDisplayOp(op);
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
    if (result > 0 && Number.isInteger(result)) {
      console.log(convertToRoman().length);
      setN1(result);
      setN2(null);
      setDisplayNumber(parseInt(result));
      setDisplayOp("");
    } else {
      clean();
      setDisplayNumber(errorText);
      setDisplayOp(null);
    }
  }
  function clean() {
    setDisplayNumber("0");
    setDisplayOp("");
    setN1("0");
    setN2(null);
    setOp(null);
  }

  return (
    <div className="calculator">
      <div className="calculator-displays">
        <div className="display">
          {displayNumber === errorText && (
            <Display>
              <div className="roman-display">*Algum problema aconteceu*</div>
            </Display>
          )}

          {displayNumber !== errorText && (
            <Display>
              <div></div>
              <div
                className="roman-display"
                style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              >
                {convertToRoman()}
              </div>
            </Display>
          )}
        </div>
        <div className="display arabic-display">
          {displayNumber === errorText && (
            <Display>
              <div>{displayNumber}</div>
            </Display>
          )}
          {displayNumber !== errorText && (
            <Display>
              <div style={{ fontSize: "3rem" }}>
                <strong>{displayOp}</strong>
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                {displayNumber}
              </div>
            </Display>
          )}
        </div>
      </div>
      <div className="buttons">
        <Button
          className="button"
          number={"I"}
          onClick={() => numberAdd("1")}
          style={{ borderRadius: "1rem 0 0 0" }}
        />
        <Button
          className="button"
          number={"V"}
          onClick={() => numberAdd("5")}
        />
        <Button
          className="button"
          number={"X"}
          onClick={() => numberAdd("10")}
        />
        <Button
          className="button"
          number={"L"}
          onClick={() => numberAdd("50")}
          style={{ borderRadius: "0 1rem 0 0" }}
        />
        <Button
          className="button"
          number={"C"}
          onClick={() => numberAdd("100")}
        />
        <Button
          className="button"
          number={"D"}
          onClick={() => numberAdd("500")}
        />
        <Button
          className="button"
          number={"M"}
          onClick={() => numberAdd("1000")}
        />
        <Button className="button" number={"+"} onClick={() => opAdd(SUM)} />
        <Button
          className="button"
          number={"-"}
          onClick={() => opAdd(DECREASE)}
          style={{ borderRadius: "0 0 0 1rem" }}
        />
        <Button
          className="button"
          number={"*"}
          onClick={() => opAdd(MULTIPLY)}
        />
        <Button className="button" number={"/"} onClick={() => opAdd(SHARE)} />
        <Button
          className="button"
          number={"="}
          onClick={() => calculateAction()}
          style={{ borderRadius: "0 0 1rem 0" }}
        />
        <Button
          id="reset-button"
          className="button"
          number={"RST"}
          style={{
            marginTop: ".5rem",
            width: "6.5rem",
            height: "6.5rem",
            borderRadius: "5rem",
            background: "#aa0000",
            borderColor: "#312c3b",
          }}
          onClick={() => clean()}
        />
        <Button className="button disabled" />
        <Button className="button disabled" />
        <div className="logo-bottom">
          <img
            src="./logopccalculadoras.png"
            alt="logo pedro cunha calculadoras"
          />
        </div>
      </div>
    </div>
  );
}
