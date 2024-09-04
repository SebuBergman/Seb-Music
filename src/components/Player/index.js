import { useContext, useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import { ContentWrapper } from "components/Layout";
import IconButton from "components/UI/IconButton";
import { formatSecondsToMSS } from "utils/time";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/UI/Icons/Icons";
import { theme } from "styles/Theme";
import {
  Wrapper,
  TrackInfoWrapper,
  TrackInfoTextWrapper,
  TrackImage,
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
  TrackTitle,
} from "./styled";

const track = {
  id: 1764283667,
  title: "I Ain't Worried",
  title_short: "I Ain't Worried",
  title_version: "",
  link: "https://www.deezer.com/track/1764283667",
  duration: 148,
  rank: 993048,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: "https://cdns-preview-7.dzcdn.net/stream/c-7d22783a305a9d2397d7bcbf3e7cb5a3-4.mp3",
  md5_image: "c86f870a3ea8782da239a9dd10315cdc",
  position: 1,
  artist: {
    id: 74398,
    name: "OneRepublic",
    link: "https://www.deezer.com/artist/74398",
    picture: "https://api.deezer.com/artist/74398/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/0a256b1b49afa3e32e571e8a10d68201/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/0a256b1b49afa3e32e571e8a10d68201/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/0a256b1b49afa3e32e571e8a10d68201/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/0a256b1b49afa3e32e571e8a10d68201/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/74398/top?limit=50",
    type: "artist",
  },
  album: {
    id: 321440247,
    title: "Top Gun: Maverick (Music From The Motion Picture)",
    cover: "https://api.deezer.com/album/321440247/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/c86f870a3ea8782da239a9dd10315cdc/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/c86f870a3ea8782da239a9dd10315cdc/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/c86f870a3ea8782da239a9dd10315cdc/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/c86f870a3ea8782da239a9dd10315cdc/1000x1000-000000-80-0-0.jpg",
    md5_image: "c86f870a3ea8782da239a9dd10315cdc",
    tracklist: "https://api.deezer.com/album/321440247/tracks",
    type: "album",
  },
  type: "track",
};

function Player() {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);
  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.7,
  })
  const audioRef = useRef();

  const togglePlay = () => dispatch({ type: actions.TOGGLE_PLAY });

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 1;

    onVolumeChange(newVolume);
  };

  const onTimeUpdate = () => {
    if(!audioRef?.current) return;

    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  }

  const onTrackTimeDrag = (newTime) => {
    if(!audioRef?.current) return;

    audioRef.current.currentTime = newTime;

    setPlayerState((prev) => ({ ...prev, volume: newTime }))
  }

  const onVolumeChange = (newVolume) => {
    if(!audioRef?.current) return;

    audioRef.current.volume = newVolume;

    setPlayerState((prev) => ({...prev, volume: newVolume }));
  };

  const handleNextSong = () => dispatch({ type: actions.NEXT_SONG });
  const handlePrevSong = () => dispatch({ type: actions.PREV_SONG });

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => console.log(error));
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, track, isPlaying]);

  if (!track) {
    return null;
  }

  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center">
        <audio
          ref={audioRef}
          src={track.preview}
          controls
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onTimeUpdate}
          hidden
          onEnded={handleNextSong}
        />
        <TrackInfoWrapper>
          <TrackImage src={track.album.cover} alt={`${track?.album.title}'s cover`} />
          <TrackInfoTextWrapper>
            <TrackTitle>{track.title}</TrackTitle>
            <ArtistName>{track.title}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton onClick={handlePrevSong}>
            <SkipLeft />
          </IconButton>
          <IconButton onClick={togglePlay} width={55} height={55} withBackground>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton onClick={handleNextSong}>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>0:00</TrackTime>
          <Slider
            onChange={onTrackTimeDrag}
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime>{formatSecondsToMSS(playerState.duration)}</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton onClick={toggleVolume} height={24} width={24}>
            <Volume />
          </IconButton>
          <Slider
            step={0.1}
            min={0}
            max={1}
            onChange={onVolumeChange}
            value={playerState.volume}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Player;
