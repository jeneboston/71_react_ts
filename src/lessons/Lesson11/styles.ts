import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  padding: 24px;
  place-items: center;
`;

export const ImageBox = styled.div`
  max-width: 520px;
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    display: block;
  }
`;

export const ErrorBox = styled.div`
  color: #ef4444;
  font-size: 16px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`;