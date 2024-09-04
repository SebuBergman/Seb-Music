import { ContentWrapper } from "components/Layout";
import IconButton from "components/UI/IconButton";
import { Logo, Search } from "components/UI/Icons/Icons";
import { SectionSubtitle } from "components/UI/Typography/Typography";
import { LogoWrapper, Wrapper } from "./styled";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <LogoWrapper>
          <Logo />
          <SectionSubtitle>SebMusic</SectionSubtitle>
        </LogoWrapper>
        <IconButton withBackground height={58} width={58}>
          <Search />
        </IconButton>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
