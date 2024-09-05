import { useContext } from "react";
import PropTypes from "prop-types";
import DesktopRadioImage from "assets/images/radio-desktop.png";
import { Play } from "components/UI/Icons/Icons";
import { ButtonText, MainTitle } from "components/UI/Typography/Typography";
import { PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import { PlayButton, TextWrapper, Wrapper, HeroText } from "./styled";

function Hero({ tracks }) {
  const dispatch = useContext(PlayerDispatchContext);

  const handlePlayClick = () => {
    dispatch({
      type: actions.SET_TRACKS_DATA,
      track: tracks[0],
      tracks,
      isPlaying: true,
    });
  };
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>Listen to our radio. We will play a perfect soundtrack across devices</HeroText>
        <PlayButton disabled={!tracks || tracks.length <= 0} onClick={handlePlayClick}>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DesktopRadioImage} alt="Hands holding a radio" />
    </Wrapper>
  );
}

Hero.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
};

export default Hero;
