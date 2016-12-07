import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/home/HomeHeader.js';
import Footer from './components/home/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
