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
  SavedWrapper,
  SavedTitle,
  SavedList,
  SavedItem,
} from "./styles";

type SavedUser = { user_name: string; user_email: string };

function Lesson09() {
  const [formData, setFormData] = useState<SavedUser>({
    user_name: "",
    user_email: "",
  });
  const [saved, setSaved] = useState<SavedUser[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.user_name.trim() || !formData.user_email.trim()) return;
    setSaved((prev) => [...prev, formData]);
    setFormData({ user_name: "", user_email: "" });
  };

  const handleClear = () => setSaved([]);

  return (
    <Lesson09Wrapper>
      <PanelGrid>
        <div>
          <InputsWrapper>
            <InputField>
              <Input
                label="User name"
                type="text"
                name="user_name"
                id="user_name_id"
                placeholder="Enter your name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </InputField>
            <InputField>
              <Input
                label="User email"
                type="email"
                name="user_email"
                id="user_email_id"
                placeholder="Enter your email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </InputField>
          </InputsWrapper>
          <ActionsRow>
            <Button name="Save" onClick={handleSave} />
            <Button name="Clear list" onClick={handleClear} />
          </ActionsRow>
        </div>
        <SavedWrapper>
          <SavedTitle>Saved users</SavedTitle>
          <SavedList>
            {saved.map((u, i) => (
              <SavedItem key={`${u.user_email}-${i}`}>
                <span>{u.user_name}</span>
                <span>{u.user_email}</span>
              </SavedItem>
            ))}
            {saved.length === 0 && <div>No records yet</div>}
          </SavedList>
        </SavedWrapper>
      </PanelGrid>
      <Counter />
      <BoxInfo>Information</BoxInfo>
      <AnimalBox>
        <p>Animal card</p>
      </AnimalBox>
    </Lesson09Wrapper>
  );
}

export default Lesson09;
