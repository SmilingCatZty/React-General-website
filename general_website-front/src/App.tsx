import React from 'react';
import Router from './routers/index';
import AuthRouter from '@/routers/utils/auth-router'

const App = () => {
  return (
    <div id='App'>
      <AuthRouter>
        <Router/>
      </AuthRouter>
    </div>
  )
}

export default App;
