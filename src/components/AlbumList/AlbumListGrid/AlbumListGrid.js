import React from "react";
import "./AlbumListGrid.css";
import { BiPhotoAlbum } from "react-icons/bi";

const AlbumListGrid = ({ albums }) => {
  return (
    <div className="album-grids">
      {albums.map((album, i) => (
        <div className="album-card" key={i}>
          <div className="album-icon-container">
            <BiPhotoAlbum className="album-icon" />
          </div>
          <h3 className="album-title">{album.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default AlbumListGrid;
