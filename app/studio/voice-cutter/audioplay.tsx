import WaveSurfer from 'wavesurfer.js';
import { useState, useEffect, useRef } from 'react';

const AudioPreview = () => {
  const [file, setFile] = useState(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (file && wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create({
        container: '#audio-player',
        waveColor: 'black',
        progressColor: 'gray',
      });
      wavesurfer.current.load(file);
    }
  }, [file]);

  return (
    <div id="audio-player" />
  );
};

export default AudioPreview;
