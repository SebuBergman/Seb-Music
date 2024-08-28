import IconButton from "components/UI/IconButton";
import { Logo, Search } from "components/UI/Icons/Icons";
import { SectionSubtitle } from "components/UI/Typography/Typography";
import { LogoWrapper, Wrapper } from "./styled";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
        <SectionSubtitle>SebMusic</SectionSubtitle>
      </LogoWrapper>
      <IconButton withBackground height={58} width={58}>
        <Search />
      </IconButton>
    </Wrapper>
  );
}

export default Header;
