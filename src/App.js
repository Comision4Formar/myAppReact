import React, { Fragment } from 'react';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  return (
    <div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <Main/>
    </div>
    </div>
  );
}

export default App;
