import './App.css'
import Header from "./component/Header";
import Contend from "./component/Content";
import Footer from "./component/Footer";
import React, { useState, useEffect } from 'react';
function App() {

  return (
    <div className="all">
      <Header/>
      <Contend/>
      <Footer/>
    </div>
  )
}

export default App
