import WaveSurfer from 'wavesurfer.js';
import { useState, useEffect, useRef } from 'react';

const AudioPreview = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> a1ccfa47d2d746c57f0806befa15c1466de40ce0
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
