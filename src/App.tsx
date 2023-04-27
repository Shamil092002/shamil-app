import React from 'react';
import './App.css';
import Header from './app/components/Header/Header';
import Footer from './app/component/Footer/Footer';
import Main from './app/screens/Main/Main';

function App() {
  return (
    <div className="App">
         <Header/>
         <Main/>
         <Footer/>
    </div>
  );
}

export default App;
