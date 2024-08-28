import DesktopRadioImage from "assets/images/radio-desktop.png";
import { Play } from "components/UI/Icons/Icons";
import { ButtonText, MainTitle, Text } from "components/UI/Typography/Typography";
import { PlayButton, TextWrapper, Wrapper } from "./styled";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Listen to our radio. We will play a perfect soundtrack across devices</Text>
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
