import { useEffect, useState } from "react";
import { usePlayerStore } from "../store/player";

type volumeBarProps = {
  audioRef: React.RefObject<HTMLAudioElement>;
};
export default function VolumeBar({ audioRef }: volumeBarProps) {
  //   const [progress, setProgress] = useState(0);
  const { volume,changeVolume } = usePlayerStore();
  // const [inputValue, setInputValue] = useState<number | null>(null);
  // useEffect(() => {
  //   if (audioRef.current) {
  //     if (audioRef.current.volume) {
  //       setInputValue(audioRef.current.volume);
  //     }
  //   }
  // }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    if (audioRef.current) {
      if (audioRef.current.volume) {
        // setInputValue(Number(e.target.value));
        audioRef.current.volume = Number(e.target.value);
        changeVolume(Number(e.target.value))
      }
    }
  }
  return (
    <div className="flex text-white items-center gap-3 mt-5">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M7 15V9h4l5-5v16l-5-5H7Z" />
        </svg>
      </button>
      {changeVolume && (
        <input
          min={0.1}
          max={0.7}
          step={0.01}
          value={volume}
          onChange={(e) => {
            handleInput(e);
          }}
          style={{}}
          className="w-full inputBar"
          type="range"
        />
      )}
      {/* <div
        style={{ background: "rgb(244, 243, 249,0.8)" }}
        className="h-2 w-full rounded-full "
      >
        <div
          style={{ background: "#696870", width: `${progress}%` }}
          className="h-full"
        ></div>
      </div> */}
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 15H6q-.425 0-.713-.288T5 14v-4q0-.425.288-.713T6 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.613.938T12.3 18.3L9 15Zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.512.013T16 15.1V8.85q0-.3.263-.438t.512.013q.775.625 1.25 1.575t.475 2Z"
          />
        </svg>
      </button>
    </div>
  );
}
