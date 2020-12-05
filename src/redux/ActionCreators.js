import axios from "axios";

import constansts from "../shared/constansts";
import { get } from "../axiosServices";

const {
  SET_ALBUMS,
  SET_ARTISTS,
  SET_PLAYLIST,
  ADD_ALBUMS,
  ADD_ARTISTS,
  ADD_PLAYLIST,
} = constansts;

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  payload: albums,
});

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  payload: albums,
});

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  payload: artists,
});

export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  payload: artists,
});

export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  payload: playlists,
});

export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  payload: playlists,
});

export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;
      const result = await get(API_URL);
      console.log(result);
      const { albums, artists, playlists } = result;
      dispatch(setAlbums(albums));
      dispatch(setArtists(artists));
      return dispatch(setPlayList(playlists));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addAlbums(result.albums));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addArtists(result.artists));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const initiateLoadMorePlaylist = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addPlaylist(result.playlists));
    } catch (error) {
      console.log("error", error);
    }
  };
};
