import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background: #2563eb;
  color: #fff;
  padding: 8px 12px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity .15s;
  &:hover { opacity: .9; }
  &:disabled { opacity: .5; cursor: not-allowed; }
`;
