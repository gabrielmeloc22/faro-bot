export const getRandomGIF = () => {
  const gifs = [
    "https://c.tenor.com/hrOwstmBF-gAAAAd/vai-dar-namoro.gif",
    "https://c.tenor.com/wyV8J09HxnwAAAAC/ofjiyu-rodrigo-faro.gif",
    "https://thumbs.gfycat.com/JoyousEnlightenedAntipodesgreenparakeet-max-1mb.gif",
  ];
  return gifs[Math.floor(Math.random() * gifs.length)];
};
