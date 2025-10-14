import React from "react";
import "./ImageListHead.css";
import { TiArrowBack } from "react-icons/ti";
import { ImSearch } from "react-icons/im";

const ImageListHead = ({
  selectedAlbum,
  setSelectedAlbum,
  imageForm,
  setImageForm,
  setimageIsUpdating,
  clearInputs,
}) => {
  // console.log("Image ");
  return (
    <div className="image-list-head">
      <div className="image-list-head-title">
        <TiArrowBack
          className="go-back-btn"
          onClick={() => setSelectedAlbum(null)}
        />
        <h2>Images in {selectedAlbum.name}</h2>
      </div>
      <div className="image-list-head-btns">
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <ImSearch type="submit" className="search-btn" />
        </form>
        <button
          className={`${imageForm ? "cancelButton" : "addButton"}`}
          onClick={() => {
            setImageForm(!imageForm);
            setimageIsUpdating(false);
            clearInputs();
          }}
        >
          {imageForm ? "Cancel" : "Add Image"}
        </button>
      </div>
    </div>
  );
};

export default ImageListHead;
