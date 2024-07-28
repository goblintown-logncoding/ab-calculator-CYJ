import './App.css'
import Test from "./Test";
import React, { useState, useEffect } from 'react';
function App() {
  let c = 10;
  // function Add() {
  //   c = document.getElementById('a').value + document.getElementById('b').value;
  // }
  return (
    <div>
      <input id = "a" onChange={()=>{c = document.getElementById('a').value}}/>
      +
      <input id = "b"/>
      =
      {c}
    </div>
  )
}

export default App
