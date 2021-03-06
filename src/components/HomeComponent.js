import React from "react";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";

import Header from "./HeaderComponent";

export default function HomeComponents({ isValidSession, location }) {
  const { state } = location;
  const sessionExpired = state && state.session_expired;
  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <Header />
          {sessionExpired && console.log("Session expired. Please login again.")}
          <div>
            <section className="main-container">
              <div className="main-box">
                <div className="main__header">
                  <a href=" #" className="main--link main__header--title">
                    Ngủ ngon
                  </a>
                </div>
                <a href=" #" className="main--link main__header--view-all">
                  XEM TẤT CẢ
                </a>
              </div>
              <div className="row-item">
                <div className="item">
                  <img
                    className="img__header-music--out"
                    alt="Name music"
                    src="assets/images/bad-boy.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    className="img__header-music--out"
                    alt="Name music"
                    src="assets/images/alone.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    className="img__header-music--out"
                    alt="Name music"
                    src="assets/images/lanterns.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
              </div>
            </section>

            <section className="main-container">
              <div className="main-box">
                <div className="main__header">
                  <a href=" #" className="main--link main__header--title">
                    Chương trình đáng để thư
                  </a>
                  <p className="main--des">
                    Podcast mà chúng tôi nghĩ bạn sẽ thích mê
                  </p>
                </div>
                <a href=" #" className="main--link main__header--view-all">
                  XEM TẤT CẢ
                </a>
              </div>
              <div className="row-item">
                <div className="item">
                  <img
                    className="img__header-music--out"
                    alt="Name music"
                    src="assets/images/lanterns.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    className="img__header-music--out"
                    alt="Name music"
                    src="assets/images/faded.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    alt="Name music"
                    className="img__header-music--out"
                    src="assets/images/force.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
              </div>
            </section>

            <section className="main-container">
              <div className="main-box">
                <div className="main__header">
                  <a href=" #" className="main--link main__header--title">
                    Bản phát hành mới phổ biến
                  </a>
                </div>
                <a href=" #" className="main--link main__header--view-all">
                  XEM TẤT CẢ
                </a>
              </div>
              <div className="row-item">
                <div className="item">
                  <img
                    alt="Name music"
                    className="img__header-music--out"
                    src="assets/images/faded.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    alt="Name music"
                    className="img__header-music--out"
                    src="assets/images/img_titile_music.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    className="img__header-music--out"
                    alt="Name music"
                    src="assets/images/bad-boy.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    className="img__header-music--out"
                    alt="Name music"
                    src="assets/images/alone.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
                <div className="item">
                  <img
                    alt="Name music"
                    className="img__header-music--out"
                    src="assets/images/lanterns.jpg"
                  />
                  <h3 className="header--tittle">Alone</h3>
                  <p className="header--desic">Alan Walker</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
