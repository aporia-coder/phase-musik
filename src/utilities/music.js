import uuid from "react-uuid";

function music() {
  return [
    {
      name: "ny90",
      artist: "Ezzy",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      id: uuid(),
      active: true,
      color: ["#E68B9A", "#303E85"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9331",
    },
    {
      name: "Lilo",
      artist: "Middle School, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      id: uuid(),
      active: false,
      color: ["#EAF1E1", "#A7BE66"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
    },
    {
      name: "Bluetooth Ringtone (interlude)",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuid(),
      active: false,
      color: ["#C269B3", "#4B90D5"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10446",
    },
    {
      name: "Pine and Oak",
      artist: "Philanthrope, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuid(),
      active: false,
      color: ["#CA4A3D", "#6B4D35"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10251",
    },
    {
      name: "Colors Fade",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/686808356b2bbc6a368e372ea604150bc346c788-1024x1024.jpg",
      id: uuid(),
      active: false,
      color: ["#7BB6C5", "#EBCEAE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10023",
    },
    {
      name: "Paraglider",
      artist: "Kendall Miles, H E R B",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
      id: uuid(),
      active: false,
      color: ["#FDCB67", "#C46E5D"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9318",
    },
  ];
}

export default music;
