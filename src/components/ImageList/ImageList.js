import React, { useEffect, useState } from "react";
import "./ImageList.css";
import ImageListHead from "./ImageListHead/ImageListHead";
import ImageListGrid from "./ImageListGrid/ImageListGrid";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseInit";

const ImageList = () => {
  const [imageLists, setImageLists] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "albums", "6d50zkIwRKERG7iKn7T4", "Nature"),
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
  }, []);

  return (
    <div className="image-list">
      {/* Image List Head container */}
      <ImageListHead />
      <ImageListGrid imageLists={imageLists} />
    </div>
  );
};

export default ImageList;
