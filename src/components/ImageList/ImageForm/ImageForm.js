import React, { useEffect, useState } from "react";
import "./ImageForm.css";

const ImageForm = ({
  imageForm,
  selectedAlbum,
  handleAddImage,
  selectedImage,
  setImageForm,
  handleUpdateImage,
  imageIsUpdating,
  setimageIsUpdating,
  imageTitleFromInput,
  setImageTitleFromInput,
  imageUrlFromInput,
  setImageUrlFromInput,
  clearInputs,
}) => {
  // const [imageTitleFromInput, setImageTitleFromInput] = useState("");
  // const [imageUrlFromInput, setImageUrlFromInput] = useState("");

  function sendImage(e) {
    e.preventDefault();

    if (imageIsUpdating) {
      handleUpdateImage({
        title: imageTitleFromInput,
        url: imageUrlFromInput,
        id: selectedImage.id,
      });
      clearInputs();
      setimageIsUpdating(false);
    } else {
      handleAddImage({
        title: imageTitleFromInput,
        url: imageUrlFromInput,
      });
    }

    clearInputs();
  }

  useEffect(() => {
    if (selectedImage) {
      setImageTitleFromInput(selectedImage.title);
      setImageUrlFromInput(selectedImage.url);
      setImageForm(true);
      setimageIsUpdating(true);
    } else return;
  }, [selectedImage]);

  return (
    <div className={`image-form ${imageForm ? "show" : ""}`}>
      <h4 className="image-form-head">
        {imageIsUpdating
          ? `Update image ${selectedImage.title}`
          : `Add image to ${selectedAlbum.name}`}
      </h4>
      <form className="image-form-contents" onSubmit={sendImage}>
        <div className="input-container">
          <input
            type="text"
            required
            placeholder="Title"
            onChange={(e) => setImageTitleFromInput(e.target.value)}
            value={imageTitleFromInput}
          />
          <input
            type="text"
            required
            placeholder="Image URL"
            onChange={(e) => setImageUrlFromInput(e.target.value)}
            value={imageUrlFromInput}
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
            {imageIsUpdating ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageForm;
