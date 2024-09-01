import styled from "styled-components";
import { SectionSubtitle } from "components/UI/Typography/Typography";

export const ContentWrapper = styled.main`
  padding: 0 120px;
`;

export const TrendsAndArtistsSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  gap: 90px;
  padding-bottom: 135px;
  overflow: hidden;
`;

export const GreyTitle = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;