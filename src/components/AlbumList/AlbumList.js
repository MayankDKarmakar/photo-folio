import React from "react";
import "./AlbumList.css";
import { BiPhotoAlbum } from "react-icons/bi";

const AlbumList = () => {
  return (
    <div className="album-list">
      <div className="album-list-head">
        <h2>Your Albums</h2>
        <button className="addBtn">Add album</button>
      </div>
      <div className="album-grids">
        <div className="album-card">
          <div className="album-icon-container">
            <BiPhotoAlbum className="album-icon" />
          </div>
          <h3 className="album-title">Album 1</h3>
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
