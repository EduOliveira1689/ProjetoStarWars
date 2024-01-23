import './App.css';
import React from 'react';
import Header from './components/header/header';
import Home from './pages/home';
import Modal from 'react-modal';


Modal.setAppElement('#root'); 

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Home />
      </>
    </div>
  );
}

export default App;
