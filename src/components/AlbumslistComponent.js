import React from "react";
import _ from "lodash";

const AlbumsList = ({ albums }) => {
	return (
		<React.Fragment>
			<div className="albums-container">
				{Object.keys(albums).length > 0 && (
					<div className="row-item">
						{albums.items.map((album, index) => {
							return (
								<React.Fragment key={index}>
									<div className="item">
										<a
											target="_blank"
											href={album.external_urls.spotify}
											rel="noopener noreferrer"
											className="card-image-link"
										>
											{!_.isEmpty(album.images) ? (
												<img
													className="img__header-music--out"
													alt="Name music"
													src={album.images[0].url}
												/>
											) : (
												<img
													className="img__header-music--out"
													alt="Name music"
													src="assets/images/lanterns.jpg"
												/>
											)}
											<h3 className="header--tittle">{album.name}</h3>
											<p className="header--desic">
												<small>
													{album.artists
														.map((artist) => artist.name)
														.join(", ")}
												</small>
											</p>
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

export default AlbumsList;
