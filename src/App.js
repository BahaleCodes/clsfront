import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Auth from './Containers/Auth/Auth';
import FileReader from './Containers/FileReader/FileReader';


function Router() {
  return (
    <div>
      <CookiesProvider>
        <Route path="/" exact component={Auth}/>
        <Route path="/home" exact component={FileReader}/>
      </CookiesProvider>
    </div>
  )
}

function App() {
  return (
    <Router/>
  );
}

export default App;
