import React, { useEffect } from "react";
import styled from "styled-components";
import { playAudio } from "../utilities/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStepForward,
  faStepBackward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songRef,
  timeInfo,
  handleDrag,
}) => {
  console.log(timeInfo);

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const handlePlay = () => {
    if (isPlaying) {
      songRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      songRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipSong = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forwards") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "backwards") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, songRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying, songRef);
  };

  useEffect(() => {
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);
  }, [currentSong]);

  return (
    <PlayerContainer>
      <TimeControl>
        <Time>{formatTime(timeInfo.currentTime)}</Time>
        <Track currentSong={currentSong}>
          <Slider
            min={0}
            max={timeInfo.duration || 0}
            value={timeInfo.currentTime}
            onChange={handleDrag}
          />
          <AnimateTrack timeInfo={timeInfo} />
        </Track>
        <Time>
          {timeInfo.duration
            ? formatTime(timeInfo.duration - timeInfo.currentTime)
            : "0:00"}
        </Time>
      </TimeControl>
      <IconContainer>
        <FontAwesomeIcon
          icon={faStepBackward}
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={() => handleSkipSong("backwards")}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={handlePlay}
        />
        <FontAwesomeIcon
          icon={faStepForward}
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={() => handleSkipSong("forwards")}
        />
      </IconContainer>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
`;

const TimeControl = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding-top: 1rem;
`;

const Slider = styled.input.attrs({
  type: "range",
})`
  width: 100%;
  cursor: pointer;
  /* padding: 1rem 0rem; */
  -webkit-appearance: none;
  background: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
  }
  &:focus {
    outline: none;
    border: 0;
  }
`;

const Time = styled.p`
  font-size: 1rem;
  padding: 0 2rem;
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${(props) => props.currentSong.color[1]},
    ${(props) => props.currentSong.color[0]}
  );
`;

const AnimateTrack = styled.div`
  background-color: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(${(props) => props.timeInfo.percentage}%);
  pointer-events: none;
  &:focus {
    outline: none;
    border: 0;
  }
`;

export default Player;
