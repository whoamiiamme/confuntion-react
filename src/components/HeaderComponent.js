import React from "react";
import baseUrl from "../shared/baseUrl";

export default function HeaderComponent() {
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (document.getElementById("navbar")) {
			if (40 > currentScrollPos) {
				document.getElementById("navbar").style.backgroundColor = "";
			} else {
				document.getElementById("navbar").style.backgroundColor = "black";
			}
		}
	};

	const {
		REACT_APP_AUTHORIZE_URL,
		REACT_APP_CLIENT_ID,
		REACT_APP_REDIRECT_URL,
	} = baseUrl;

	const _theLogin = () => {
		window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
	};

	return (
		<React.Fragment>
			<div className="header" id="navbar">
				<div className="header__box-button">
					<a href=" #" className="btn btn--control">
						<i className="fa fa-chevron-left" aria-hidden="true"></i>
					</a>
					<a href=" #" className="btn btn--control">
						<i className="fa fa-chevron-right" aria-hidden="true"></i>
					</a>
				</div>
				<div className="header__box-right">
					<a onClick={_theLogin} className="btn btn-header btn-user">
						<i className="fa fa-user-circle icon" aria-hidden="true"></i>
						START
						<i className="fa fa-arrow-circle-down icon" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</React.Fragment>
	);
}
