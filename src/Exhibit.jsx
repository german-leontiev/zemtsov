import React, { useRef, useEffect } from 'react';

const Exhibit = ({ title, image, audio, isActive, onPlay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className="exhibit">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <audio
        ref={audioRef}
        controls
        src={audio}
        onPlay={onPlay}
      />
    </div>
  );
};

export default Exhibit;
