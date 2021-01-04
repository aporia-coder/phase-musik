import React from "react";
import LibrarySong from "./LibrarySong";
import styled from "styled-components";

const Library = ({
  songs,
  setCurrentSong,
  songRef,
  isPlaying,
  setSongs,
  open,
}) => {
  return (
    <LibraryContainer open={open}>
      <Title>Library</Title>
      <LibrarySongs>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            key={song.id}
            songRef={songRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </LibrarySongs>
    </LibraryContainer>
  );
};

const Title = styled.h2`
  font-size: 2rem;
  padding: 0rem 1rem;
  margin-bottom: 2rem;
`;

const LibraryContainer = styled.div`
  position: fixed;
  z-index: 2;
  background-color: rgb(17, 17, 17);
  padding: 2rem 0rem;
  top: 0;
  left: 0;
  width: 25rem;
  height: 100%;
  overflow-y: scroll;
  box-shadow: 5px 10px 20px rgb(15, 15, 15);
  transition: all 0.4s ease;
  transform: translateX(${(props) => (props.open ? "0%" : "-110%")});
  @media (max-width: 900px) {
    width: 100vw;
  }
`;

const LibrarySongs = styled.div`
  img {
    width: 50%;
  }
`;

export default Library;
