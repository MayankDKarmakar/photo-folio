import React, { useEffect, useState } from "react";
import "./ImageList.css";
import ImageListHead from "./ImageListHead/ImageListHead";
import ImageListGrid from "./ImageListGrid/ImageListGrid";
import ImageForm from "./ImageForm/ImageForm";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import {
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseInit";
import { toast } from "react-toastify";

const ImageList = ({ selectedAlbum, setSelectedAlbum }) => {
  const [imageLists, setImageLists] = useState([]);
  const [imageForm, setImageForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIsUpdating, setimageIsUpdating] = useState(false);
  const [imageTitleFromInput, setImageTitleFromInput] = useState("");
  const [imageUrlFromInput, setImageUrlFromInput] = useState("");
  const [selectedImgForCarousel, setSelectedImgForCarousel] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "albums", `${selectedAlbum.id}`, `${selectedAlbum.name}`),
      (snapShotQuery) => {
        const imageLists = snapShotQuery.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setImageLists(imageLists);
      }
    );

    return () => unsub();
  }, [selectedAlbum]);

  async function handleAddImage(image) {
    // console.log("Image recieved in image list: ", image);
    try {
      await addDoc(
        collection(
          db,
          "albums",
          `${selectedAlbum.id}`,
          `${selectedAlbum.name}`
        ),
        image
      );
      toast.success("Image added successfully");
    } catch (err) {
      toast.error("Failed to add image");
    }
  }

  async function handleUpdateImage(updatedImage) {
    try {
      await setDoc(
        doc(
          db,
          "albums",
          `${selectedAlbum.id}`,
          `${selectedAlbum.name}`,
          `${updatedImage.id}`
        ),
        updatedImage
      );
      toast.success("Image updated successfully");
    } catch (err) {
      toast.error("Failed to update image");
    }
  }

  function clearInputs() {
    setImageTitleFromInput("");
    setImageUrlFromInput("");
  }

  return (
    <div
      className={`image-list ${
        selectedAlbum ? "fadeInCarousel" : "fadeOutCarousel"
      }`}
    >
      <ImageForm
        imageForm={imageForm}
        selectedAlbum={selectedAlbum}
        handleAddImage={handleAddImage}
        selectedImage={selectedImage}
        setImageForm={setImageForm}
        handleUpdateImage={handleUpdateImage}
        imageIsUpdating={imageIsUpdating}
        setimageIsUpdating={setimageIsUpdating}
        imageTitleFromInput={imageTitleFromInput}
        setImageTitleFromInput={setImageTitleFromInput}
        imageUrlFromInput={imageUrlFromInput}
        setImageUrlFromInput={setImageUrlFromInput}
        clearInputs={clearInputs}
      />
      {/* Image List Head container */}
      <ImageListHead
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
        setImageForm={setImageForm}
        imageForm={imageForm}
        setimageIsUpdating={setimageIsUpdating}
        clearInputs={clearInputs}
      />
      <ImageListGrid
        imageLists={imageLists}
        selectedAlbum={selectedAlbum}
        setSelectedImage={setSelectedImage}
        setSelectedImgForCarousel={setSelectedImgForCarousel}
      />
      {selectedImgForCarousel && (
        <ImageCarousel
          imageLists={imageLists}
          selectedImgForCarousel={selectedImgForCarousel}
          setSelectedImgForCarousel={setSelectedImgForCarousel}
        />
      )}
    </div>
  );
};

export default ImageList;
