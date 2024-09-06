import styled from "styled-components";
import IconButton from "components/UI/IconButton";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 35px;
  overflow: hidden;

  ${device.md} {
    gap: 20px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${device.md} {
    gap: 8px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 116px;
  gap: 20px;

  ${device.md} {
    gap: 9px;
  }
`;

export const GenreSkeletonWrapper = styled.div`
  display: fleX;
`;

export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;
