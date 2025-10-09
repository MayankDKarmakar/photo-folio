import React from "react";
import "./ImageListHead.css";
import { TiArrowBack } from "react-icons/ti";
import { ImSearch } from "react-icons/im";

const ImageListHead = () => {
  return (
    <div className="image-list-head">
      <div className="image-list-head-title">
        <TiArrowBack className="go-back-btn" />
        <h2>Images in Album1</h2>
      </div>
      <div className="image-list-head-btns">
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <ImSearch type="submit" className="search-btn" />
        </form>
        <button className="addButton">Add Image</button>
      </div>
    </div>
  );
};

export default ImageListHead;
