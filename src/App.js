import React, { isValidElement, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import SlideBar from "./components/SlideBarComponent";
import Home from "./components/HomeComponent";
import Redirect from "./components/RedirectComponent";
import Dashboard from "./components/DashboardComponent";
import Notfound from "./components/NotfoundComponent";

import { configureStore } from "./redux/configureStore";
import Storage from "./shared/storage";

const store = configureStore();

function App() {
  const [expiryTime, setExpiryTime] = useState("0");

  useEffect(() => {
    let varExpiryTime;
    try {
      varExpiryTime = Storage.get("expiry_time");
    } catch (error) {
      varExpiryTime = 0;
    }
    setExpiryTime(varExpiryTime);
  }, []);

  const _setExpiryTime = (times) => {
    setExpiryTime(times);
  };

  const _isValidSession = () => {
    const currentTime = new Date().getTime();
    const varExpiryTime = expiryTime;
    const isSessionValid = currentTime < varExpiryTime;
    return isSessionValid;
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <SlideBar />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/redirect"
                render={(props) => (
                  <Redirect
                    {...props}
                    isValidSession={_isValidSession}
                    setExpiryTime={_setExpiryTime}
                  />
                )}
              />
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
