import React from "react";
import _ from "lodash";

const PlayList = ({ playlist }) => {
	return (
		<div className="playlist-container">
			{Object.keys(playlist).length > 0 && (
				<div className="row-item">
					{playlist.items.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<div className="item">
									<a
										target="_blank"
										href={item.external_urls.spotify}
										rel="noopener noreferrer"
										className="card-image-link"
									>
										{!_.isEmpty(item.images) ? (
											<img
												className="img__header-music--out"
												alt="Name music"
												src={item.images[0].url}
											/>
										) : (
											<img src="asstes/images/alone.jpg" alt="" />
										)}
										<h3 className="header--tittle">{item.name}</h3>
										<p className="header--desic">
											<small>By {item.owner.display_name}</small>
										</p>
									</a>
								</div>
							</React.Fragment>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default PlayList;
