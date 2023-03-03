import React from "react";
import './App.scss'
import { RouterProvider } from "react-router";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import WalletConnect from "./components/WalletConnect/WalletConnect";

function App() {
  return (
    <div className="App">
     <RouterProvider  router={routes} />
     <Footer />
<WalletConnect />
    </div>
  );
}

export default App;
