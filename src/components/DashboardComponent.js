import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SearchForm from "./SearchFormComponent";
import SearchResult from "./SearchresultComponent";
import Loading from "./LoadComponent";

import {
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
} from "../redux/ActionCreators";

function DashboardComponent({
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
  isValidSession,
  history,
  albums,
  artists,
  playlist,
}) {
  const [selectedCategory, setSelectedCategory] = useState("albums");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      initiateGetResult(searchTerm).then(() => {
        setIsLoading(false);
        setSelectedCategory("albums");
      });
    } else {
      history.push({
        path: "/",
        state: {
          session_expired: true,
        },
      });
    }
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const loadMore = async (type) => {
    if (isValidSession()) {
      setIsLoading(true);
      switch (type) {
        case "albums":
          await initiateLoadMoreAlbums(albums.next);
          break;
        case "artists":
          await initiateLoadMoreArtists(artists.next);
          break;
        case "playlist":
          await initiateLoadMorePlaylist(playlist.next);
          break;
        default:
      }
      setIsLoading(false);
    } else {
      history.push({
        pathname: "/",
        state: {
          session_expired: true,
        },
      });
    }
  };
	console.log('isValidSession',isValidSession())
  const result = { albums, artists, playlist };
  return (
    <React.Fragment>
      { isValidSession() ? (
        <div className="dashboard">
          <SearchForm handleSearch={handleSearch} />
          <Loading show={isLoading}>Loading...</Loading>
          <SearchResult
            result={result}
            loadMore={loadMore}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
            isValidSession={isValidSession}
          />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              session_expired: true,
            },
          }}
        />
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  albums: state.albums,
  artists: state.artists,
  playlist: state.playlist,
});

export default connect(mapStateToProps, {
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
})(DashboardComponent);
