import styled from "@emotion/styled";

interface BoxInfoStyledProps {
  primary?: boolean;
}

// Основной контейнер
export const BoxInfo = styled.div<BoxInfoStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-width: 300px;
  min-height: 300px;
  background: ${({ primary }) =>
    primary ? "rgba(65, 22, 6, 1)" : "rgba(6, 62, 65, 1)"};
  border: 2px solid rgba(5, 88, 76, 1);
`;

// Контейнер для контента внутри BoxInfo
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// Картинка
export const Image = styled.img`
  width: 30px;
`;

// Текст внутри BoxInfo, наследующий primary
export const Text = styled.p<BoxInfoStyledProps>`
  color: ${({ primary }) => (primary ? "white" : "yellow")};
  font-size: ${({ primary }) => (primary ? "40px" : "30px")};
  margin: 0;
`;
