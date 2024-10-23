import WaveSurfer from 'wavesurfer.js';
import { useEffect, useState, useRef } from 'react';

const AudioPreview = () => {
  const [file, setFile] = useState<string | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (file && wavesurfer.current === null) {
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
