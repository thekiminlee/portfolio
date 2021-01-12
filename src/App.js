import React from 'react';

import Main from './views/main.view'

import ToggleTheme from './components/ToggleTheme.component'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <div className="App">
      <ToggleTheme/>
      <Main/>
      
    </div>
  );
}

export default App;
