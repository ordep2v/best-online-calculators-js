export default function MathFunctions() {
  const SUM = "+";
  const DECREASE = "-";
  const MULTIPLY = "*";
  const SHARE = "/";

  function calculate(n1, n2, op) {
    let result;
    switch (op) {
      case SUM:
        result = n1 + n2;
        break;
      case DECREASE:
        result = n1 - n2;
        break;
      case MULTIPLY:
        result = n1 * n2;
        break;
      case SHARE:
        result = n1 / n2;
        break;
      default:
        result = 0;
    }
    return result;
  }
  function numberConcat(currentNumber, numConcat) {
    let result;
    if (currentNumber) {
       result = parseInt(currentNumber) + parseInt(numConcat);
       return result
    }
    if (currentNumber === "0" || currentNumber === null) {
      currentNumber = "";
    }
    return currentNumber + numConcat;
  }


  
  return [calculate, numberConcat, SUM, DECREASE, MULTIPLY, SHARE];
}
