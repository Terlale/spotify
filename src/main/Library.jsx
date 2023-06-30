import React, { useEffect, useRef, useState } from "react";

const Library = () => {
  const playerPlayList = [
    {
      id: 1,
      imgSrc: "http://physical-authority.surge.sh/imgs/1.jpg",
      songName: "no time",
      artist: "lastlings",
      audioSrc: "http://physical-authority.surge.sh/music/1.mp3",
      time: "03:56",
    },
    {
      id: 2,
      imgSrc: "http://physical-authority.surge.sh/imgs/2.jpg",
      songName: "blinding lights",
      artist: "the weekend",
      audioSrc: "http://physical-authority.surge.sh/music/2.mp3",
      time: "03:52",
    },
    {
      id: 3,
      imgSrc: "http://physical-authority.surge.sh/imgs/3.jpg",
      songName: "джованна",
      artist: "enrasta",
      audioSrc: "http://physical-authority.surge.sh/music/3.mp3",
      time: "02:59",
    },
    {
      id: 4,
      imgSrc: "http://physical-authority.surge.sh/imgs/4.jpg",
      songName: "a man",
      artist: "travis scott",
      audioSrc: "http://physical-authority.surge.sh/music/4.mp3",
      time: "03:10",
    },
    {
      id: 5,
      imgSrc: "http://physical-authority.surge.sh/imgs/5.jpg",
      songName: "unforgetting",
      artist: "zaxx",
      audioSrc: "http://physical-authority.surge.sh/music/5.mp3",
      time: "03:23",
    },
    {
      id: 6,
      imgSrc: "http://physical-authority.surge.sh/imgs/6.jpg",
      songName: "waharan",
      artist: "Randall",
      audioSrc: "http://physical-authority.surge.sh/music/6.mp3",
      time: "02:52",
    },
    {
      id: 7,
      imgSrc: "http://physical-authority.surge.sh/imgs/7.jpg",
      songName: "starlight feat mr gabrie",
      artist: "jai wolf",
      audioSrc: "http://physical-authority.surge.sh/music/7.mp3",
      time: "03:47",
    },
  ];
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioSrc, setCurrentAudioSrc] = useState("");
  const [currentImage, setCurrentImage] = useState(playerPlayList[0].imgSrc);
  const [progressWidth, setProgressWidth] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const next = () => {
    setCount((prevCount) => {
      if (prevCount === playerPlayList.length - 1) {
        return prevCount;
      }
      setCurrentAudioSrc(playerPlayList[prevCount + 1].imgSrc);
      setCurrentImage(playerPlayList[prevCount + 1].imgSrc);
      setProgressWidth(0); // Reset progress width
      return prevCount + 1;
    });
  };

  const back = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return prevCount;
      }
      setCurrentAudioSrc(playerPlayList[prevCount - 1].imgSrc);
      setCurrentImage(playerPlayList[prevCount - 1].imgSrc);
      setProgressWidth(0); // Reset progress width
      return prevCount - 1;
    });
  };

  const togglePlay = () => {
    setIsPlaying((prevState) => {
      if (!prevState) {
        setProgressWidth(0); // Reset progress width when paused
      }
      return !prevState;
    });
  };

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const audioDuration = audioRef.current.duration;
    setProgressWidth((currentTime / audioDuration) * 100);
    setDuration(audioDuration);
  
    if (currentTime === audioDuration) {
      // Song has finished playing, reset progress width
      setProgressWidth(0);
    }
  };

  return (
    <div className="body">
      <div className="player">
        <ul className="player__playlist list">
          {playerPlayList.map((song) => (
            <li className="player__song" key={song.id}>
              <img
                ref={imgRef}
                className="player__img img"
                src={song.imgSrc}
                alt="cover"
              />
              <p className="player__context">
                <b className="player__song-name">{song.songName}</b>
                <span className="flex">
                  <span className="player__title">{song.artist}</span>
                  <span className="player__song-time"></span>
                </span>
              </p>
              <audio
                className="audio"
                src={song.audioSrc}
                onLoadedData={() => {
                  if (song.audioSrc === currentAudioSrc && isPlaying) {
                    audioRef.current.play();
                  }
                }}
              ></audio>
            </li>
          ))}
        </ul>
        <div className="player__header">
          <div className="player__img player__img--absolute slider">
            <button className="player__button player__button--absolute--nw playlist">
              <img
                src="http://physical-authority.surge.sh/imgs/icon/playlist.svg"
                alt="playlist-icon"
              />
            </button>
            <div className="slider__content">
              {playerPlayList.map((song) => (
                <img
                className={`img slider__img ${isPlaying ? "rotate" : ""}`}
                src={currentImage}
                alt="cover"
                key={song.id}
                ref={imgRef}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="player__context slider__context  player__button--absolute--nw">
              <strong className="slider__name">
                {playerPlayList[count].songName}
              </strong>
              <span className="player__title">
                {playerPlayList[count].artist}
              </span>
              <span className="player__time">{playerPlayList[count].time}</span>
            </p>
          </div>
          <div className="player__controls">
            <button className="player__button back" onClick={back}>
              <img
                className="img"
                src="http://physical-authority.surge.sh/imgs/icon/back.svg"
                alt="back-icon"
              />
            </button>
            <button className="player__button play" onClick={togglePlay}>
              {isPlaying ? (
                // Eğer müzik çalıyorsa pause ikonunu göster
                <img
                  src="http://physical-authority.surge.sh/imgs/icon/pause.svg"
                  alt="pause-icon"
                />
              ) : (
                // Eğer müzik durmuşsa play ikonunu göster
                <img
                  src="http://physical-authority.surge.sh/imgs/icon/play.svg"
                  alt="play-icon"
                />
              )}
            </button>
            <button className="player__button next" onClick={next}>
              <img
                className="img"
                src="http://physical-authority.surge.sh/imgs/icon/next.svg"
                alt="next-icon"
              />
            </button>
            <div className="progres">
              <div className="progres__filled" style={{ width: `${progressWidth}%` }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;


