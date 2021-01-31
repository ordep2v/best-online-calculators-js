import React, { useState } from "react";
import Button from "../../template/button";

export default function Bhaskara() {
  const errorText = "*Erro* Delta negativo.";
  const [x1, setX1] = useState("");
  const [x2, setX2] = useState("");
  const [delta, setDelta] = useState("");
  const [displayEq, setDisplayEq] = useState("");
  const [valuesEq, setValuesEq] = useState({
    valueA: "",
    valueB: "",
    valueC: "",
  });

  function deltaFind() {
    let result = valuesEq.valueB ** 2 - 4 * (valuesEq.valueA * valuesEq.valueC);
    setDelta(result);
  }

  function findTwoX() {
    let x1 = 0;
    let x2 = 0;

    x1 = (-valuesEq.valueB + Math.sqrt(delta)) / (2 * valuesEq.valueA);
    x2 = (-valuesEq.valueB - Math.sqrt(delta)) / (2 * valuesEq.valueA);
    setX1(x1);
    setX2(x2);
  }
  const handleChange = (e) => {
    setValuesEq({ ...valuesEq, [e.target.name]: e.target.value });
  };
  function displayClean() {
    setDisplayEq("");
    setValuesEq({ valueB: 0 });
    setX1(null);
    setX2(null);
    setDelta(null);
  }
  function handleSubmit(e) {
    e.preventDefault();
    deltaFind();
    findTwoX();
    delta === null || (delta === "" && setDisplayEq(errorText));
  }
  return (
    <>
      <div className="bhaskara-calculator">
        <div className="bhaskara-display">
          {!valuesEq.valueA && (
            <>
              <div>Complete a equação de 2º grau: </div>
              <div>(a)x²+(b)x+(c) = 0</div>
            </>
          )}
          {!delta && valuesEq.valueA && (
            <>
              <div>Complete a equação: </div>
              <div>
                ({valuesEq.valueA})x²+({valuesEq.valueB})x+(
                {valuesEq.valueC}) = 0
              </div>
            </>
          )}
          {delta < 0 && (
            <>
              <div>{displayEq}</div>
              <div></div>
            </>
          )}
          {delta > 0 && (
            <>
              <div>
                &#916;= -{valuesEq.valueB}²-4*{valuesEq.valueA}*
                {valuesEq.valueC} = {delta}
              </div>
              <div>
                <div>
                  X'=-{valuesEq.valueB}+&#8730;{delta}&#247;2({valuesEq.valueA})
                  = {x1}
                </div>{" "}
                <div>
                  X"=-{valuesEq.valueB}-&#8730;{delta}&#247;2(
                  {valuesEq.valueA}) = {x2}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="bhaskara-form">
          {!delta && (
            <form onSubmit={handleSubmit} aria-label="formulario">
              <div>
                <label htmlFor="valueA">Insira o valor de (a)</label>
                <input
                  id="bhaskara-input"
                  type="number"
                  name="valueA"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="valueA">Insira o valor de (b)</label>
                <input
                  id="bhaskara-input"
                  type="number"
                  name="valueB"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="valueA">Insira o valor de (c)</label>
                <input
                  style={{ marginLeft: "2.3rem" }}
                  id="bhaskara-input"
                  type="number"
                  name="valueC"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </form>
          )}
          <div className="bhaskara-buttons">
            <Button
              id="reset-button"
              number="RST"
              onClick={() => displayClean()}
              className="button-input"
            ></Button>
            {!!delta && (
              <Button
                className="button-submit disabled-button"
                id="bhaskara-submit"
                number="="
              ></Button>
            )}
            {!delta && (
              <Button
                className="button-submit"
                id="bhaskara-submit"
                number="="
                onClick={handleSubmit}
              >
                =
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
