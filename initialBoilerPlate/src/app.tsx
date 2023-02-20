import React from "react";
import './App.scss'
import ApplyLaunchpad from "./components/ApplyLaunchpad/ApplyLaunchpad";
import CoinTable from "./components/CoinTable/CoinTable";
import CryptoCarousel from "./components/CryptoCarousel/CryptoCarousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
     <Header/>
     <Video />
     <CryptoCarousel />
     <CoinTable />
     <ApplyLaunchpad />
  <Footer />
    </div>
  );
}

export default App;
