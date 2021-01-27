export default function MathFunctions() {
  const SUM = "+";
  const DECREASE = "-";
  const MULTIPLY = "*";
  const SHARE = "/";
  const POWER = "^";

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
      case POWER:
        result = Math.pow(n1, n2);
        break;
      default:
        result = 0;
    }
    return result;
  }

  function numberConcat(currentNumber, numConcat) {
    if(currentNumber === 'NULO') {
      currentNumber = ''
    }
    if (currentNumber === "0" || currentNumber === null) {
      currentNumber = "";
    }
    if (currentNumber === "" && numConcat === ".") {
      return "0.";
    }
    if (numConcat === "." && currentNumber.indexOf(".") > -1) {
      return currentNumber;
    }
    return currentNumber + numConcat;
  }
  return [calculate, numberConcat, SUM, DECREASE, MULTIPLY, SHARE, POWER];
}
