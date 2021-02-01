import React from 'react';

import Main from './views/main.view.jsx'

import ToggleTheme from './components/ToggleTheme.component.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/style/css/App.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js'


function App() {
  return (
    <div>
      <ToggleTheme/>
      <Main/>
      
    </div>
  );
}

export default App;
