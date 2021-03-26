import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" className="d-flex flex-column">
      <Main/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
