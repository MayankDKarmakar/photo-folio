import React from "react";
import "./ImageListGrid.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebaseInit";
const ImageListGrid = ({
  imageLists,
  setSelectedImage,
  selectedAlbum,
  setSelectedImgForCarousel,
}) => {
  async function deleteImage(image) {
    await deleteDoc(
      doc(
        db,
        "albums",
        `${selectedAlbum.id}`,
        `${selectedAlbum.name}`,
        `${image.id}`
      )
    );
  }

  return (
    <div className="image-grids">
      {/* Iterating over imageLists to render image cards */}
      {imageLists.map((image, i) => (
        <div
          className="image-card"
          onClick={() => setSelectedImgForCarousel(image)}
          key={i}
        >
          <div className="controlBtns">
            <MdEdit
              className="edit-image-btn"
              onClick={() => setSelectedImage(image)}
            />
            <MdDelete
              className="del-image-btn"
              onClick={() => deleteImage(image)}
            />
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
