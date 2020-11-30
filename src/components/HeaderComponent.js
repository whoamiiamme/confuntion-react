import React from "react";

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (40 > currentScrollPos) {
    document.getElementById("navbar").style.backgroundColor = '';
  } else {
    document.getElementById("navbar").style.backgroundColor = 'black';
  }
}

export default function HeaderComponent() {
  return (
    <React.Fragment>
      <div className="header" id='navbar'>
        <div className="header__box-button">
          <a href=" #" className="btn btn--control">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a href=" #" className="btn btn--control">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="header__box-right">
          <a href=" #" className="btn btn-header">
            NÂNG CẤP
          </a>
          <a href=" #" className="btn btn-header btn-user">
            <i className="fa fa-user-circle icon" aria-hidden="true"></i>
            Tài Khoản
            <i className="fa fa-arrow-circle-down icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
