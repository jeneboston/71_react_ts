import { StyledButton } from "./styles";
import type { ButtonProps } from "./types";

function Button({
  type = "button",
  name,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <StyledButton disabled={disabled} type={type} onClick={onClick}>
      {name}
    </StyledButton>
  );
}

export default Button;
