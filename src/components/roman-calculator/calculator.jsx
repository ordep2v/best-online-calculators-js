import React, { useState } from "react";
import Display from "./display";
import Button from "./button";
import MathFunctions from "../../utils/math-functions";

export default function RomanCalculator(props) {
  const [
    calculate,
    numberConcat,
    SUM,
    DECREASE,
    MULTIPLY,
    SHARE,
  ] = MathFunctions();
  const [displayNumber, setDisplayNumber] = useState("0");
  const [displayRoman, setDisplayRoman] = useState("NULO");
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
// nova implementação para concatenação de Romanos
    if (result.length == 2 && result.indexOf(1) == 0 && result.indexOf(0) == 1) {
      setDisplayRoman(result.replace("1", "X").replace("0",""));
    } else {
      setDisplayRoman(result)
    }
  }

  function opAdd(op) {
    if (op !== null) {
      setOp(op);
      return;
    }
    if (n2 !== null) {
      const result = calculate(parseInt(n1), parseInt(n2), op);
      setOp(op);
      setN1(result.toString());
      setN2(null);
      setDisplayNumber(result.toString());
     
    }
  }

  function calculateAction() {
    if (n2 === null) {
      return;
    }
    const result = calculate(parseInt(n1), parseInt(n2), op).toString();

    if (result.length == 2 && result.indexOf('1') == 0) {
      setDisplayRoman(result.replace("1", "X").replace("0",""));
    } else {
      setDisplayRoman(result)
    }

    setDisplayNumber(result);
  }
  function clean() {
    setDisplayNumber("0");
    setDisplayRoman("NULO");
    setN1("0");
    setN2(null);
    setOp(null);
  }

  return (
    <div className="container">
      <Display
        children={displayRoman
          .toString()
          .replaceAll(1000, "M")
          .replaceAll(500, "D")
          .replaceAll(100, "C")
          .replaceAll(50, "L")
          .replaceAll(10, "X")
          .replaceAll(5, "V")
          .replaceAll(1, "I")}
      />
      <Display children={displayNumber} />
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
      <Button number={"RESET"} onClick={() => clean()} />
    </div>
  );
}
