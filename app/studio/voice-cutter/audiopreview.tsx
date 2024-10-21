import Wavesurfer from 'wavesurfer';
import { useEffect, useState, useRef } from 'react';

const AudioPreview = () => {
  const [file, setFile] = useState(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (file) {
      wavesurfer.current = new Wavesurfer('audio-player', {
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

export default AudioPreview