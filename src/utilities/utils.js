export const playAudio = (isPlaying, songRef) => {
  if (isPlaying) {
    const playPromise = songRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        songRef.current.play();
      });
    }
  }
};
