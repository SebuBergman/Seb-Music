import styled from "styled-components";
import { SectionSubtitle } from "components/UI/Typography/Typography";
import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { device } from "styles/BreakPoints";

export const TrendsAndArtistsSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  gap: 90px;
  padding-bottom: 135px;
  overflow: hidden;

  ${device.xl} {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }
`;

export const GreyTitle = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledAside = styled.aside`
  margin-left: 90px;

  ${device.xl} {
    margin-left: 0;
  }
`;
