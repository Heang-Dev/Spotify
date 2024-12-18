import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="items-center hidden gap-4 lg:flex">
        <img src={track.image} alt="song_image" className="w-12" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)} ...</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            alt="shuffle"
            className="w-4 cursor-pointer"
          />
          <img
            onClick={previous}
            src={assets.prev_icon}
            alt="prev"
            className="w-4 cursor-pointer"
          />

          {playStatus ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              alt="play"
              className="w-4 cursor-pointer"
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              alt="play"
              className="w-4 cursor-pointer"
            />
          )}

          <img
            onClick={next}
            src={assets.next_icon}
            alt="next"
            className="w-4 cursor-pointer"
          />
          <img
            src={assets.loop_icon}
            alt="loop"
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="w-0 h-1 bg-green-800 border-none rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="items-center hidden gap-2 opacity-75 lg:flex">
        <img src={assets.plays_icon} alt="plays" className="w-4" />
        <img src={assets.mic_icon} alt="mics" className="w-4" />
        <img src={assets.queue_icon} alt="queue" className="w-4" />
        <img src={assets.speaker_icon} alt="speaker" className="w-4" />
        <img src={assets.volume_icon} alt="volume" className="w-4" />
        <div className="w-20 h-1 rounded bg-slate-50"></div>
        <img src={assets.mini_player_icon} alt="mini_play" className="w-4" />
        <img src={assets.zoom_icon} alt="zoom" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
