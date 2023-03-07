import React from 'react';
import { useRoutes } from 'react-router-dom';
import routerConfig from './routers/index';

const App = () => {
  const outLet = useRoutes(routerConfig)
  return (
    <div id='App'>
      {outLet}
    </div>
  )
}

export default App;
