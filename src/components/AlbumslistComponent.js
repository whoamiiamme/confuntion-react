import React from "react";
import _ from "lodash";

const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      <div className="albums-container">
        {Object.keys(albums).length > 0 && (
          <div className="row-item">
            {albums.items.map((album, index) => {
              console.log("item");
              return (
                <React.Fragment>
                  <div className="item" key={index}>
                    <a
                      target="_blank"
                      href={album ? album.external_urls.spotify : null}
                      rel="noopener noreferrer"
                      className="card-image-link"
                    >
                      {!_.isEmpty(album ? album.images : null) ? (
                        <img
                          className="img__header-music--out"
                          alt="Name music"
                          src={album ? album.images[0].url : null}
                        />
                      ) : (
                        <img
                          className="img__header-music--out"
                          alt="Name music"
                          src="assets/images/lanterns.jpg"
                        />
                      )}
                      <h3 className="header--tittle">
                        {album ? album.name : null}
                      </h3>
                      <p className="header--desic">
                        <small>
                          {album
                            ? album.artists
                                .map((artist) => artist.name)
                                .join(", ")
                            : null}
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
