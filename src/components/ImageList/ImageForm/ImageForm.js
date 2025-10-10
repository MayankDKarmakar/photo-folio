import React, { useState } from "react";
import "./ImageForm.css";

const ImageForm = ({ imageForm, selectedAlbum, handleAddImage }) => {
  const [imageTitle, setImageTitle] = useState("");
  const [imageURL, setImageURL] = useState("");

  function sendImage(e) {
    e.preventDefault();

    handleAddImage({
      title: imageTitle,
      url: imageURL,
    });
    clearInputs();
  }
  function clearInputs() {
    setImageTitle("");
    setImageURL("");
  }

  return (
    <div className={`image-form ${imageForm ? "show" : ""}`}>
      <h4 className="image-form-head">Add image to {selectedAlbum.name}</h4>
      <form className="image-form-contents" onSubmit={sendImage}>
        <div className="input-container">
          <input
            type="text"
            required
            placeholder="Title"
            onChange={(e) => setImageTitle(e.target.value)}
            value={imageTitle}
          />
          <input
            type="text"
            required
            placeholder="Image URL"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
          />
        </div>
        <div className="btn-container">
          <button
            type="button"
            className=" cancelButton"
            onClick={() => clearInputs()}
          >
            Clear
          </button>
          <button type="submit" className=" addButton">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageForm;
