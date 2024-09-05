import { ContentWrapper } from "components/Layout";
import IconButton from "components/UI/IconButton";
import { Logo, Search } from "components/UI/Icons/Icons";
import { SectionSubtitle } from "components/UI/Typography/Typography";
import { Link } from "react-router-dom";
import { LogoWrapper, Wrapper } from "./styled";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <Link to="/">
          <LogoWrapper>
            <Logo />
            <SectionSubtitle>SebMusic</SectionSubtitle>
          </LogoWrapper>
        </Link>
        <Link to="/search">
          <IconButton withBackground height={58} width={58}>
            <Search />
          </IconButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
