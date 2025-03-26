import React from 'react';

const Exhibit = ({ title, image, audio }) => (
  <div className="exhibit">
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <audio controls>
      <source src={audio} type="audio/mpeg" />
      Ваш браузер не поддерживает аудио.
    </audio>
  </div>
);

export default Exhibit;
