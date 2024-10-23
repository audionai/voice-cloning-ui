import WaveSurfer from 'wavesurfer.js';
import { useState, useEffect, useRef } from 'react';

const AudioPreview = () => {
  const [file, setFile] = useState<string | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null); // Updated type

  useEffect(() => {
    if (file) {
      // Ensure WaveSurfer instance is created if it doesn't exist
      if (!wavesurfer.current) {
        wavesurfer.current = WaveSurfer.create({
          container: '#audio-player',
          waveColor: 'black',
          progressColor: 'gray',
        });
      }

      wavesurfer.current.load(file); // Load the audio file
    }

    return () => {
      // Cleanup WaveSurfer instance on unmount
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
        wavesurfer.current = null;
      }
    };
  }, [file]);

  return (
    <div id="audio-player" />
  );
};

export default AudioPreview;
