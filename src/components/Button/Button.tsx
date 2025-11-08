import type { ButtonProps } from "./types";
import { StyledButton } from "./styles";

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
