import styled from "@emotion/styled";

export const Card = styled.form`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 520px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
`;

export const Title = styled.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: #0f172a;
`;

export const Subtitle = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: #6b7280;
`;

export const Fields = styled.div`
  display: grid;
  gap: 12px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;