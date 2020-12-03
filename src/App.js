import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import SlideBar from "./components/SlideBarComponent";
import Home from "./components/HomeComponent";
import Redirect from "./components/RedirectComponent";
import Dashboard from "./components/DashboardComponent";
import Notfound from "./components/NotfoundComponent";

import { configureStore } from "./redux/configureStore";


const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <SlideBar />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/redirect" component={Redirect} />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
