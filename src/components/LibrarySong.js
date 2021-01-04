import React from "react";
import styled from "styled-components";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  songRef,
  isPlaying,
  setSongs,
}) => {
  const { name, artist, cover, id, active } = song;

  const handleSongChange = async () => {
    await setCurrentSong(song);
    const newSong = songs.map((song) => {
      if (id === song.id) {
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
    if (isPlaying) songRef.current.play();
  };

  return (
    <LibrarySongContainer onClick={handleSongChange} active={active}>
      <AlbumCover src={cover} alt={name} />
      <InfoContainer>
        <SongName>{name}</SongName>
        <Artist>{artist}</Artist>
      </InfoContainer>
    </LibrarySongContainer>
  );
};

const LibrarySongContainer = styled.div`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  width: 100%;
  &:hover {
    background-color: rgba(130, 100, 255, 0.1);
  }
  background-color: ${(props) => props.active && "rgba(130, 100, 255, 0.1)"};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-left: 0.5rem;
`;

const AlbumCover = styled.img`
  width: 20%;
`;

const SongName = styled.h4`
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const Artist = styled.p`
  padding: 0.5rem;
`;

export default LibrarySong;
