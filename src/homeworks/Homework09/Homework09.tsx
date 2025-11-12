import { useState } from "react";
import Counter from "components/Counter/Counter";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {
  Lesson09Wrapper,
  PanelGrid,
  InputsWrapper,
  InputField,
  ActionsRow,
  BoxInfo,
  AnimalBox,
  ResultGrid,
  ValueBox,
  Title
} from "./styles";

export default function Homework09() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState<{ name: string; email: string } | null>(null);

  return (
    <Lesson09Wrapper>
      <Title>Homework09</Title>

      <PanelGrid>
        <div>
          <InputsWrapper>
            <InputField>
              <Input
                label="User name"
                name="user_name"
                id="user_name_id"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputField>

            <InputField>
              <Input
                label="User email"
                type="email"
                name="user_email"
                id="user_email_id"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputField>
          </InputsWrapper>

          <ActionsRow>
            <Button name="Save" onClick={() => setSaved({ name, email })} />
            <Button name="Clear" onClick={() => setSaved(null)} />
          </ActionsRow>
        </div>

        <ResultGrid>
          <ValueBox>
            <strong>Name:</strong>
            <div>{saved?.name ?? "—"}</div>
          </ValueBox>
          <ValueBox>
            <strong>Email:</strong>
            <div>{saved?.email ?? "—"}</div>
          </ValueBox>
        </ResultGrid>
      </PanelGrid>

      <Counter />
      <BoxInfo>Information</BoxInfo>
      <AnimalBox>
        <p>Animal card</p>
      </AnimalBox>
    </Lesson09Wrapper>
  );
}
