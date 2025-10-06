import React from "react";
import "./AlbumList.css";
import { BiSolidPhotoAlbum } from "react-icons/bi";

const AlbumList = () => {
  return (
    <div className="album-list">
      <div className="album-list-head">
        <h2>Your Album</h2>
        <button>Add album</button>
      </div>
      <div className="album-grids">
        <div className="album-card">
          <BiSolidPhotoAlbum />
          <h3>Album 1</h3>
        </div>
        <div className="album-card">
          <BiSolidPhotoAlbum />
          <h3>Album 2</h3>
        </div>
        <div className="album-card">
          <BiSolidPhotoAlbum />
          <h3>Album 2</h3>
        </div>
        <div className="album-card">
          <BiSolidPhotoAlbum />
          <h3>Album 2</h3>
        </div>
        <div className="album-card">
          <BiSolidPhotoAlbum />
          <h3>Album 2</h3>
        </div>
        <div className="album-card">
          <BiSolidPhotoAlbum />
          <h3>Album 2</h3>
        </div>
        <div className="album-card">
          <BiSolidPhotoAlbum />
          <h3>Album 2</h3>
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
