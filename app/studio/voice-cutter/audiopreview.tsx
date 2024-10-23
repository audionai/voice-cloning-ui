<<<<<<< HEAD
import WaveSurfer from 'wavesurfer.js';
=======
import Wavesurfer from 'wavesurfer.js';
>>>>>>> a1ccfa47d2d746c57f0806befa15c1466de40ce0
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

<<<<<<< HEAD
export default AudioPreview;
=======
export default AudioPreview
>>>>>>> a1ccfa47d2d746c57f0806befa15c1466de40ce0
