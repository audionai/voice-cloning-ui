"use client"
import {  useDropzone   } from 'react-dropzone';
import { useState, } from 'react';
import AudioPlayer from './audioplay';
import AudioPreview from './audiopreview';

const AudioUploader = () => {
  const [file, setFile] = useState(null);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'audio/*': []
    },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the audio file here</p>
      ) : (
        <p>Drag and drop an audio file or click to upload</p>
      )}
    <AudioPlayer/>
    <AudioPreview/>
    </div>
  );
};

export default AudioUploader