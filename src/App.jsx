import React from 'react';
import Exhibit from './Exhibit';
import { exhibits } from './data';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Выставка Александра Земцова "Невидимое - вечно"</h1>
      {exhibits.map((item, index) => (
        <Exhibit key={index} {...item} />
      ))}
    </div>
  );
};

export default App;
