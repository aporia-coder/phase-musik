import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
  const { name, artist, cover } = currentSong;
  return (
    <SongContainer>
      <AlbumCover src={cover} alt={name} />
      <SongName>{name}</SongName>
      <Artist>{artist}</Artist>
    </SongContainer>
  );
};

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  margin-top: 2rem;
`;

const AlbumCover = styled.img`
  width: 20%;
  border-radius: 50%;
`;

const SongName = styled.h1`
  padding: 2rem;
`;

const Artist = styled.h2`
  padding: 1rem;
`;

export default Song;
