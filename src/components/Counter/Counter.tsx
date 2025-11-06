import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const onMinusClick = (): void => {
    setCounter((prev) => prev - 1);
  };
  const onPlusClick = (): void => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinusClick} />
      </div>
      <div className="counter-display">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;