import React from "react";
import { Link } from "react-router-dom";

export default function SlideBar() {
  return (
    <>
      <div className="tab--container ">
        <div className="tab--header">
          <Link to="/">
            <img
              src="assets/logo.jpg"
              className="logo"
              alt="No Name"
              height="80"
              width="190"
            />
          </Link>
        </div>
        <div className="tab--menus">
          <ul className="tab--menus__list">
            <li className="tab--menus__item">
              <a className="tab--menu__link">
                <i className="fa fa-home icon" aria-hidden="true"></i>Trang chủ
              </a>
            </li>
            <li className="tab--menus__item">
              <a className="tab--menu__link">
                <i className="fa fa-search icon" aria-hidden="true"></i>Tìm kiếm
              </a>
            </li>
            <li className="tab--menus__item">
              <a className="tab--menu__link">
                <i className="fa fa-stack-exchange icon" aria-hidden="true"></i>
                Thư viện
              </a>
            </li>
          </ul>
        </div>
        <div className="tab--playlist">
          <ul className="tab--menus__list">
            <li className="tab--menus__item">
              <h3 className="tab--playlist__header">playlist</h3>
            </li>
            <li className="tab--menus__item">
              <a href=" #" className="tab--menu__link">
                <i className="fa fa-plus-square icon" aria-hidden="true"></i>
                Tạo playlist
              </a>
            </li>
            <li className="tab--menus__item">
              <a href=" #" className="tab--menu__link">
                <i className="fa fa-heart icon" aria-hidden="true"></i>
                Bài hát đã thích
              </a>
            </li>
          </ul>
        </div>
        <div className="tab--menus">
          <ul className="tab--menus__list">
            <li className="tab--menus__item">
              <a href=" #" className="tab--menu__link">
                Playlist của tôi #1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
