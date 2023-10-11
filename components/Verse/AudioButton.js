import { useState } from 'react';

export default function AudioButton({ verseNumber, audioUrl, audioActive }) {
  const [play, setPlay] = useState(false);

  const audioHandle = (event) => {
    const dataAudio = event.target.dataset.number;

    if (play) {
      document.querySelectorAll('audio').forEach((audioPlayer) => {
        audioPlayer.pause();
      });
    } else {
      document.querySelectorAll('audio').forEach((audioPlayer) => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      });
      document.querySelector(`[data-audio="${dataAudio}"]`).play();
    }
    setPlay(!play);
  };

  const audioEnd = (event) => {
    event.target.currentTime = 0;
    setPlay(false);
  };

  return (
    <>
      <button type="button" className="relative hover:text-green-500">
        {audioActive && play ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-pause-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        )}
        <div
          className="absolute top-0 left-0 w-full h-full"
          data-number={verseNumber}
          onClick={audioHandle}
        />
      </button>
      <audio
        controls
        data-audio={verseNumber}
        className="hidden"
        onEnded={audioEnd}
      >
        <source src={audioUrl} type="audio/mp3" />
      </audio>
    </>
  );
}
