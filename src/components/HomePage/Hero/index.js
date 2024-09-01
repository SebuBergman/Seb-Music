import DesktopRadioImage from "assets/images/radio-desktop.png";
import { Play } from "components/UI/Icons/Icons";
import { ButtonText, MainTitle } from "components/UI/Typography/Typography";
import { PlayButton, TextWrapper, Wrapper, HeroText } from "./styled";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>Listen to our radio. We will play a perfect soundtrack across devices</HeroText>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DesktopRadioImage} alt="Hands holding a radio" />
    </Wrapper>
  );
}

export default Hero;
