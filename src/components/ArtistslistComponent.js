import React from "react";
import { Card } from "react-bootstrap";
import _ from "lodash";

const ArtistsList = ({ artists }) => {
	return (
		<React.Fragment>
			<div className="artists-container">
				{Object.keys(artists).length > 0 && (
					<div className="row-item">
						{artists.items.map((artist, index) => {
							return (
								<React.Fragment key={index}>
									<div className="item">
										<a
											target="_blank"
											href={artist.external_urls.spotify}
											rel="noopener noreferrer"
											className="card-image-link"
										>
											{!_.isEmpty(artist.images) ? (
												<img
													className="img__header-music--out"
													alt="Name music"
													src={artist.images[0].url}
												/>
											) : (
												<img
													className="img__header-music--out"
													alt="Name music"
													src="assets/images/lanterns.jpg"
												/>
											)}
											<h3 className="header--tittle">{artist.name}</h3>
										</a>
									</div>
								</React.Fragment>
							);
						})}
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default ArtistsList;
