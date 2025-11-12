import styled from "@emotion/styled";

export const Lesson09Wrapper = styled.div`
  display: grid;
  gap: 24px;
  padding: 24px;
`;

export const PanelGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  @media (min-width: 900px) {
    grid-template-columns: 420px 1fr;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  gap: 16px;
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

export const SavedWrapper = styled.div`
  display: grid;
  gap: 12px;
`;

export const SavedTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

export const SavedList = styled.ul`
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SavedItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const BoxInfo = styled.div`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const AnimalBox = styled.div`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const ResultGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  max-width: 520px;
`;

export const ValueBox = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
  display: grid;
  gap: 6px;

  strong {
    font-size: 14px;
    color: #374151;
  }
`;
