import React, { useState } from "react";
import "./AlbumForm.css";

const AlbumForm = ({ albumForm, handleAddAlbum }) => {
  const [albumName, setAlbumName] = useState("");
  function sendAlbumName(e) {
    e.preventDefault();
    handleAddAlbum(albumName);
    setAlbumName("");
  }
  return (
    <div className={`album-form ${albumForm ? "show" : ""}`}>
      <h4 className="album-form-head">Create an Album</h4>
      <form className="album-form-contents" onSubmit={sendAlbumName}>
        <input
          type="text"
          onChange={(e) => setAlbumName(e.target.value)}
          value={albumName}
          placeholder="Album Name"
          required
        />

        <button
          type="button"
          className=" cancelButton"
          onClick={() => setAlbumName("")}
        >
          Clear
        </button>
        <button type="submit" className=" addButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default AlbumForm;
