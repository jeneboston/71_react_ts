import { useEffect, useState } from "react";
import Input from "components/Input/Input";
import { Wrapper, Inputs, Result } from "./styles";

type CatFact = { fact: string; length: number };

export default function Homework10() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fact, setFact] = useState("");
  const [error, setError] = useState("");

  const fetchFact = async () => {
    try {
      setError("");
      setFact("");
      const res = await fetch("https://catfact.ninja/fact");
      const data: CatFact = await res.json();
      setFact(data.fact);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Request failed");
    }
  };

  useEffect(() => {
    if (name !== "") fetchFact();
  }, [name]); 

  return (
    <Wrapper>
      <Inputs>
        <Input
          label="User name"
          name="user_name"
          id="hw10_user_name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="User email"
          type="email"
          name="user_email"
          id="hw10_user_email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Inputs>
      <Result>
        {error && <span style={{ color: "#ef4444" }}>{error}</span>}
        {!error && fact && <span>{fact}</span>}
      </Result>
    </Wrapper>
  );
}
