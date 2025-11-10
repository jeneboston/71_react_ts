// src/components/Counter/Counter.tsx
import { useState } from "react";
import styled from "@emotion/styled";

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 50px;
  background: white;
  border-radius: 60px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  font-family: "Lato", sans-serif;
`;

const CounterDisplay = styled.div`
  min-width: 140px;
  font-size: 64px;
  font-weight: 900;
  color: #333;
  text-align: center;
`;

const Button = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background: #ff6b6b;
  color: white;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff5252;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterWrapper>
      <Button onClick={() => setCounter(c => c - 1)}>-</Button>
      <CounterDisplay>{counter}</CounterDisplay>
      <Button onClick={() => setCounter(c => c + 1)}>+</Button>
    </CounterWrapper>
  );
}

export default Counter;