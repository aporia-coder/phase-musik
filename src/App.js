import { useState, useRef } from "react";
import styled from "styled-components";
// Components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
// Data
import music from "./utilities/music";

function App() {
  const [songs, setSongs] = useState(music());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const songRef = useRef(null);
  const [timeInfo, setTimeInfo] = useState({
    currentTime: 0,
    duration: 0,
    percentage: 0,
  });

  const handleTimeChange = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrentTime = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrentTime / roundedDuration) * 100);
    setTimeInfo({
      ...timeInfo,
      currentTime,
      duration,
      percentage,
    });
  };

  const handleDrag = (e) => {
    songRef.current.currentTime = e.target.value;
    setTimeInfo({
      ...timeInfo,
      currentTime: e.target.value,
    });
  };

  return (
    <Container open={open}>
      <Navbar setOpen={setOpen} open={open} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songRef={songRef}
        timeInfo={timeInfo}
        handleDrag={handleDrag}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        songRef={songRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        open={open}
      />
      <audio
        ref={songRef}
        src={currentSong.audio}
        onTimeUpdate={handleTimeChange}
        onLoadedMetadata={handleTimeChange}
      ></audio>
    </Container>
  );
}

const Container = styled.div`
  transition: all 0.4s ease;
  margin-left: ${(props) => props.open && "10%"};
`;

export default App;
