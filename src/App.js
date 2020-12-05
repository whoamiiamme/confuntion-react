import React, { Component, useEffect, useState } from "react";
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

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expiryTime: "0",
    };
  }

  async componentDidMount() {
    let varExpiryTime;
    try {
      varExpiryTime = await Storage.get("expiry_time");
      console.log("varExpiryTime", varExpiryTime);
    } catch (error) {
      varExpiryTime = 0;
    }
    this.setState({
      expiryTime: varExpiryTime,
    });
    console.log(this.state.expiryTime);
  }

  _setExpiryTime = (times) => {
    this.setState({
      expiryTime: times,
    });
  };

  _isValidSession = () => {
    const currentTime = new Date().getTime();
    const varExpiryTime = this.state.expiryTime;
    const isSessionValid = currentTime < varExpiryTime;
    return isSessionValid;
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <SlideBar />
            <div className="main">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Home isValidSession={this._isValidSession} {...props} />
                  )}
                />
                <Route
                  path="/redirect"
                  render={(props) => (
                    <Redirect
                      {...props}
                      isValidSession={this._isValidSession}
                      setExpiryTime={this._setExpiryTime}
                    />
                  )}
                />
                <Route
                  path="/dashboard"
                  render={(props) => (
                    <Dashboard
                      {...props}
                      isValidSession={this._isValidSession}
                    />
                  )}
                />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

// function App() {
//   const [expiryTime, setExpiryTime] = useState(0);

//   const _getTimeToken = async () => {
//     let varExpiryTime;
//     try {
//       varExpiryTime = await Storage.get("expiry_time");
//     } catch (error) {
//       varExpiryTime = 0;
//     }
//     setExpiryTime(varExpiryTime);
//     console.log(expiryTime);
//   };

//   useEffect(() => {
//     console.log("useEffect first");
//     _getTimeToken();
//   }, []);

//   useEffect(() => {
//     console.log("useEffect ", expiryTime);
//     // setExpiryTime(expiryTime);
//   }, [expiryTime]);

//   const _setExpiryTime = (times) => {
//     setExpiryTime(times);
//   };

//   const _isValidSession = () => {
//     const currentTime = new Date().getTime();
//     const varExpiryTime = expiryTime;
//     const isSessionValid = currentTime < varExpiryTime;
//     return isSessionValid;
//   };

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="app">
//           <SlideBar />
//           <div className="main">
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route
//                 path="/redirect"
//                 render={(props) => (
//                   <Redirect
//                     {...props}
//                     isValidSession={_isValidSession}
//                     setExpiryTime={_setExpiryTime}
//                   />
//                 )}
//               />
//               <Route
//                 path="/dashboard"
//                 render={(props) => (
//                   <Dashboard {...props} isValidSession={_isValidSession} />
//                 )}
//               />
//               <Route component={Notfound} />
//             </Switch>
//           </div>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

export default AppRouter;
