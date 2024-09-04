import styled from "styled-components";
import { SectionSubtitle } from "components/UI/Typography/Typography";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width 220px;
  height: 116px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;

  &:hover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.4;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center center;
    border-radius: 25px;
  }
`;

export const GenreName = styled(SectionSubtitle)`
  z-index: ${({ theme }) => theme.zIndex["10"]};
`;