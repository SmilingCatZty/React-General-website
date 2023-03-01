import React from 'react';
import { useRoutes } from 'react-router-dom';
import routerConfig from './routers/index';
import './App.css';

const App = () => {
  const outLet = useRoutes(routerConfig)
  return (
    <div>
      {outLet}
    </div>
  )
}

export default App;
