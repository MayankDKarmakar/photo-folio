import React, { useEffect, useState } from "react";
import "./ImageList.css";
import ImageListHead from "./ImageListHead/ImageListHead";
import ImageListGrid from "./ImageListGrid/ImageListGrid";
import ImageForm from "./ImageForm/ImageForm";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { toast } from "react-toastify";

const ImageList = ({ selectedAlbum, setSelectedAlbum }) => {
  const [imageLists, setImageLists] = useState([]);
  const [imageForm, setImageForm] = useState(false);

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
  });

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

  return (
    <div className="image-list">
      <ImageForm
        imageForm={imageForm}
        selectedAlbum={selectedAlbum}
        handleAddImage={handleAddImage}
      />
      {/* Image List Head container */}
      <ImageListHead
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
        setImageForm={setImageForm}
        imageForm={imageForm}
      />
      <ImageListGrid imageLists={imageLists} />
    </div>
  );
};

export default ImageList;
