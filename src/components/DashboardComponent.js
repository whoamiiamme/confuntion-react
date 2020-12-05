import React, { useState } from "react";
import { connect } from "react-redux";

import SearchForm from "./SearchFormComponent";
import SearchResult from "./SearchresultComponent";

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
	playlist
}) {
	const [selectedCategory, setSelectedCategory] = useState("albums");
	const [ isLoading, setIsLoading] = useState()

	const handleSearch = (searchTerm) => {
		if (isValidSession()) {
			
		}
		initiateGetResult(searchTerm).then(() => {
			setSelectedCategory("albums");
		});
	};

	const setCategory = (category) => {
		setSelectedCategory(category);
	};

	const loadMore = async (type) => {
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
	};

	const result = { albums, artists, playlist };
	return (
		<React.Fragment>
			<div className="dashboard">
				<SearchForm handleSearch={handleSearch} />
				<SearchResult
					result={result}
					loadMore={loadMore}
					setCategory={setCategory}
					selectedCategory={selectedCategory}
				/>
			</div>
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
