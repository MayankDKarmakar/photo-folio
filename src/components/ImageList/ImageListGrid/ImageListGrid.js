import React from "react";
import "./ImageListGrid.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const ImageListGrid = ({ imageLists }) => {
  return (
    <div className="image-grids">
      {/* Iterating over imageLists to render image cards */}
      {imageLists.map((image, i) => (
        <div className="image-card" key={i}>
          <div className="controlBtns">
            <MdEdit className="edit-image-btn" />
            <MdDelete className="del-image-btn" />
          </div>
          <div className="image-container">
            <img src={image.url} alt={image.title} />
          </div>
          <h3 className="image-title">{image.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageListGrid;
