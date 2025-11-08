import { Container, Label, Field } from "./styles";
import type { InputProps } from "./types";

function Input({ name, type = "text", id, label, placeholder }: InputProps) {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Field name={name} type={type} id={id} placeholder={placeholder} />
    </Container>
  );
}

export default Input;
