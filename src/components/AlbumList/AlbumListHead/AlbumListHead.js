import React from "react";
import "./AlbumListHead.css";

const AlbumListHead = ({ albumForm, setAlbumForm }) => {
  return (
    <div className="album-list-head">
      <h2>Your Albums</h2>
      <button
        className={`${albumForm ? "cancelButton" : "addButton"}`}
        onClick={() => setAlbumForm(!albumForm)}
      >
        {albumForm ? "Cancel" : "Add Album"}
      </button>
    </div>
  );
};

export default AlbumListHead;
