// components/AudioPlayer.js
"use client"
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styles from './audio.module.css'

const AudioPlayer = ({ url }) => {
  const waveformRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "rgb(var(--color))",
      waveColor: "white",
      progressColor: "var(--grey-nor)",
      url: url,
      dragToSeek: true,
      height: 40,
      hideScrollbar: true,
      normalize: true,
      barGap: 3,
      barHeight: 20,
      barRadius: 40,
      barWidth: 5,
      width: 450,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [url]);

  const handlePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  return (
    <div className='play'>
      <button onClick={handlePlayPause}>
        {wavesurfer && wavesurfer.isPlaying() ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H8C9.10457 19 10 18.1046 10 17V7C10 5.89543 9.10457 5 8 5H6ZM16 5C14.8954 5 14 5.89543 14 7V17C14 18.1046 14.8954 19 16 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5H16Z" fill="rgb(var(--grey))"/></svg>: <svg width='24' className='play_icon' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.9611 13.7365L8.99228 18.2901C7.65896 19.052 6 18.0893 6 16.5536V12V7.44636C6 5.91071 7.65896 4.94798 8.99228 5.70987L16.9611 10.2635C18.3048 11.0313 18.3048 12.9687 16.9611 13.7365Z' fill='rgb(var(--grey))'/></svg>}
      </button>
      <div ref={waveformRef} className='ws'></div>
      <button className="try">try</button>
    </div>
  );
};

export default AudioPlayer;
