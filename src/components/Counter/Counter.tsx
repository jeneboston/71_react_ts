import { useState } from "react";
import Button from "../Button/Button";
import { Wrapper, Display, Cell } from "./styles";

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const onMinusClick = () => setCounter(v => v - 1);
  const onPlusClick  = () => setCounter(v => v + 1);

  return (
    <Wrapper>
      <Cell><Button name="-" onClick={onMinusClick} /></Cell>
      <Display>{counter}</Display>
      <Cell><Button name="+" onClick={onPlusClick} /></Cell>
    </Wrapper>
  );
}

export default Counter;
