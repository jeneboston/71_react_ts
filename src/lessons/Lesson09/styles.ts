import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Lesson09Wrapper = styled.div`
  ${boxBasicStyles};
  gap: 30px;
  flex: 1;
  padding: 50px;
  background: rgba(235, 220, 175, 1);
  font-size: 36px;
`;

export const PanelGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
  @media (min-width: 900px) {
    grid-template-columns: 420px 1fr;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;
`;

export const InputField = styled.div`
  display: grid;
  gap: 8px;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const BoxInfo = styled.div`
  ${boxBasicStyles};
  background: #0f172a;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 12px;
`;

export const AnimalBox = styled.div`
  ${boxBasicStyles};
  background: #111827;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
`;

export const SavedWrapper = styled.div`
  background: #0b1220;
  color: #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
`;

export const SavedTitle = styled.h4`
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const SavedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`;

export const SavedItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 8px;
`;
