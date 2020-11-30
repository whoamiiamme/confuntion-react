import React from "react";
import "./App.css";

import SlideBar from "./components/SlideBarComponent";
import Home from "./components/HomeComponent";
import Header from "./components/HeaderComponent";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <SlideBar />
        <div className="main">
          <Header />
          <Home />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
