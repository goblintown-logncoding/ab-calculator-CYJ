import './App.css'
import Test from "./Test";
import Header from "./component/Header";
import Contend from "./component/Content";
import Footer from "./component/Footer";
import React, { useState, useEffect } from 'react';
function App() {

  return (
    <div>
      <Header/>
      <Contend/>
      <Footer/>
    </div>
  )
}

export default App
