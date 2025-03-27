import React, { useState } from 'react';
import Exhibit from './Exhibit';
import { exhibits } from './data';
import './index.css';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container">
      <h1>Выставка</h1>
      {exhibits.map((item, index) => (
        <Exhibit
          key={index}
          {...item}
          isActive={activeIndex === index}
          onPlay={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default App;
