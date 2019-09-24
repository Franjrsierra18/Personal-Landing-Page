import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-light">
        <Header />
        <Route Main />
        <Error404 />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
