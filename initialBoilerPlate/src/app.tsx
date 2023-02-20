import React from "react";
import './App.scss'
import CryptoCarousel from "./components/CryptoCarousel/CryptoCarousel";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
     <Header/>
     <Video />
     <CryptoCarousel />
     App
    </div>
  );
}

export default App;
