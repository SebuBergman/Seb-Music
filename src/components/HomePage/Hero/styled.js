import styled from "styled-components";
import { Text } from "components/UI/Typography/Typography";
import Button from "components/UI/Button";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin: 24px 0 35px;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const TextWrapper = styled.div`
  padding-left: 123px;
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;

export const PlayButton = styled(Button)`
  display: flex;
  gap: 14px;
  align-items: center;
`;
